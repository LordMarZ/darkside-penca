// =============================================
// FIXTURE MUNDIAL 2026 — USA · MEXICO · CANADA
// =============================================

export const GROUPS = {
  A: { name: 'A', teams: [
    { name: 'México', flag: '🇲🇽' }, { name: 'EEUU', flag: '🇺🇸' },
    { name: 'Polonia', flag: '🇵🇱' }, { name: 'Nueva Zelanda', flag: '🇳🇿' },
  ]},
  B: { name: 'B', teams: [
    { name: 'Argentina', flag: '🇦🇷' }, { name: 'Chile', flag: '🇨🇱' },
    { name: 'Noruega', flag: '🇳🇴' }, { name: 'Marruecos', flag: '🇲🇦' },
  ]},
  C: { name: 'C', teams: [
    { name: 'Francia', flag: '🇫🇷' }, { name: 'Australia', flag: '🇦🇺' },
    { name: 'Dinamarca', flag: '🇩🇰' }, { name: 'Bolivia', flag: '🇧🇴' },
  ]},
  D: { name: 'D', teams: [
    { name: 'Brasil', flag: '🇧🇷' }, { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Serbia', flag: '🇷🇸' }, { name: 'Camerún', flag: '🇨🇲' },
  ]},
  E: { name: 'E', teams: [
    { name: 'España', flag: '🇪🇸' }, { name: 'Turquía', flag: '🇹🇷' },
    { name: 'Alemania', flag: '🇩🇪' }, { name: 'Japón', flag: '🇯🇵' },
  ]},
  F: { name: 'F', teams: [
    { name: 'Bélgica', flag: '🇧🇪' }, { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Croacia', flag: '🇭🇷' }, { name: 'Arabia Saudita', flag: '🇸🇦' },
  ]},
  G: { name: 'G', teams: [
    { name: 'Uruguay', flag: '🇺🇾' }, { name: 'Venezuela', flag: '🇻🇪' },
    { name: 'Portugal', flag: '🇵🇹' }, { name: 'Senegal', flag: '🇸🇳' },
  ]},
  H: { name: 'H', teams: [
    { name: 'Países Bajos', flag: '🇳🇱' }, { name: 'Perú', flag: '🇵🇪' },
    { name: 'Suiza', flag: '🇨🇭' }, { name: 'Ghana', flag: '🇬🇭' },
  ]},
  I: { name: 'I', teams: [
    { name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, { name: 'Jamaica', flag: '🇯🇲' },
    { name: 'Irán', flag: '🇮🇷' }, { name: 'Corea del Sur', flag: '🇰🇷' },
  ]},
  J: { name: 'J', teams: [
    { name: 'Canadá', flag: '🇨🇦' }, { name: 'Paraguay', flag: '🇵🇾' },
    { name: 'Países Bajos', flag: '🇳🇱' }, { name: 'Suecia', flag: '🇸🇪' },
  ]},
  K: { name: 'K', teams: [
    { name: 'Alemania', flag: '🇩🇪' }, { name: 'Costa Rica', flag: '🇨🇷' },
    { name: 'Rep. Checa', flag: '🇨🇿' }, { name: 'Qatar', flag: '🇶🇦' },
  ]},
  L: { name: 'L', teams: [
    { name: 'Portugal', flag: '🇵🇹' }, { name: 'Austria', flag: '🇦🇹' },
    { name: 'Escocia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }, { name: 'Kenia', flag: '🇰🇪' },
  ]},
}

export const PHASES = {
  groups: 'Fase de Grupos',
  round16: 'Octavos de Final',
  quarters: 'Cuartos de Final',
  semis: 'Semifinales',
  final: 'Gran Final',
}

export const MATCHES = [
  // GRUPO A
  { id: 1,  home: 'México',        homeF: '🇲🇽', away: 'EEUU',         awayF: '🇺🇸', date: '2026-06-11', time: '18:00', group: 'A', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 2,  home: 'Polonia',       homeF: '🇵🇱', away: 'Nueva Zelanda', awayF: '🇳🇿', date: '2026-06-11', time: '21:00', group: 'A', phase: 'groups', venue: 'SoFi Stadium, LA' },
  { id: 3,  home: 'México',        homeF: '🇲🇽', away: 'Polonia',       awayF: '🇵🇱', date: '2026-06-15', time: '18:00', group: 'A', phase: 'groups', venue: 'AT&T Stadium, Dallas' },
  { id: 4,  home: 'EEUU',         homeF: '🇺🇸', away: 'Nueva Zelanda', awayF: '🇳🇿', date: '2026-06-15', time: '21:00', group: 'A', phase: 'groups', venue: 'Levi\'s Stadium, SF' },
  { id: 5,  home: 'México',        homeF: '🇲🇽', away: 'Nueva Zelanda', awayF: '🇳🇿', date: '2026-06-19', time: '18:00', group: 'A', phase: 'groups', venue: 'Estadio Azteca, CDMX' },
  { id: 6,  home: 'EEUU',         homeF: '🇺🇸', away: 'Polonia',       awayF: '🇵🇱', date: '2026-06-19', time: '18:00', group: 'A', phase: 'groups', venue: 'Mercedes-Benz, Atlanta' },
  // GRUPO B
  { id: 7,  home: 'Argentina',     homeF: '🇦🇷', away: 'Chile',         awayF: '🇨🇱', date: '2026-06-12', time: '18:00', group: 'B', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 8,  home: 'Noruega',       homeF: '🇳🇴', away: 'Marruecos',     awayF: '🇲🇦', date: '2026-06-12', time: '15:00', group: 'B', phase: 'groups', venue: 'Hard Rock, Miami' },
  { id: 9,  home: 'Argentina',     homeF: '🇦🇷', away: 'Noruega',       awayF: '🇳🇴', date: '2026-06-16', time: '18:00', group: 'B', phase: 'groups', venue: 'AT&T Stadium, Dallas' },
  { id: 10, home: 'Chile',         homeF: '🇨🇱', away: 'Marruecos',     awayF: '🇲🇦', date: '2026-06-16', time: '21:00', group: 'B', phase: 'groups', venue: 'SoFi Stadium, LA' },
  { id: 11, home: 'Argentina',     homeF: '🇦🇷', away: 'Marruecos',     awayF: '🇲🇦', date: '2026-06-20', time: '18:00', group: 'B', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 12, home: 'Chile',         homeF: '🇨🇱', away: 'Noruega',       awayF: '🇳🇴', date: '2026-06-20', time: '18:00', group: 'B', phase: 'groups', venue: 'Estadio Jalisco, GDL' },
  // GRUPO C
  { id: 13, home: 'Francia',       homeF: '🇫🇷', away: 'Australia',     awayF: '🇦🇺', date: '2026-06-12', time: '21:00', group: 'C', phase: 'groups', venue: 'Hard Rock, Miami' },
  { id: 14, home: 'Dinamarca',     homeF: '🇩🇰', away: 'Bolivia',       awayF: '🇧🇴', date: '2026-06-13', time: '15:00', group: 'C', phase: 'groups', venue: 'Gillette Stadium, Boston' },
  { id: 15, home: 'Francia',       homeF: '🇫🇷', away: 'Dinamarca',     awayF: '🇩🇰', date: '2026-06-17', time: '18:00', group: 'C', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 16, home: 'Australia',     homeF: '🇦🇺', away: 'Bolivia',       awayF: '🇧🇴', date: '2026-06-17', time: '15:00', group: 'C', phase: 'groups', venue: 'Arrowhead, KC' },
  { id: 17, home: 'Francia',       homeF: '🇫🇷', away: 'Bolivia',       awayF: '🇧🇴', date: '2026-06-21', time: '18:00', group: 'C', phase: 'groups', venue: 'AT&T Stadium, Dallas' },
  { id: 18, home: 'Australia',     homeF: '🇦🇺', away: 'Dinamarca',     awayF: '🇩🇰', date: '2026-06-21', time: '18:00', group: 'C', phase: 'groups', venue: 'Lumen Field, Seattle' },
  // GRUPO D
  { id: 19, home: 'Brasil',        homeF: '🇧🇷', away: 'Colombia',      awayF: '🇨🇴', date: '2026-06-13', time: '18:00', group: 'D', phase: 'groups', venue: 'SoFi Stadium, LA' },
  { id: 20, home: 'Serbia',        homeF: '🇷🇸', away: 'Camerún',       awayF: '🇨🇲', date: '2026-06-13', time: '21:00', group: 'D', phase: 'groups', venue: 'Hard Rock, Miami' },
  { id: 21, home: 'Brasil',        homeF: '🇧🇷', away: 'Serbia',        awayF: '🇷🇸', date: '2026-06-17', time: '21:00', group: 'D', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 22, home: 'Colombia',      homeF: '🇨🇴', away: 'Camerún',       awayF: '🇨🇲', date: '2026-06-18', time: '15:00', group: 'D', phase: 'groups', venue: 'Estadio Azteca, CDMX' },
  { id: 23, home: 'Brasil',        homeF: '🇧🇷', away: 'Camerún',       awayF: '🇨🇲', date: '2026-06-22', time: '18:00', group: 'D', phase: 'groups', venue: 'AT&T Stadium, Dallas' },
  { id: 24, home: 'Colombia',      homeF: '🇨🇴', away: 'Serbia',        awayF: '🇷🇸', date: '2026-06-22', time: '18:00', group: 'D', phase: 'groups', venue: 'Hard Rock, Miami' },
  // GRUPO E
  { id: 25, home: 'España',        homeF: '🇪🇸', away: 'Turquía',      awayF: '🇹🇷', date: '2026-06-14', time: '15:00', group: 'E', phase: 'groups', venue: 'Arrowhead, KC' },
  { id: 26, home: 'Alemania',      homeF: '🇩🇪', away: 'Japón',        awayF: '🇯🇵', date: '2026-06-14', time: '18:00', group: 'E', phase: 'groups', venue: 'Gillette Stadium, Boston' },
  { id: 27, home: 'España',        homeF: '🇪🇸', away: 'Alemania',     awayF: '🇩🇪', date: '2026-06-18', time: '18:00', group: 'E', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 28, home: 'Turquía',       homeF: '🇹🇷', away: 'Japón',        awayF: '🇯🇵', date: '2026-06-18', time: '21:00', group: 'E', phase: 'groups', venue: 'SoFi Stadium, LA' },
  { id: 29, home: 'España',        homeF: '🇪🇸', away: 'Japón',        awayF: '🇯🇵', date: '2026-06-22', time: '18:00', group: 'E', phase: 'groups', venue: 'Hard Rock, Miami' },
  { id: 30, home: 'Alemania',      homeF: '🇩🇪', away: 'Turquía',      awayF: '🇹🇷', date: '2026-06-22', time: '18:00', group: 'E', phase: 'groups', venue: 'AT&T Stadium, Dallas' },
  // GRUPO F
  { id: 31, home: 'Bélgica',       homeF: '🇧🇪', away: 'Ecuador',       awayF: '🇪🇨', date: '2026-06-14', time: '21:00', group: 'F', phase: 'groups', venue: 'Estadio Azteca, CDMX' },
  { id: 32, home: 'Croacia',       homeF: '🇭🇷', away: 'Arabia Saudita',awayF: '🇸🇦', date: '2026-06-15', time: '15:00', group: 'F', phase: 'groups', venue: 'Levi\'s Stadium, SF' },
  { id: 33, home: 'Bélgica',       homeF: '🇧🇪', away: 'Croacia',       awayF: '🇭🇷', date: '2026-06-19', time: '21:00', group: 'F', phase: 'groups', venue: 'Lumen Field, Seattle' },
  { id: 34, home: 'Ecuador',       homeF: '🇪🇨', away: 'Arabia Saudita',awayF: '🇸🇦', date: '2026-06-19', time: '15:00', group: 'F', phase: 'groups', venue: 'Arrowhead, KC' },
  { id: 35, home: 'Bélgica',       homeF: '🇧🇪', away: 'Arabia Saudita',awayF: '🇸🇦', date: '2026-06-23', time: '18:00', group: 'F', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 36, home: 'Ecuador',       homeF: '🇪🇨', away: 'Croacia',       awayF: '🇭🇷', date: '2026-06-23', time: '18:00', group: 'F', phase: 'groups', venue: 'Hard Rock, Miami' },
  // GRUPO G
  { id: 37, home: 'Uruguay',       homeF: '🇺🇾', away: 'Venezuela',     awayF: '🇻🇪', date: '2026-06-15', time: '18:00', group: 'G', phase: 'groups', venue: 'Gillette Stadium, Boston' },
  { id: 38, home: 'Portugal',      homeF: '🇵🇹', away: 'Senegal',       awayF: '🇸🇳', date: '2026-06-15', time: '21:00', group: 'G', phase: 'groups', venue: 'Mercedes-Benz, Atlanta' },
  { id: 39, home: 'Uruguay',       homeF: '🇺🇾', away: 'Portugal',      awayF: '🇵🇹', date: '2026-06-19', time: '18:00', group: 'G', phase: 'groups', venue: 'Hard Rock, Miami' },
  { id: 40, home: 'Venezuela',     homeF: '🇻🇪', away: 'Senegal',       awayF: '🇸🇳', date: '2026-06-20', time: '15:00', group: 'G', phase: 'groups', venue: 'AT&T Stadium, Dallas' },
  { id: 41, home: 'Uruguay',       homeF: '🇺🇾', away: 'Senegal',       awayF: '🇸🇳', date: '2026-06-23', time: '18:00', group: 'G', phase: 'groups', venue: 'Levi\'s Stadium, SF' },
  { id: 42, home: 'Venezuela',     homeF: '🇻🇪', away: 'Portugal',      awayF: '🇵🇹', date: '2026-06-23', time: '18:00', group: 'G', phase: 'groups', venue: 'Estadio Jalisco, GDL' },
  // GRUPO H
  { id: 43, home: 'Países Bajos',  homeF: '🇳🇱', away: 'Perú',         awayF: '🇵🇪', date: '2026-06-16', time: '15:00', group: 'H', phase: 'groups', venue: 'SoFi Stadium, LA' },
  { id: 44, home: 'Suiza',         homeF: '🇨🇭', away: 'Ghana',         awayF: '🇬🇭', date: '2026-06-16', time: '18:00', group: 'H', phase: 'groups', venue: 'Arrowhead, KC' },
  { id: 45, home: 'Países Bajos',  homeF: '🇳🇱', away: 'Suiza',         awayF: '🇨🇭', date: '2026-06-20', time: '21:00', group: 'H', phase: 'groups', venue: 'MetLife Stadium, NJ' },
  { id: 46, home: 'Perú',          homeF: '🇵🇪', away: 'Ghana',         awayF: '🇬🇭', date: '2026-06-20', time: '18:00', group: 'H', phase: 'groups', venue: 'Lumen Field, Seattle' },
  { id: 47, home: 'Países Bajos',  homeF: '🇳🇱', away: 'Ghana',         awayF: '🇬🇭', date: '2026-06-24', time: '18:00', group: 'H', phase: 'groups', venue: 'Gillette Stadium, Boston' },
  { id: 48, home: 'Perú',          homeF: '🇵🇪', away: 'Suiza',         awayF: '🇨🇭', date: '2026-06-24', time: '18:00', group: 'H', phase: 'groups', venue: 'Hard Rock, Miami' },
  // FASES ELIMINATORIAS (TBD)
  { id: 65, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-04', time: '18:00', group: '-', phase: 'round16', venue: 'MetLife Stadium, NJ' },
  { id: 66, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-05', time: '18:00', group: '-', phase: 'round16', venue: 'AT&T Stadium, Dallas' },
  { id: 67, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-06', time: '18:00', group: '-', phase: 'round16', venue: 'SoFi Stadium, LA' },
  { id: 68, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-07', time: '18:00', group: '-', phase: 'round16', venue: 'Hard Rock, Miami' },
  { id: 69, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-08', time: '18:00', group: '-', phase: 'round16', venue: 'Gillette Stadium, Boston' },
  { id: 70, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-09', time: '18:00', group: '-', phase: 'round16', venue: 'Arrowhead, KC' },
  { id: 71, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-10', time: '18:00', group: '-', phase: 'round16', venue: 'Levi\'s Stadium, SF' },
  { id: 72, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-11', time: '18:00', group: '-', phase: 'round16', venue: 'Mercedes-Benz, Atlanta' },
  { id: 81, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-14', time: '18:00', group: '-', phase: 'quarters', venue: 'MetLife Stadium, NJ' },
  { id: 82, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-15', time: '18:00', group: '-', phase: 'quarters', venue: 'AT&T Stadium, Dallas' },
  { id: 83, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-16', time: '18:00', group: '-', phase: 'quarters', venue: 'Hard Rock, Miami' },
  { id: 84, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-17', time: '18:00', group: '-', phase: 'quarters', venue: 'SoFi Stadium, LA' },
  { id: 85, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-21', time: '18:00', group: '-', phase: 'semis', venue: 'MetLife Stadium, NJ' },
  { id: 86, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-22', time: '18:00', group: '-', phase: 'semis', venue: 'AT&T Stadium, Dallas' },
  { id: 87, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-25', time: '18:00', group: '-', phase: 'semis', venue: 'Hard Rock, Miami' },
  { id: 100, home: 'TBD', homeF: '🏳️', away: 'TBD', awayF: '🏳️', date: '2026-07-19', time: '18:00', group: '-', phase: 'final', venue: 'MetLife Stadium, East Rutherford NJ' },
]
