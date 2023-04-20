import fs from 'fs'
import icons from '../assets/data.js'
import { join } from 'path'

const rootDir = join()
const appSrcDir = join(rootDir, 'packages', 'app', 'src')
const mobileWebSrcDir = join(rootDir, 'packages', 'mobile-web', 'src')

const generateAppIndex = () => {
  if (!fs.existsSync(appSrcDir)) {
    fs.mkdirSync(appSrcDir)
  }
  fs.writeFileSync(join(appSrcDir, 'index.ts'), '', 'utf-8');
  fs.writeFileSync(join(appSrcDir, 'index.d.ts'), '', 'utf-8');
}

const generateMobileWebIndex = () => {
  if (!fs.existsSync(mobileWebSrcDir)) {
    fs.mkdirSync(mobileWebSrcDir)
  }
  fs.writeFileSync(join(mobileWebSrcDir, 'index.ts'), '', 'utf-8');
  fs.writeFileSync(join(mobileWebSrcDir, 'index.d.ts'), '', 'utf-8');
}

const appendToApp = ({ name }) => {
  const exportString = `export const ${name} = require('./png/${name}.png');\r\n`;
  const exportTypeString = `declare const ${name}: number;\nexport { ${name} };\r\n`;

  fs.appendFileSync(
    join(appSrcDir, 'index.ts'),
    exportString,
    'utf-8',
  );

  fs.appendFileSync(
    join(appSrcDir, 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
}

const appendToMobileWeb = ({ name }) => {
  /* 2. svg export 방식 */
  const exportString = `import ${name}_svg from '../../../assets/svg/${name}.svg'\nexport const ${name} = ${name}_svg;\r\n`;
  const exportTypeString = `export const ${name}: string;\n`;

  /* 3. png (+ @2x, @3x) export 방식 */
  // const exportString = `
  //   import ${name}_png from './png/${name}/${name}.png'
  //   import ${name}_2x_png from './png/${name}/${name}@2x.png'
  //   import ${name}_3x_png from './png/${name}/${name}@3x.png'

  //   export const ${name} = ${name}_png
  //   export const ${name}_2x = ${name}_2x_png
  //   export const ${name}_3x = ${name}_3x_png\n
  // `;

  // const exportTypeString = `
  //   export const ${name}: string;
  //   export const ${name}_2x: string;
  //   export const ${name}_3x: string;\n
  // `;

  fs.appendFileSync(
    join(mobileWebSrcDir, 'index.ts'),
    exportString,
    'utf-8',
  );

  fs.appendFileSync(
    join(mobileWebSrcDir, 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
}

generateAppIndex()
generateMobileWebIndex()

Object
  .keys(icons)
  .map(key => icons[key])
  .forEach(({name}) => {
    appendToApp({ name })
    appendToMobileWeb({ name })
  })
