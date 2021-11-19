import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";

const EXTERNAL = Object.keys(pkg.devDependencies);
const EXTENSIONS = [".ts", ".tsx"];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      name: 'rpg-design-system',
      preserveModules: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: EXTENSIONS,
    }),
    babel({
      extensions: EXTENSIONS,
      babelHelpers: "runtime",
      include: EXTENSIONS.map(ext => `src/**/*${ext}`),
      exclude: ['src/**/*.stories.*'],
      plugins: ["@babel/plugin-transform-runtime"]
    })
  ],
  external: EXTERNAL,
}
