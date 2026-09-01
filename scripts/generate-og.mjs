// Generates public/og.png — a 1200×630 brand Open Graph image for
// link sharing (LinkedIn, WhatsApp, Facebook, X/Twitter).
// Run: node scripts/generate-og.mjs
import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const SVG = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#14152a"/>
      <stop offset="1" stop-color="#1d1e32"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f15922"/>
      <stop offset="1" stop-color="#ff9d5c"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- ambient brand glows -->
  <circle cx="1010" cy="90" r="300" fill="#f15922" opacity="0.14"/>
  <circle cx="120" cy="620" r="260" fill="#ff9d5c" opacity="0.09"/>
  <circle cx="1140" cy="560" r="200" fill="#7e8bff" opacity="0.10"/>

  <!-- left accent rail -->
  <rect x="80" y="0" width="5" height="630" fill="url(#accent)"/>

  <text x="100" y="392" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="700" fill="#ffffff">
    Powering Progress
  </text>
  <text x="100" y="466" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="700" fill="url(#accent)">
    Through Technology
  </text>

  <text x="100" y="530" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#c6c9de">
    Enterprise software, cloud, data &amp; design — from Lilongwe, Malawi.
  </text>

  <text x="100" y="584" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#ff9d5c">
    mindsynk.tech
  </text>
</svg>
`

async function main() {
  const logoPath = path.join(ROOT, "public", "MindSynk_Full-dark.png")
  const base = await sharp(Buffer.from(SVG)).png().toBuffer()
  const logo = await sharp(logoPath).resize({ width: 350 }).png().toBuffer()

  await sharp(base)
    .composite([{ input: logo, top: 84, left: 100 }])
    .png()
    .toFile(path.join(ROOT, "public", "og.png"))

  console.log("[generate-og] public/og.png written (1200×630).")
}

main().catch((error) => {
  console.error("[generate-og] failed:", error)
  process.exit(1)
})