import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.dirname(__dirname, '..');

const rootPackageJsonPath = path.join(root, 'package.json');
const packagesDir = path.join(root, 'packages');

async function updateVersions() {
  try {
    const rootPackageJson = JSON.parse(await fs.readFile(rootPackageJsonPath));
    const newVersion = rootPackageJson.version;

    if (!newVersion) {
      console.error('Could not find a version in the root package.json.');
      process.exit(1);
    }

    const packages = await fs.readdir(packagesDir);

    for (const packageName of packages) {
      const packagePath = path.join(packagesDir, packageName);
      const packageJsonPath = path.join(packagePath, 'package.json');

      try {
        await fs.access(packageJsonPath);
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath));
        packageJson.version = newVersion;

        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log(`Updated version for package ${packageName} to ${newVersion}`);
      } catch (err) {
        console.error(`Error updating version for package ${packageName}:`, err);
      }
    }
  } catch (err) {
    console.error('Error reading root package.json or packages directory:', err);
    process.exit(1);
  }
}

updateVersions();

