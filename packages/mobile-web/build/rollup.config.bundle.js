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
      preserveModules: true,
      preserveModulesRoot: 'src/png',
      entryFileNames: 'assets/../[name].js',
      assetFileNames: 'assets/png/[name][extname]', // Customize output path for .png files
    },
    plugins: [
      {
        name: 'png-resolver',
        resolveId(source, importer) {
          if (source.endsWith('.png')) {
            return resolve(dirname(importer), source);
          }
        },
        load(id) {
          if (id.endsWith('.png')) {
            const referenceId = this.emitFile({
              type: 'asset',
              name: `assets/../png/../raw/${basename(id)}`,
              source: fs.readFileSync(id)
            });
            return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
          }
        }
      },
      url(),
      copy({
        targets: [
          { src: resolve('src/png/index.d.ts'), dest: resolve('png') },
        ]
      }),
      generatePackageJson({
        baseContents: {
          name: `damoa-assets-mobile-web/png`,
          type: "module",
          private: true,
          main: "./index.js",
          module: "./index.js",
          types: "./index.d.ts",
          sideEffects: false
        },
      })
    ],
  },
  {
    input: 'src/svg/index.ts',
    output: {
      dir: "svg",
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src/svg',
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
          type: "module",
          private: true,
          main: "./index.js",
          module: "./index.js",
          types: "./index.d.ts",
        },
      })
    ],
  }
];