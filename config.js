System.config({
  transpiler: "plugin-babel",
  map: {
    "plugin-babel": "https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js",
    "systemjs-babel-build": "https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
    "react": "https://unpkg.com/react@18/umd/react.development.js",
    "react-dom": "https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  }
});
System.import("./app.js");