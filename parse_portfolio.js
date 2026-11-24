const fs = require('fs');
const html = fs.readFileSync('scratch_full.html', 'utf8');

const idx = html.indexOf('id="portfolio"');
console.log('id="portfolio" index:', idx);

if (idx !== -1) {
  const next = html.indexOf('<section', idx + 10);
  const sec = html.substring(idx - 10, next !== -1 ? next : idx + 35000);
  fs.writeFileSync('portfolio_extracted.html', sec);
  console.log('Saved portfolio_extracted.html, length:', sec.length);
  
  // Find all images inside the portfolio section
  const imgRegex = /<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"[^>]*>/gi;
  let m;
  const images = [];
  while ((m = imgRegex.exec(sec))) {
    images.push({ src: m[1], alt: m[2] });
  }
  console.log('Total images found in portfolio:', images.length);
  console.log(JSON.stringify(images, null, 2));
} else {
  console.log('portfolio section not found');
}
