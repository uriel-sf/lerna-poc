import pkg from "./package.json";
import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";

export default () => [
  {
    input: "src/index.ts",
    output: {
      file: "./lib/index.js",
      format: "cjs"
    },
    plugins: [typescript()]
  },
  {
    input: "src/index.ts",
    output: [{ file: "./lib/index.d.ts", format: "cjs" }],
    plugins: [dts()]
  }
];
