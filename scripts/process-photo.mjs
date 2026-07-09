// One-off: crop the source portrait to an upper-body 4:5 and optimize it.
// Run: node scripts/process-photo.mjs
import sharp from "sharp";

const SRC =
  "/Users/sodiqolatunde/Downloads/drive-download-20260709T110550Z-2-001/7sm54n.jpg";

// Source is 3024×3024. Crop an upper-body 4:5 portrait (head → hips),
// centered horizontally on the subject.
const region = { left: 820, top: 110, width: 1380, height: 1725 };

const base = sharp(SRC).extract(region).resize(1200, 1500, { fit: "cover" });

await base
  .clone()
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/sodiq.jpg");

await base.clone().webp({ quality: 80 }).toFile("public/sodiq.webp");

const meta = await sharp("public/sodiq.jpg").metadata();
console.log(`✓ public/sodiq.jpg  ${meta.width}x${meta.height}`);
