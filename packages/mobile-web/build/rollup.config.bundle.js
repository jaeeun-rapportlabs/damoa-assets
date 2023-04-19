import babel from '@rollup/plugin-babel';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url'

export default {
  input: 'src/index.ts',
  output: [
    { file: "dist/index.esm.js", format: 'es' }
  ],
  plugins: [
    url(),
    copy({
      targets: [
        { src: resolve('src/index.d.ts'), dest: resolve('dist/') },
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
