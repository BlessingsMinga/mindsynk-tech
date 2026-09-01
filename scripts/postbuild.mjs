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
