import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url'
import generatePackageJson from "rollup-plugin-generate-package-json";

export default [
  {
    input: 'src/png/index.ts',
    output: [
      { file: "dist/png/index.esm.js", format: 'es' },
      { file: "dist/png/index.cjs.js", format: 'cjs' },
    ],
    plugins: [
      url(),
      copy({
        targets: [
          { src: resolve('src/png/index.d.ts'), dest: resolve('dist/png') },
        ]
      }),
      generatePackageJson({
        baseContents: {
          name: `damoa-assets-mobile-web/png`,
          private: true,
          module: "./index.esm.js", // --> points to esm format entry point of individual component
          types: "./index.d.ts", // --> points to types definition file of individual component
        },
      })
    ],
  },
  {
    input: 'src/svg/index.ts',
    output: [
      { file: "dist/svg/index.esm.js", format: 'es' },
      { file: "dist/svg/index.cjs.js", format: 'cjs' },
    ],
    plugins: [
      url(),
      copy({
        targets: [
          { src: resolve('src/svg/index.d.ts'), dest: resolve('dist/svg') },
        ]
      }),
      generatePackageJson({
        baseContents: {
          name: `damoa-assets-mobile-web/svg`,
          private: true,
          module: "./index.esm.js", // --> points to esm format entry point of individual component
          types: "./index.d.ts", // --> points to types definition file of individual component
        },
      })
    ],
  }
];
