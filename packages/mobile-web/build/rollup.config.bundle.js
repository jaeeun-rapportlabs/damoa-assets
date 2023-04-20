import babel from '@rollup/plugin-babel';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url'
import multi from '@rollup/plugin-multi-entry'

export default [
  {
    input: 'src/png/index.ts',
    output: {
      dir: 'dist/png',
      format: 'es',
    },
    plugins: [
      url(),
      copy({
        targets: [
          { src: resolve('src/png/index.d.ts'), dest: resolve('dist/png') },
        ]
      }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    input: 'src/svg/index.ts',
    output: {
      dir: 'dist/svg',
      format: 'es',
    },
    plugins: [
      url(),
      copy({
        targets: [
          { src: resolve('src/svg/index.d.ts'), dest: resolve('dist/svg') },
        ]
      }),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  }
];
