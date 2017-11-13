export default {
  input: "js/app.js",
  external: [
    "d3",
    "d3-redux",
    "director",
    "redux",
    "todomvc-common"
  ],
  output: {
    file: "build/bundle.js",
    format: "iife",
    name: "todoapp"
  }
};
