#!/usr/bin/env node

const checkContrast = require('./index');

const [,, color1, color2] = process.argv;

if (!color1 || !color2) {
  console.log('Usage: color-contrast-checker <color1> <color2>');
  console.log('Example: color-contrast-checker "#ffffff" "rgb(0,0,0)"');
  process.exit(1);
}

try {
  const result = checkContrast(color1, color2);
  console.log(`\n Contrast Ratio: ${result.ratio}`);
  console.log(` WCAG AA - Normal Text: ${result.AA.normalText}`);
  console.log(` WCAG AA - Large Text: ${result.AA.largeText}`);
  console.log(` WCAG AAA - Normal Text: ${result.AAA.normalText}`);
  console.log(` WCAG AAA - Large Text: ${result.AAA.largeText}`);
} catch (err) {
  console.error('\n Error:', err.message);
  process.exit(1);
}
