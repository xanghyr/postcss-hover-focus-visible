# PostCSS Hover focus-visible

[PostCSS]  plugin to add `:focus-visible` selector and/or `:focus` to every `:hover`, this is for keyboard accessibility.

[PostCSS]:                    https://github.com/postcss/postcss

Before
```css
*:focus {
  text-decoration: underline;
}
.button:hover {
  color: blue;
}
```

After
```css
*:focus {
  text-decoration: underline;
}
.button:hover, .button:focus-visible {
  color: blue;
}
```

If there is a `:focus-visible` selector, it will be excluded from the processing.


## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss-hover-focus-visible
yarn add -D postcss-hover-focus-visible
```

**Step 2:** Add the plugin to postCSS plugins list:

```js
var postcssHoverFocus = require('postcss-hover-focus-visible');

postcss([
  postcssHoverFocus({focusVisible: true, focus: false}) 
])
```

[official docs]: https://github.com/postcss/postcss#usage
