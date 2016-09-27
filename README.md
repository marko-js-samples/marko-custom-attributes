Sample App: Marko Custom Attributes
======================================

This sample app illustrates how to create a compile-time transform to handle a new custom `base64-src` on a standard
HTML `<img>` tag:

```xml
<img base64-src="./marko-logo.png" width=150 height=125 />
```

When rendered, the output should be similar to the following:

```html
<img width="150" height="125" src="data:image/png;base64,...">
```

# Installation

```
git clone https://github.com/marko-js-samples/marko-custom-attributes.git
cd marko-custom-attributes
npm install
node run.js
```