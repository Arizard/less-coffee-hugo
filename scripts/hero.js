import { Resvg } from '@resvg/resvg-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const colors = [
  '#ff5252', '#ff4081', '#e040fb', '#7c4dff',
  '#536dfe', '#448aff', '#ff6e40', '#bcaaa4',
  '#b0bec5', '#ff8a80', '#ea80fc', '#8c9eff',
];

const lineArgs = process.argv.slice(2);
if (lineArgs.length !== 3) { console.error('Usage: node svg.js "Line 1" "Line 2" "tag"'); process.exit(1); }

const lines = lineArgs.slice(undefined, 2).filter(line => line !== "");

const input = lineArgs.at(2);
let hash = 0;
for (const c of input) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
const bg = colors[hash % colors.length];

const scale = 1;
const W = 1920 * scale, H = 1080 * scale;
const cx = W / 2;
const cy = H / 2;

const fontSize = 140 * scale;
const lineHeight = fontSize * 1.2;
const startY = -(lines.length - 1) * lineHeight / 2;

const tspans = lines.map((line, i) =>
  `<tspan x="50%" dy="${i === 0 ? startY : lineHeight}">${line}</tspan>`
).join('\n    ');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <text
    x="${cx}"
    y="${cy}"
    font-family="Manrope, sans-serif"
    font-size="${fontSize}"
    letter-spacing="-5"
    fill="white"
    text-anchor="middle"
    dominant-baseline="middle"
  >
    ${tspans}
  </text>
</svg>`;

const fontPath = join(__dirname, 'Manrope-Bold.ttf');

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1900,
  },
  font: {
    fontFiles: [fontPath],
    loadSystemFonts: false,
    defaultFontFamily: "Manrope",
  },
});

process.stdout.write(resvg.render().asPng());
