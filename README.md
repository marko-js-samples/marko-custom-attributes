Sample App: Marko Custom Attributes
======================================

This sample app illustrates how to create a compile-time transform to handle two use cases:

## Custom `repeat(<count>)` attribute

The second custom attribute created in this app allows an element to easily be repeated:

<div repeat(5)>This DIV will be repeated 5 times</div>

The tag is registered in the project's [./src/marko.json](./src/marko.json) file. And the compile-time transformer can be found at [./src/marko/repeat-transformer.js](./src/marko/repeat-transformer.js).

## Custom `base64-src` attribute

This sample app demonstrates adding support for a new custom `base64-src` attribute that can be added to any HTML tag:

```xml
<img base64-src="./marko-logo.png" width=150 height=125 />
```

When rendered, the output should be similar to the following:

```html
<img width="150" height="125" src="data:image/png;base64,...">
```

The tag is registered in the project's [./src/marko.json](./src/marko.json) file. And the compile-time transformer can be found at [./src/marko/img-transformer.js](./src/marko/img-transformer.js).

# Installation

```
git clone https://github.com/marko-js-samples/marko-custom-attributes.git
cd marko-custom-attributes
npm install
node .
```