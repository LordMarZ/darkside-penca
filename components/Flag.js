// Banderas usando flag-icons CSS — funciona en todos los sistemas y navegadores
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
  if (!code) return (
    <span style={{ fontSize: 12, fontWeight: 700, color: '#888', width: size, textAlign: 'center', display: 'inline-block' }}>
      {country?.slice(0, 2)?.toUpperCase()}
    </span>
  )
  return (
    <span
      className={`fi fi-${code}`}
      style={{
        fontSize: size,
        borderRadius: 2,
        flexShrink: 0,
        display: 'inline-block',
        lineHeight: 1,
      }}
      title={country}
    />
  )
}
