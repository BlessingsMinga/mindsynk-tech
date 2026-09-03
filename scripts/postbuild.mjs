// Cross-platform post-build step for the Next.js standalone output.
// It copies static assets into the standalone server directory.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const standaloneDir = path.join(root, ".next", "standalone");

function copyDir(source, destination) {
  if (!fs.existsSync(source)) {
    console.warn(`[postbuild] Skipping missing directory: ${source}`);
    return;
  }

  fs.mkdirSync(destination, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);
    if (entry.isDirectory()) copyDir(sourcePath, destinationPath);
    else fs.copyFileSync(sourcePath, destinationPath);
  }
}

if (!fs.existsSync(standaloneDir)) {
  console.error('[postbuild] ERROR: .next/standalone was not generated.');
  process.exit(1);
}

copyDir(path.join(root, ".next", "static"), path.join(standaloneDir, ".next", "static"));
copyDir(path.join(root, "public"), path.join(standaloneDir, "public"));
console.log(`[postbuild] Copied static assets into ${path.relative(root, standaloneDir)}.`);
function copyPackage(packageName) {
  // Overlay the complete package from node_modules. Do not delete the existing
  // standalone package first: a production server may still be serving from
  // this directory while a new build is being prepared. Removing it creates a
  // short window where Next's image optimizer cannot resolve sharp.
  const parts = packageName.split("/");
  const source = path.join(root, "node_modules", ...parts);
  const destination = path.join(standaloneDir, "node_modules", ...parts);
  if (!fs.existsSync(source)) {
    console.warn(`[postbuild] Skipping missing package: ${packageName}`);
    return;
  }
  copyDir(source, destination);
  console.log(`[postbuild] Copied ${packageName} into standalone node_modules.`);
}

// sharp is loaded DYNAMICALLY by the Next.js image optimizer (require('sharp') inside
// a try/catch) and sharp itself loads its platform binary via a dynamic
// require(`@img/sharp-${platform}-${arch}}`) — both are invisible to the static
// file tracer (@vercel/nft) behind output: "standalone". As a result the standalone
// bundle ships with an incomplete sharp tree (or none at all) and the production
// server crashes on the first optimized image with ENOENT ...sharp/lib/index.js.

// Copy the full sharp package, its @img native binaries (+ @img/colour) and its
// plain-JS runtime deps so the standalone server can load it regardless of what
// the tracer managed to discover. The @img/sharp-<os>-<arch> packages are
// os/cpu-scoped optional deps, so this copies the native module for whatever
// platform the build runs on (win32 locally, linux on the deployment build)。)
copyPackage("sharp");
copyPackage("@img");
copyPackage("detect-libc");
copyPackage("semver");
