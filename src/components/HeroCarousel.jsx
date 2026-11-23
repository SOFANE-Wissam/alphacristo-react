import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { asset } from '../data/assets'

function Slide({ item, index, pos, active, dragging }) {
  const src = asset(item.image)
  const abs = Math.abs(pos)
  const style = {
    transform: `translateX(${pos * 62}%) scale(${Math.max(0.5, 1 - abs * 0.3)})`,
    zIndex: 100 - Math.round(abs * 10),
    opacity: abs > 1.6 ? 0 : 1 - Math.min(abs, 1) * 0.35,
    filter: `brightness(${1 - Math.min(abs, 1) * 0.18})`,
    transition: dragging ? 'none' : undefined,
    pointerEvents: abs > 1.6 ? 'none' : undefined,
  }
  return (
    <div
      className={`carousel__slide${active ? ' is-active' : ''}${/\.jpe?g$/i.test(src) ? ' is-photo' : ''}`}
      style={style}
      data-i={index}
      aria-hidden={!active}
    >
      <img src={src} alt={item.name} draggable="false" />
    </div>
  )
}

export default function HeroCarousel({ items }) {
  const n = items.length
  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0) // fractional slides while dragging
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)
  const navigate = useNavigate()
  const stage = useRef(null)
  const start = useRef(null)
  const moved = useRef(false)

  const go = useCallback((d) => setIndex((i) => (((i + d) % n) + n) % n), [n])

  // gentle autoplay, stopped on hover / drag / reduced motion
  useEffect(() => {
    if (paused || dragging) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => go(1), 4500)
    return () => clearInterval(t)
  }, [paused, dragging, go])

  const stepPx = () => (stage.current ? stage.current.offsetWidth * 0.28 : 200)

  const onDown = (e) => {
    const hit = e.target.closest?.('[data-i]')
    start.current = { x: e.clientX, id: e.pointerId, hit: hit ? Number(hit.dataset.i) : null }
    moved.current = false
    stage.current.setPointerCapture?.(e.pointerId)
    setDragging(true)
  }
  const onMove = (e) => {
    if (!start.current) return
    const dx = e.clientX - start.current.x
    if (Math.abs(dx) > 4) moved.current = true
    setDrag(dx / stepPx())
  }
  const onUp = () => {
    if (!start.current) return
    const slides = Math.round(-drag)
    const hit = start.current.hit
    start.current = null
    setDragging(false)
    setDrag(0)
    if (!moved.current) {
      // a simple click: open the product if it's the big one, otherwise bring it to the front
      if (hit === index) navigate(`/nos-produits-fiches-techniques#${items[index].id}`)
      else if (hit !== null) setIndex(hit)
      return
    }
    if (slides !== 0) go(slides)
    else if (Math.abs(drag) > 0.15) go(drag < 0 ? 1 : -1)
  }

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }

  const posOf = (i) => {
    let p = i - index + drag
    p = ((((p + n / 2) % n) + n) % n) - n / 2
    return p
  }

  const current = items[index]

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Nos produits"
      tabIndex={0}
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={stage}
        className={`carousel__stage${dragging ? ' is-dragging' : ''}`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        {items.map((item, i) => (
          <Slide
            key={item.id}
            item={item}
            index={i}
            pos={posOf(i)}
            active={i === index}
            dragging={dragging}
          />
        ))}
      </div>

      <div className="carousel__bar">
        <button type="button" className="carousel__btn" onClick={() => go(-1)} aria-label="Produit précédent">
          ‹
        </button>
        <div className="carousel__caption" aria-live="polite">
          <Link to={`/nos-produits-fiches-techniques#${current.id}`}>{current.name}</Link>
          <div className="carousel__dots">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={i === index ? 'is-on' : ''}
                onClick={() => setIndex(i)}
                aria-label={item.name}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
        <button type="button" className="carousel__btn" onClick={() => go(1)} aria-label="Produit suivant">
          ›
        </button>
      </div>
    </div>
  )
}
