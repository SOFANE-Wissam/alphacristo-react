import { useEffect } from 'react'

const SITE = (import.meta.env.VITE_SITE_URL || 'https://alphacristo.com').replace(/\/$/, '')

function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

/** Sets <title>, description, canonical and Open Graph tags for the current page. */
export default function useSeo({ title, description, path = '/', image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} – Alpha Cristo` : 'Alpha Cristo – Plâtre et gypse en Algérie'
    const url = `${SITE}${path}`
    document.title = fullTitle

    if (description) {
      upsert('meta[name="description"]', 'meta', { name: 'description', content: description })
      upsert('meta[property="og:description"]', 'meta', { property: 'og:description', content: description })
    }
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })
    upsert('meta[property="og:title"]', 'meta', { property: 'og:title', content: fullTitle })
    upsert('meta[property="og:url"]', 'meta', { property: 'og:url', content: url })
    if (image) upsert('meta[property="og:image"]', 'meta', { property: 'og:image', content: image })
  }, [title, description, path, image])
}
