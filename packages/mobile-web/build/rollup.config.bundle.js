import { resolve, dirname, basename } from 'path';
import fs from 'fs';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url'
import generatePackageJson from "rollup-plugin-generate-package-json";

export default [
  {
    input: 'src/png/index.ts',
    output: { file: "png/index.esm.js", format: 'es' },
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
              name: basename(id),
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
          private: true,
          module: "./index.esm.js", // --> points to esm format entry point of individual component
          types: "./index.d.ts", // --> points to types definition file of individual component
        },
      })
    ],
  },
  {
    input: 'src/svg/index.ts',
    output: { file: "svg/index.esm.js", format: 'es' },
    plugins: [
      {
        name: 'svg-resolver',
        resolveId(source, importer) {
          if (source.endsWith('.svg')) {
            return resolve(dirname(importer), source);
          }
        },
        load(id) {
          if (id.endsWith('.svg')) {
            const referenceId = this.emitFile({
              type: 'asset',
              name: basename(id),
              source: fs.readFileSync(id)
            });
            return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
          }
        }
      },
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
          module: "./index.esm.js", // --> points to esm format entry point of individual component
          types: "./index.d.ts", // --> points to types definition file of individual component
        },
      })
    ],
  }
];