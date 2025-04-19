# 🎨 color-contrast-checker

Check the contrast ratio between two colors and verify WCAG accessibility compliance.

Supports:
- ✅ Hex colors (`#ffffff`, `#000`)
- ✅ `rgb()` and `rgba()` formats
- ✅ Command Line Interface (CLI)
- ✅ WCAG AA & AAA compliance check

---

## 📦 Installation

### As a dependency
```bash
npm install color-contrast-checker
```

### Or use directly via npx (no install)
```bash
npx color-contrast-checker "#ffffff" "rgba(0,0,0,1)"
```

---

## 🧑‍💻 Usage

### 🔸 In JavaScript

```js
const checkContrast = require('color-contrast-checker');

const result = checkContrast('#ffffff', 'rgb(0, 0, 0)');
console.log(result);
```

**Output:**

```json
{
  "ratio": 21,
  "AA": {
    "normalText": true,
    "largeText": true
  },
  "AAA": {
    "normalText": true,
    "largeText": true
  }
}
```

---

### 🔸 CLI Usage

```bash
npx color-contrast-checker "#ffffff" "rgba(0, 0, 0, 1)"
```

**Output:**
```
🟢 Contrast Ratio: 21
✅ WCAG AA - Normal Text: true
✅ WCAG AA - Large Text: true
✅ WCAG AAA - Normal Text: true
✅ WCAG AAA - Large Text: true
```

You can use:

- Hex colors: `#fff`, `#ffffff`  
- RGB: `rgb(0, 0, 0)`  
- RGBA: `rgba(255, 255, 255, 0.8)`


---

## 👀 Visual Demo

You can preview contrast visually using the included [index.html](./index.html):

### Run it locally
```bash
# In your project root
open index.html
# or just double click the file to open in your browser
```
---

## 📁 Project Structure

```
color-contrast-checker/
│
├── index.js              # Core logic
├── cli.js                # Command Line Interface
├── test/
│   └── index.test.js     # Unit tests
├── index.html            # Visual browser demo
├── package.json
└── README.md
```

---

## 📜 License

MIT © Thavindu Liyanage
