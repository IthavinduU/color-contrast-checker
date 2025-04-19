// index.js

function parseColor(input) {
  if (!input) throw new Error("Color is undefined or empty");

  if (input.startsWith("#")) {
    const hex = input.replace("#", "");
    if (![3, 6].includes(hex.length)) throw new Error("Invalid hex format");
    const fullHex =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;
    const bigint = parseInt(fullHex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  const rgbMatch = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1]),
      parseInt(rgbMatch[2]),
      parseInt(rgbMatch[3]),
    ];
  }

  throw new Error("Unsupported color format. Use hex, rgb(), or rgba().");
}

function luminance([r, g, b]) {
  const channel = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function getContrastRatio(rgb1, rgb2) {
  const L1 = luminance(rgb1);
  const L2 = luminance(rgb2);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function checkContrast(color1, color2) {
  const rgb1 = parseColor(color1);
  const rgb2 = parseColor(color2);
  const ratio = parseFloat(getContrastRatio(rgb1, rgb2).toFixed(2));

  return {
    ratio,
    AA: {
      normalText: ratio >= 4.5,
      largeText: ratio >= 3.0,
    },
    AAA: {
      normalText: ratio >= 7.0,
      largeText: ratio >= 4.5,
    },
  };
}

module.exports = checkContrast;
