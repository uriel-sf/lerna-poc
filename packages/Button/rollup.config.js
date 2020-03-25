import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

module.exports = {
  input: "src/index.ts",
  output: {
    file: pkg.main,
    format: "cjs"
  },
  plugins: [typescript()]
};
