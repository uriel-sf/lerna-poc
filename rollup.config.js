import pkg from "./package.json";
import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";

export default () => [
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs"
    },
    plugins: [typescript()]
  },
  {
    input: "src/index.ts",
    output: [{ file: pkg.types, format: "cjs" }],
    plugins: [dts()]
  }
];
