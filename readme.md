# Tailwind CSS List Style Plugin

This plugin adds utilities to use list-style with Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using pnpm
pnpm install --save-dev tailwindcss-list-style

# Install using npm
npm install --save-dev tailwindcss-list-style

# Install using yarn
yarn add -D tailwindcss-list-style
```

## Usage

```js
require('tailwindcss-list-style')(['responsive']),
```

```css
.list-disc { list-style-type: 'disc'; }
.list-circle { list-style-type: 'circle'; }
.list-square { list-style-type: 'square'; }
.list-decimal { list-style-type: 'decimal'; }
.list-decimal-leading-zero { list-style-type: 'decimal-leading-zero'; }
.list-lower-roman { list-style-type: 'lower-roman'; }
.list-upper-roman { list-style-type: 'upper-roman'; }
.list-lower-greek { list-style-type: 'lower-greek'; }
.list-lower-latin { list-style-type: 'lower-latin'; }
.list-upper-latin { list-style-type: 'upper-latin'; }
.list-armenian { list-style-type: 'armenian'; }
.list-georgian { list-style-type: 'georgian'; }
.list-lower-alpha { list-style-type: 'lower-alpha'; }
.list-upper-alpha { list-style-type: 'upper-alpha'; }
.list-none { list-style-type: 'none'; }

.list-inside { list-style-position: 'inside'; }
.list-outside { list-style-position: 'outside'; }
```
