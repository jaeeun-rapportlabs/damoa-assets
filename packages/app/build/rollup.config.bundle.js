import babel from '@rollup/plugin-babel';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

const rootDir = resolve(process.cwd(), '..', '..')

export default {
  input: 'src/index.ts',
  output: [
    { file: "dist/index.cjs.js", format: 'cjs' }
  ],
  plugins: [
    copy({
      targets: [
        { src: resolve('src/index.d.ts'), dest: resolve('dist/') },
        { src: resolve(rootDir, 'assets/png/**'), dest: resolve('dist/png/') } // copy PNG files
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
