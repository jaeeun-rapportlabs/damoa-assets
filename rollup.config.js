import babel from '@rollup/plugin-babel';
import { join, resolve } from 'path';
import copy from 'rollup-plugin-copy';
import pkg from '../package.json';
import url from '@rollup/plugin-url'

const resolveFile = function(filePath) {
  return join(__dirname, '..', filePath)
}

const configs = [
  {
    input: 'packages/app/src/index.ts',
    output: {
      file: 'packages/app/dist/index.js',
      format: 'es',
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: 'packages/mobile-web/src/index.ts',
    output: {
      file: 'packages/mobile-web/dist/index.js',
      format: 'es',
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
];

export default configs;