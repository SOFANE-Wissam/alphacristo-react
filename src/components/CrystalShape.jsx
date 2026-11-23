// Decorative gypsum (selenite) crystal drawn from triangular facets.
export default function CrystalShape({ className }) {
  const c = [320, 300]
  const outer = [
    [330, 10],
    [470, 120],
    [530, 400],
    [380, 590],
    [190, 560],
    [80, 300],
    [170, 90],
  ]
  const fills = [0.92, 0.5, 0.78, 0.34, 0.66, 0.44, 0.82]
  return (
    <svg className={className} viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      {outer.map((p, i) => {
        const q = outer[(i + 1) % outer.length]
        return (
          <polygon
            key={i}
            points={`${c.join(',')} ${p.join(',')} ${q.join(',')}`}
            fill={`rgba(255,255,255,${fills[i]})`}
            stroke="rgba(18,48,63,0.07)"
            strokeWidth="1"
          />
        )
      })}
    </svg>
  )
}
