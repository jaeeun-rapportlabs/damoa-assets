import fs from 'fs'
import icons from '../assets/data.js'
import { join } from 'path'

const rootDir = join()
const appSrcDir = join(rootDir, 'packages', 'app', 'src')
const mobileWebSrcDir = join(rootDir, 'packages', 'mobile-web', 'src')
const mobileWebPngSrcDir = join(rootDir, 'packages', 'mobile-web', 'src', 'png')
const mobileWebSvgSrcDir = join(rootDir, 'packages', 'mobile-web', 'src', 'svg')

const generateAppIndex = () => {
  if (!fs.existsSync(appSrcDir)) {
    fs.mkdirSync(appSrcDir)
  }
  fs.writeFileSync(join(appSrcDir, 'index.ts'), '', 'utf-8');
  fs.writeFileSync(join(appSrcDir, 'index.d.ts'), '', 'utf-8');
}

const generateMobileWebIndex = () => {
  fs.mkdirSync(mobileWebSrcDir)
  fs.mkdirSync(mobileWebPngSrcDir)
  fs.mkdirSync(mobileWebSvgSrcDir)

  fs.writeFileSync(join(mobileWebPngSrcDir, 'index.ts'), '', 'utf-8');
  fs.writeFileSync(join(mobileWebPngSrcDir, 'index.d.ts'), `declare module 'damoa-assets-mobile-web/png' {`, 'utf-8');
  fs.writeFileSync(join(mobileWebSvgSrcDir, 'index.ts'), '', 'utf-8');
  fs.writeFileSync(join(mobileWebSvgSrcDir, 'index.d.ts'), `declare module 'damoa-assets-mobile-web/svg' {`, 'utf-8');
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
  /* 1. svg export 방식 */
  const exportSvgString = `import ${name}_svg from '../../../../assets/svg/${name}.svg'\nexport const ${name} = ${name}_svg;\r\n`;
  const exportSvgTypeString = `export const ${name}: string;\n`;

  /* 2. png (+ @2x, @3x) export 방식 */
  const exportPngString = `
    import ${name}_png from '../../../../assets/png/${name}.png'
    import ${name}_2x_png from '../../../../assets/png/${name}@2x.png'
    import ${name}_3x_png from '../../../../assets/png/${name}@3x.png'

    export const ${name} = ${name}_png
    export const ${name}_2x = ${name}_2x_png
    export const ${name}_3x = ${name}_3x_png\n
  `;

  const exportPngTypeString = `
    export const ${name}: string;
    export const ${name}_2x: string;
    export const ${name}_3x: string;\n
  `;

  fs.appendFileSync(
    join(mobileWebSvgSrcDir, 'index.ts'),
    exportSvgString,
    'utf-8',
  );

  fs.appendFileSync(
    join(mobileWebSvgSrcDir, 'index.d.ts'),
    exportSvgTypeString,
    'utf-8',
  );

  fs.appendFileSync(
    join(mobileWebPngSrcDir, 'index.ts'),
    exportPngString,
    'utf-8',
  );

  fs.appendFileSync(
    join(mobileWebPngSrcDir, 'index.d.ts'),
    exportPngTypeString,
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

  fs.appendFileSync(
    join(mobileWebSvgSrcDir, 'index.d.ts'),
    `}`,
    'utf-8',
  );

  fs.appendFileSync(
    join(mobileWebPngSrcDir, 'index.d.ts'),
    `}`,
    'utf-8',
  );