// Banderas como imágenes reales — funciona en Windows, Android, iOS
const CODES = {
  'México': 'mx', 'Sudáfrica': 'za', 'Corea del Sur': 'kr', 'Rep. Checa': 'cz',
  'Canadá': 'ca', 'Bosnia y Herzegovina': 'ba', 'Qatar': 'qa', 'Suiza': 'ch',
  'Brasil': 'br', 'Marruecos': 'ma', 'Haití': 'ht', 'Escocia': 'gb-sct',
  'Estados Unidos': 'us', 'Paraguay': 'py', 'Australia': 'au', 'Turquía': 'tr',
  'Alemania': 'de', 'Curazao': 'cw', 'Costa de Marfil': 'ci', 'Ecuador': 'ec',
  'Países Bajos': 'nl', 'Japón': 'jp', 'Túnez': 'tn', 'Suecia': 'se',
  'Bélgica': 'be', 'Egipto': 'eg', 'Irán': 'ir', 'Nueva Zelanda': 'nz',
  'España': 'es', 'Cabo Verde': 'cv', 'Arabia Saudita': 'sa', 'Uruguay': 'uy',
  'Francia': 'fr', 'Senegal': 'sn', 'Noruega': 'no', 'Iraq': 'iq',
  'Argentina': 'ar', 'Argelia': 'dz', 'Austria': 'at', 'Jordania': 'jo',
  'Portugal': 'pt', 'RD Congo': 'cd', 'Uzbekistán': 'uz', 'Colombia': 'co',
  'Inglaterra': 'gb-eng', 'Croacia': 'hr', 'Ghana': 'gh', 'Panamá': 'pa',
}

export default function Flag({ country, size = 28 }) {
  const code = CODES[country]
  const h = Math.round(size * 0.75)
  if (!code) return <span style={{ fontSize: size * 0.6, fontWeight: 700 }}>{country?.slice(0, 2)?.toUpperCase()}</span>
  return (
    <img
      src={`https://flagcdn.com/w${size * 2}/${code}.png`}
      srcSet={`https://flagcdn.com/w${size * 4}/${code}.png 2x`}
      alt={country}
      width={size}
      height={h}
      style={{ objectFit: 'cover', borderRadius: 2, display: 'block' }}
      loading="lazy"
    />
  )
}
