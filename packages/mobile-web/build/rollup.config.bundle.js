import { resolve, dirname, basename } from 'path';
import fs from 'fs';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url'
import generatePackageJson from "rollup-plugin-generate-package-json";

export default [
  {
    input: 'src/png/index.ts',
    output: {
      dir: "png",
      format: 'es',
      preserveModules: true, // indicate not create a single-file
      preserveModulesRoot: 'src/png', // optional but useful to create a more plain folder structure
    },
    plugins: [
      url(),
      copy({
        targets: [
          { src: resolve('src/png/index.d.ts'), dest: resolve('png') },
        ]
      }),
      generatePackageJson({
        baseContents: {
          name: `damoa-assets-mobile-web/png`,
          private: true,
          module: "./index.js", // --> points to esm format entry point of individual component
          types: "./index.d.ts", // --> points to types definition file of individual component
        },
      })
    ],
  },
  {
    input: 'src/svg/index.ts',
    output: {
      dir: "svg",
      format: 'es',
      preserveModules: true, // indicate not create a single-file
      preserveModulesRoot: 'src/svg', // optional but useful to create a more plain folder structure
    },
    plugins: [
      url(),
      copy({
        targets: [
          { src: resolve('src/svg/index.d.ts'), dest: resolve('svg') },
        ]
      }),
      generatePackageJson({
        baseContents: {
          name: `damoa-assets-mobile-web/svg`,
          private: true,
          module: "./index.js", // --> points to esm format entry point of individual component
          types: "./index.d.ts", // --> points to types definition file of individual component
        },
      })
    ],
  }
];