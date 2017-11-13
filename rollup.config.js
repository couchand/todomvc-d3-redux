import resolve from 'rollup-plugin-node-resolve';

export default {
  input: "js/app.js",
  external: [
    "redux",
    "director"
  ],
  output: {
    file: "build/bundle.js",
    format: "iife",
    name: "todoapp",
    globals: {
      "redux": "Redux",
      "director": "window"
    }
  },
  plugins: [
    resolve({
      jsnext: true
    })
  ]
};
