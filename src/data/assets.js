import { PATHS } from './assetPaths'

const BASE = (import.meta.env.VITE_ASSET_BASE || 'https://alphacristo.com/wp-content/uploads').replace(/\/$/, '')

/**
 * URL of an image/file, e.g. asset('crystalPlus').
 * - a path starting with "/" is a file in your own /public folder (e.g. '/products/crystal-plus.webp')
 * - any other path is looked up in the WordPress uploads folder
 */
export const asset = (key) => {
  const path = PATHS[key]
  return path.startsWith('/') ? path : `${BASE}/${path}`
}
