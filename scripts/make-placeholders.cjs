const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../public/placeholders");
fs.mkdirSync(dir, { recursive: true });

function card({ id, bg, fg, accent, extra = "" }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-label="${id}">
  <rect width="1200" height="720" fill="${bg}"/>
  <rect x="48" y="48" width="1104" height="624" fill="none" stroke="${accent}" stroke-width="2"/>
  <text x="72" y="100" fill="${accent}" font-family="Georgia, serif" font-size="22" letter-spacing="6">QIRALUM</text>
  <text x="72" y="380" fill="${fg}" font-family="ui-sans-serif, sans-serif" font-size="48">${id}</text>
  ${extra}
</svg>`;
}

const files = {
  temp_home_hero: card({
    id: "temp_home_hero",
    bg: "#f4efe8",
    fg: "#1b1714",
    accent: "#b0894a",
    extra: `<text x="72" y="430" fill="#6b625a" font-size="22">Young faith. Everyday style. Worn by all.</text>`,
  }),
  temp_04_hero: card({
    id: "temp_04_hero",
    bg: "#161616",
    fg: "#f4efe8",
    accent: "#b0894a",
    extra: `<circle cx="980" cy="360" r="90" fill="none" stroke="#cfcfcf" stroke-width="18"/>`,
  }),
  temp_04_wrist: card({
    id: "temp_04_wrist",
    bg: "#1f1f1f",
    fg: "#f4efe8",
    accent: "#8a8a8a",
    extra: `<ellipse cx="900" cy="400" rx="160" ry="70" fill="none" stroke="#cfcfcf" stroke-width="14"/>`,
  }),
  temp_04_detail: card({
    id: "temp_04_detail",
    bg: "#111",
    fg: "#f4efe8",
    accent: "#b0894a",
    extra: `<text x="72" y="430" fill="#8a8a8a" font-size="20">04_black_agate · 210 × 18</text>`,
  }),
  temp_07_hero: card({
    id: "temp_07_hero",
    bg: "#c57a52",
    fg: "#2a140c",
    accent: "#f4efe8",
    extra: `<circle cx="980" cy="360" r="90" fill="none" stroke="#2a140c" stroke-width="16"/>`,
  }),
  temp_07_wrist: card({
    id: "temp_07_wrist",
    bg: "#e8cbb8",
    fg: "#2a140c",
    accent: "#b85c38",
    extra: `<ellipse cx="900" cy="400" rx="150" ry="64" fill="none" stroke="#b85c38" stroke-width="12"/>`,
  }),
  temp_07_detail: card({
    id: "temp_07_detail",
    bg: "#f0d9cc",
    fg: "#2a140c",
    accent: "#b85c38",
    extra: `<text x="72" y="430" fill="#6b3a28" font-size="20">07_terracotta_bloom · 190 × 16</text>`,
  }),
};

files.temp_nfc_near_phone = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-label="temp_nfc_near_phone">
  <rect width="1200" height="720" fill="#f4efe8"/>
  <text x="60" y="70" fill="#b0894a" font-family="Georgia, serif" font-size="20" letter-spacing="6">QIRALUM</text>
  <text x="60" y="110" fill="#1b1714" font-family="ui-sans-serif, sans-serif" font-size="28">temp_nfc_near_phone</text>
  <text x="60" y="150" fill="#6b625a" font-size="16">Phone near the piece — not jammed onto it</text>
  <!-- phone, left, clearly separated -->
  <rect x="160" y="210" rx="28" ry="28" width="220" height="400" fill="#1b1714"/>
  <rect x="178" y="248" rx="8" ry="8" width="184" height="300" fill="#d7e4ef"/>
  <circle cx="270" cy="575" r="10" fill="#f4efe8"/>
  <text x="270" y="640" text-anchor="middle" fill="#1b1714" font-size="16">phone</text>
  <!-- gap + near waves, not overlapping the bracelet -->
  <path d="M430 400 h90" stroke="#b0894a" stroke-width="2" stroke-dasharray="6 8"/>
  <path d="M500 360 c30 0 30 80 0 80" fill="none" stroke="#b0894a" stroke-width="3"/>
  <path d="M530 335 c50 0 50 130 0 130" fill="none" stroke="#b0894a" stroke-width="2"/>
  <text x="470" y="330" fill="#b85c38" font-size="18">near</text>
  <!-- bracelet on the right, gap preserved -->
  <ellipse cx="820" cy="400" rx="150" ry="58" fill="none" stroke="#1b1714" stroke-width="16"/>
  <ellipse cx="820" cy="400" rx="118" ry="36" fill="none" stroke="#b0894a" stroke-width="3"/>
  <text x="820" y="500" text-anchor="middle" fill="#1b1714" font-size="16">bracelet</text>
  <text x="600" y="680" text-anchor="middle" fill="#6b625a" font-size="14">Hold near. Do not press the phone onto the chip.</text>
</svg>`;

for (const [name, svg] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), svg);
  console.log("wrote", name);
}
