// Downloads every file listed in src/data/assetPaths.js into public/wp-content/uploads
// Run once:  npm run download-images
// Then set VITE_ASSET_BASE=/wp-content/uploads in your .env
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { PATHS } from '../src/data/assetPaths.js'

const ORIGIN = 'https://alphacristo.com/wp-content/uploads'
const OUT = join(process.cwd(), 'public', 'wp-content', 'uploads')

let ok = 0
for (const [key, path] of Object.entries(PATHS)) {
  try {
    const res = await fetch(`${ORIGIN}/${path}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const file = join(OUT, path)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, Buffer.from(await res.arrayBuffer()))
    ok++
    console.log(`saved  ${path}`)
  } catch (err) {
    console.warn(`failed ${key} (${path}): ${err.message}`)
  }
}
console.log(`\n${ok}/${Object.keys(PATHS).length} files saved in public/wp-content/uploads`)
