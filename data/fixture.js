// Fixture oficial FIFA World Cup 2026 — Fase de Grupos
// Horarios en hora Uruguay (UY = ET + 1)
// Fuente: FIFA / ESPN / bracketmundial2026.com

export const PHASES = {
  groups: 'FASE DE GRUPOS',
  r32: 'DIECISEISAVOS DE FINAL',
  r16: 'OCTAVOS DE FINAL',
  qf: 'CUARTOS DE FINAL',
  sf: 'SEMIFINALES',
  final: 'FINAL',
}

export const GROUPS = {
  A: { teams: [{flag:'🇲🇽',name:'México'},{flag:'🇿🇦',name:'Sudáfrica'},{flag:'🇰🇷',name:'Corea del Sur'},{flag:'🇨🇿',name:'Rep. Checa'}] },
  B: { teams: [{flag:'🇨🇦',name:'Canadá'},{flag:'🇧🇦',name:'Bosnia y Herzegovina'},{flag:'🇶🇦',name:'Qatar'},{flag:'🇨🇭',name:'Suiza'}] },
  C: { teams: [{flag:'🇧🇷',name:'Brasil'},{flag:'🇲🇦',name:'Marruecos'},{flag:'🇭🇹',name:'Haití'},{flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',name:'Escocia'}] },
  D: { teams: [{flag:'🇺🇸',name:'Estados Unidos'},{flag:'🇵🇾',name:'Paraguay'},{flag:'🇦🇺',name:'Australia'},{flag:'🇹🇷',name:'Turquía'}] },
  E: { teams: [{flag:'🇩🇪',name:'Alemania'},{flag:'🇨🇼',name:'Curazao'},{flag:'🇨🇮',name:'Costa de Marfil'},{flag:'🇪🇨',name:'Ecuador'}] },
  F: { teams: [{flag:'🇳🇱',name:'Países Bajos'},{flag:'🇯🇵',name:'Japón'},{flag:'🇹🇳',name:'Túnez'},{flag:'🇸🇪',name:'Suecia'}] },
  G: { teams: [{flag:'🇧🇪',name:'Bélgica'},{flag:'🇪🇬',name:'Egipto'},{flag:'🇮🇷',name:'Irán'},{flag:'🇳🇿',name:'Nueva Zelanda'}] },
  H: { teams: [{flag:'🇪🇸',name:'España'},{flag:'🇨🇻',name:'Cabo Verde'},{flag:'🇸🇦',name:'Arabia Saudita'},{flag:'🇺🇾',name:'Uruguay'}] },
  I: { teams: [{flag:'🇫🇷',name:'Francia'},{flag:'🇸🇳',name:'Senegal'},{flag:'🇳🇴',name:'Noruega'},{flag:'🇮🇶',name:'Iraq'}] },
  J: { teams: [{flag:'🇦🇷',name:'Argentina'},{flag:'🇩🇿',name:'Argelia'},{flag:'🇦🇹',name:'Austria'},{flag:'🇯🇴',name:'Jordania'}] },
  K: { teams: [{flag:'🇵🇹',name:'Portugal'},{flag:'🇨🇩',name:'RD Congo'},{flag:'🇺🇿',name:'Uzbekistán'},{flag:'🇨🇴',name:'Colombia'}] },
  L: { teams: [{flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'Inglaterra'},{flag:'🇭🇷',name:'Croacia'},{flag:'🇬🇭',name:'Ghana'},{flag:'🇵🇦',name:'Panamá'}] },
}

export const MATCHES = [
  // ─── GRUPO A ───────────────────────────────────────────
  { id: 1,  phase: 'groups', group: 'A', home: 'México',        homeF: '🇲🇽', away: 'Sudáfrica',       awayF: '🇿🇦', date: '2026-06-11', time: '16:00', venue: 'Estadio Azteca, CDMX' },
  { id: 2,  phase: 'groups', group: 'A', home: 'Corea del Sur', homeF: '🇰🇷', away: 'Rep. Checa',          awayF: '🇨🇿', date: '2026-06-11', time: '23:00', venue: 'Estadio Akron, Guadalajara' },
  { id: 3,  phase: 'groups', group: 'A', home: 'Rep. Checa',       homeF: '🇨🇿', away: 'Sudáfrica',        awayF: '🇿🇦', date: '2026-06-18', time: '13:00', venue: 'Mercedes-Benz, Atlanta' },
  { id: 4,  phase: 'groups', group: 'A', home: 'México',        homeF: '🇲🇽', away: 'Corea del Sur',    awayF: '🇰🇷', date: '2026-06-18', time: '22:00', venue: 'Estadio Akron, Guadalajara' },
  { id: 5,  phase: 'groups', group: 'A', home: 'Rep. Checa',       homeF: '🇨🇿', away: 'México',           awayF: '🇲🇽', date: '2026-06-24', time: '22:00', venue: 'Estadio Azteca, CDMX' },
  { id: 6,  phase: 'groups', group: 'A', home: 'Sudáfrica',     homeF: '🇿🇦', away: 'Corea del Sur',    awayF: '🇰🇷', date: '2026-06-24', time: '22:00', venue: 'Estadio BBVA, Monterrey' },

  // ─── GRUPO B ───────────────────────────────────────────
  { id: 7,  phase: 'groups', group: 'B', home: 'Canadá',            homeF: '🇨🇦', away: 'Bosnia y Herzegovina', awayF: '🇧🇦', date: '2026-06-12', time: '16:00', venue: 'BMO Field, Toronto' },
  { id: 8,  phase: 'groups', group: 'B', home: 'Qatar',             homeF: '🇶🇦', away: 'Suiza',                awayF: '🇨🇭', date: '2026-06-13', time: '16:00', venue: "Levi's Stadium, San Francisco" },
  { id: 9,  phase: 'groups', group: 'B', home: 'Suiza',             homeF: '🇨🇭', away: 'Bosnia y Herzegovina', awayF: '🇧🇦', date: '2026-06-18', time: '16:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 10, phase: 'groups', group: 'B', home: 'Canadá',            homeF: '🇨🇦', away: 'Qatar',                awayF: '🇶🇦', date: '2026-06-18', time: '19:00', venue: 'BC Place, Vancouver' },
  { id: 11, phase: 'groups', group: 'B', home: 'Suiza',             homeF: '🇨🇭', away: 'Canadá',              awayF: '🇨🇦', date: '2026-06-24', time: '16:00', venue: 'BC Place, Vancouver' },
  { id: 12, phase: 'groups', group: 'B', home: 'Bosnia y Herzegovina', homeF: '🇧🇦', away: 'Qatar',            awayF: '🇶🇦', date: '2026-06-24', time: '16:00', venue: 'Lumen Field, Seattle' },

  // ─── GRUPO C ───────────────────────────────────────────
  { id: 13, phase: 'groups', group: 'C', home: 'Brasil',   homeF: '🇧🇷', away: 'Marruecos', awayF: '🇲🇦', date: '2026-06-13', time: '19:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 14, phase: 'groups', group: 'C', home: 'Haití',    homeF: '🇭🇹', away: 'Escocia',   awayF: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '2026-06-13', time: '22:00', venue: 'Lincoln Financial, Filadelfia' },
  { id: 15, phase: 'groups', group: 'C', home: 'Escocia',  homeF: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', away: 'Marruecos', awayF: '🇲🇦', date: '2026-06-19', time: '20:00', venue: 'Gillette Stadium, Boston' },
  { id: 16, phase: 'groups', group: 'C', home: 'Brasil',   homeF: '🇧🇷', away: 'Haití',     awayF: '🇭🇹', date: '2026-06-19', time: '23:00', venue: 'Lincoln Financial, Filadelfia' },
  { id: 17, phase: 'groups', group: 'C', home: 'Escocia',  homeF: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', away: 'Brasil',    awayF: '🇧🇷', date: '2026-06-24', time: '19:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 18, phase: 'groups', group: 'C', home: 'Marruecos',homeF: '🇲🇦', away: 'Haití',     awayF: '🇭🇹', date: '2026-06-24', time: '19:00', venue: 'Mercedes-Benz, Atlanta' },

  // ─── GRUPO D ───────────────────────────────────────────
  { id: 19, phase: 'groups', group: 'D', home: 'Estados Unidos', homeF: '🇺🇸', away: 'Paraguay',  awayF: '🇵🇾', date: '2026-06-12', time: '22:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 20, phase: 'groups', group: 'D', home: 'Australia', homeF: '🇦🇺', away: 'Turquía', awayF: '🇹🇷', date: '2026-06-14', time: '01:00', venue: "Levi's Stadium, San Francisco" },
  { id: 21, phase: 'groups', group: 'D', home: 'Estados Unidos', homeF: '🇺🇸', away: 'Australia', awayF: '🇦🇺', date: '2026-06-19', time: '16:00', venue: 'Lumen Field, Seattle' },
  { id: 22, phase: 'groups', group: 'D', home: 'Turquía',        homeF: '🇹🇷', away: 'Paraguay',  awayF: '🇵🇾', date: '2026-06-20', time: '01:00', venue: "Levi's Stadium, San Francisco" },
  { id: 23, phase: 'groups', group: 'D', home: 'Turquía',        homeF: '🇹🇷', away: 'Estados Unidos', awayF: '🇺🇸', date: '2026-06-25', time: '23:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 24, phase: 'groups', group: 'D', home: 'Paraguay',       homeF: '🇵🇾', away: 'Australia', awayF: '🇦🇺', date: '2026-06-25', time: '23:00', venue: 'AT&T Stadium, Dallas' },

  // ─── GRUPO E ───────────────────────────────────────────
  { id: 25, phase: 'groups', group: 'E', home: 'Alemania',        homeF: '🇩🇪', away: 'Curazao',         awayF: '🇨🇼', date: '2026-06-14', time: '14:00', venue: 'BMO Field, Toronto' },
  { id: 26, phase: 'groups', group: 'E', home: 'Costa de Marfil', homeF: '🇨🇮', away: 'Ecuador',         awayF: '🇪🇨', date: '2026-06-14', time: '20:00', venue: 'AT&T Stadium, Dallas' },
  { id: 27, phase: 'groups', group: 'E', home: 'Alemania',        homeF: '🇩🇪', away: 'Costa de Marfil', awayF: '🇨🇮', date: '2026-06-20', time: '17:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 28, phase: 'groups', group: 'E', home: 'Ecuador',         homeF: '🇪🇨', away: 'Curazao',         awayF: '🇨🇼', date: '2026-06-20', time: '21:00', venue: 'Lincoln Financial, Filadelfia' },
  { id: 29, phase: 'groups', group: 'E', home: 'Ecuador',         homeF: '🇪🇨', away: 'Alemania',        awayF: '🇩🇪', date: '2026-06-25', time: '17:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 30, phase: 'groups', group: 'E', home: 'Curazao',         homeF: '🇨🇼', away: 'Costa de Marfil', awayF: '🇨🇮', date: '2026-06-25', time: '17:00', venue: 'Lincoln Financial, Filadelfia' },

  // ─── GRUPO F ───────────────────────────────────────────
  { id: 31, phase: 'groups', group: 'F', home: 'Países Bajos', homeF: '🇳🇱', away: 'Japón',  awayF: '🇯🇵', date: '2026-06-14', time: '17:00', venue: 'Gillette Stadium, Boston' },
  { id: 32, phase: 'groups', group: 'F', home: 'Suecia',       homeF: '🇸🇪', away: 'Túnez',  awayF: '🇹🇳', date: '2026-06-14', time: '23:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 33, phase: 'groups', group: 'F', home: 'Países Bajos', homeF: '🇳🇱', away: 'Suecia', awayF: '🇸🇪', date: '2026-06-20', time: '14:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 34, phase: 'groups', group: 'F', home: 'Túnez',        homeF: '🇹🇳', away: 'Japón',  awayF: '🇯🇵', date: '2026-06-21', time: '01:00', venue: "Levi's Stadium, San Francisco" },
  { id: 35, phase: 'groups', group: 'F', home: 'Japón',        homeF: '🇯🇵', away: 'Suecia', awayF: '🇸🇪', date: '2026-06-25', time: '20:00', venue: 'AT&T Stadium, Dallas' },
  { id: 36, phase: 'groups', group: 'F', home: 'Túnez',        homeF: '🇹🇳', away: 'Países Bajos', awayF: '🇳🇱', date: '2026-06-25', time: '20:00', venue: 'Lumen Field, Seattle' },

  // ─── GRUPO G ───────────────────────────────────────────
  { id: 37, phase: 'groups', group: 'G', home: 'Bélgica',      homeF: '🇧🇪', away: 'Egipto',        awayF: '🇪🇬', date: '2026-06-15', time: '16:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 38, phase: 'groups', group: 'G', home: 'Irán',         homeF: '🇮🇷', away: 'Nueva Zelanda', awayF: '🇳🇿', date: '2026-06-15', time: '22:00', venue: 'Gillette Stadium, Boston' },
  { id: 39, phase: 'groups', group: 'G', home: 'Bélgica',      homeF: '🇧🇪', away: 'Irán',          awayF: '🇮🇷', date: '2026-06-21', time: '16:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 40, phase: 'groups', group: 'G', home: 'Nueva Zelanda',homeF: '🇳🇿', away: 'Egipto',        awayF: '🇪🇬', date: '2026-06-21', time: '22:00', venue: 'Lincoln Financial, Filadelfia' },
  { id: 41, phase: 'groups', group: 'G', home: 'Egipto',       homeF: '🇪🇬', away: 'Irán',          awayF: '🇮🇷', date: '2026-06-27', time: '00:00', venue: 'Mercedes-Benz, Atlanta' },
  { id: 42, phase: 'groups', group: 'G', home: 'Nueva Zelanda',homeF: '🇳🇿', away: 'Bélgica',       awayF: '🇧🇪', date: '2026-06-27', time: '00:00', venue: 'Hard Rock Stadium, Miami' },

  // ─── GRUPO H ───────────────────────────────────────────
  { id: 43, phase: 'groups', group: 'H', home: 'España',        homeF: '🇪🇸', away: 'Cabo Verde',    awayF: '🇨🇻', date: '2026-06-15', time: '13:00', venue: 'AT&T Stadium, Dallas' },
  { id: 44, phase: 'groups', group: 'H', home: 'Arabia Saudita',homeF: '🇸🇦', away: 'Uruguay',       awayF: '🇺🇾', date: '2026-06-15', time: '19:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 45, phase: 'groups', group: 'H', home: 'España',        homeF: '🇪🇸', away: 'Arabia Saudita',awayF: '🇸🇦', date: '2026-06-21', time: '13:00', venue: 'Lumen Field, Seattle' },
  { id: 46, phase: 'groups', group: 'H', home: 'Uruguay',       homeF: '🇺🇾', away: 'Cabo Verde',    awayF: '🇨🇻', date: '2026-06-21', time: '19:00', venue: "Levi's Stadium, San Francisco" },
  { id: 47, phase: 'groups', group: 'H', home: 'Cabo Verde',    homeF: '🇨🇻', away: 'Arabia Saudita',awayF: '🇸🇦', date: '2026-06-26', time: '21:00', venue: 'Gillette Stadium, Boston' },
  { id: 48, phase: 'groups', group: 'H', home: 'Uruguay',       homeF: '🇺🇾', away: 'España',        awayF: '🇪🇸', date: '2026-06-26', time: '21:00', venue: 'SoFi Stadium, Los Ángeles' },

  // ─── GRUPO I ───────────────────────────────────────────
  { id: 49, phase: 'groups', group: 'I', home: 'Francia',  homeF: '🇫🇷', away: 'Senegal', awayF: '🇸🇳', date: '2026-06-16', time: '16:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 50, phase: 'groups', group: 'I', home: 'Iraq',     homeF: '🇮🇶', away: 'Noruega', awayF: '🇳🇴', date: '2026-06-16', time: '19:00', venue: 'Gillette Stadium, Boston' },
  { id: 51, phase: 'groups', group: 'I', home: 'Francia',  homeF: '🇫🇷', away: 'Iraq',    awayF: '🇮🇶', date: '2026-06-22', time: '18:00', venue: 'AT&T Stadium, Dallas' },
  { id: 52, phase: 'groups', group: 'I', home: 'Noruega',  homeF: '🇳🇴', away: 'Senegal', awayF: '🇸🇳', date: '2026-06-22', time: '21:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 53, phase: 'groups', group: 'I', home: 'Noruega',  homeF: '🇳🇴', away: 'Francia', awayF: '🇫🇷', date: '2026-06-26', time: '16:00', venue: 'Lincoln Financial, Filadelfia' },
  { id: 54, phase: 'groups', group: 'I', home: 'Senegal',  homeF: '🇸🇳', away: 'Iraq',    awayF: '🇮🇶', date: '2026-06-26', time: '16:00', venue: 'Mercedes-Benz, Atlanta' },

  // ─── GRUPO J ───────────────────────────────────────────
  { id: 55, phase: 'groups', group: 'J', home: 'Argentina', homeF: '🇦🇷', away: 'Argelia',  awayF: '🇩🇿', date: '2026-06-16', time: '22:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 56, phase: 'groups', group: 'J', home: 'Austria',   homeF: '🇦🇹', away: 'Jordania', awayF: '🇯🇴', date: '2026-06-17', time: '01:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 57, phase: 'groups', group: 'J', home: 'Argentina', homeF: '🇦🇷', away: 'Austria',  awayF: '🇦🇹', date: '2026-06-22', time: '14:00', venue: 'AT&T Stadium, Dallas' },
  { id: 58, phase: 'groups', group: 'J', home: 'Jordania',  homeF: '🇯🇴', away: 'Argelia',  awayF: '🇩🇿', date: '2026-06-23', time: '00:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 59, phase: 'groups', group: 'J', home: 'Argelia',   homeF: '🇩🇿', away: 'Austria',  awayF: '🇦🇹', date: '2026-06-27', time: '23:00', venue: 'Lumen Field, Seattle' },
  { id: 60, phase: 'groups', group: 'J', home: 'Jordania',  homeF: '🇯🇴', away: 'Argentina',awayF: '🇦🇷', date: '2026-06-27', time: '23:00', venue: 'BC Place, Vancouver' },

  // ─── GRUPO K ───────────────────────────────────────────
  { id: 61, phase: 'groups', group: 'K', home: 'Portugal',   homeF: '🇵🇹', away: 'RD Congo',    awayF: '🇨🇩', date: '2026-06-17', time: '14:00', venue: 'NRG Stadium, Houston' },
  { id: 62, phase: 'groups', group: 'K', home: 'Uzbekistán', homeF: '🇺🇿', away: 'Colombia',    awayF: '🇨🇴', date: '2026-06-17', time: '23:00', venue: 'Estadio Banorte, CDMX' },
  { id: 63, phase: 'groups', group: 'K', home: 'Portugal',   homeF: '🇵🇹', away: 'Uzbekistán',  awayF: '🇺🇿', date: '2026-06-23', time: '14:00', venue: 'NRG Stadium, Houston' },
  { id: 64, phase: 'groups', group: 'K', home: 'Colombia',   homeF: '🇨🇴', away: 'RD Congo',    awayF: '🇨🇩', date: '2026-06-23', time: '23:00', venue: 'Estadio Akron, Guadalajara' },
  { id: 65, phase: 'groups', group: 'K', home: 'Colombia',   homeF: '🇨🇴', away: 'Portugal',    awayF: '🇵🇹', date: '2026-06-27', time: '19:30', venue: 'Hard Rock Stadium, Miami' },
  { id: 66, phase: 'groups', group: 'K', home: 'RD Congo',   homeF: '🇨🇩', away: 'Uzbekistán',  awayF: '🇺🇿', date: '2026-06-27', time: '19:30', venue: 'Mercedes-Benz, Atlanta' },

  // ─── GRUPO L ───────────────────────────────────────────
  { id: 67, phase: 'groups', group: 'L', home: 'Inglaterra', homeF: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'Croacia', awayF: '🇭🇷', date: '2026-06-17', time: '16:00', venue: 'AT&T Stadium, Dallas' },
  { id: 68, phase: 'groups', group: 'L', home: 'Ghana',      homeF: '🇬🇭', away: 'Panamá',  awayF: '🇵🇦', date: '2026-06-17', time: '20:00', venue: 'BMO Field, Toronto' },
  { id: 69, phase: 'groups', group: 'L', home: 'Inglaterra', homeF: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'Ghana',   awayF: '🇬🇭', date: '2026-06-23', time: '16:00', venue: 'Gillette Stadium, Boston' },
  { id: 70, phase: 'groups', group: 'L', home: 'Panamá',     homeF: '🇵🇦', away: 'Croacia', awayF: '🇭🇷', date: '2026-06-23', time: '20:00', venue: 'BMO Field, Toronto' },
  { id: 71, phase: 'groups', group: 'L', home: 'Panamá',     homeF: '🇵🇦', away: 'Inglaterra', awayF: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', date: '2026-06-27', time: '18:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 72, phase: 'groups', group: 'L', home: 'Croacia',    homeF: '🇭🇷', away: 'Ghana',      awayF: '🇬🇭', date: '2026-06-27', time: '18:00', venue: 'Lincoln Financial, Filadelfia' },

  // ─── DIECISEISAVOS DE FINAL (Ronda de 32) ──────────────
  { id: 73, phase: 'r32', home: 'Sudáfrica',        homeF: '🇿🇦', away: 'Canadá',              awayF: '🇨🇦', date: '2026-06-28', time: '16:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 74, phase: 'r32', home: 'Brasil',           homeF: '🇧🇷', away: 'Japón',               awayF: '🇯🇵', date: '2026-06-29', time: '14:00', venue: 'NRG Stadium, Houston' },
  { id: 75, phase: 'r32', home: 'Alemania',         homeF: '🇩🇪', away: 'Paraguay',            awayF: '🇵🇾', date: '2026-06-29', time: '17:30', venue: 'Gillette Stadium, Boston' },
  { id: 76, phase: 'r32', home: 'Países Bajos',     homeF: '🇳🇱', away: 'Marruecos',           awayF: '🇲🇦', date: '2026-06-29', time: '22:00', venue: 'Estadio BBVA, Monterrey' },
  { id: 77, phase: 'r32', home: 'Costa de Marfil',  homeF: '🇨🇮', away: 'Noruega',             awayF: '🇳🇴', date: '2026-06-30', time: '14:00', venue: 'AT&T Stadium, Dallas' },
  { id: 78, phase: 'r32', home: 'Francia',          homeF: '🇫🇷', away: 'Suecia',              awayF: '🇸🇪', date: '2026-06-30', time: '18:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 79, phase: 'r32', home: 'México',           homeF: '🇲🇽', away: 'Ecuador',             awayF: '🇪🇨', date: '2026-06-30', time: '22:00', venue: 'Estadio Azteca, CDMX' },
  { id: 80, phase: 'r32', home: 'Inglaterra',       homeF: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', away: 'RD Congo',            awayF: '🇨🇩', date: '2026-07-01', time: '13:00', venue: 'Mercedes-Benz, Atlanta' },
  { id: 81, phase: 'r32', home: 'Bélgica',          homeF: '🇧🇪', away: 'Senegal',             awayF: '🇸🇳', date: '2026-07-01', time: '17:00', venue: 'Lumen Field, Seattle' },
  { id: 82, phase: 'r32', home: 'Estados Unidos',   homeF: '🇺🇸', away: 'Bosnia y Herzegovina',awayF: '🇧🇦', date: '2026-07-01', time: '21:00', venue: "Levi's Stadium, San Francisco" },
  { id: 83, phase: 'r32', home: 'España',           homeF: '🇪🇸', away: 'Austria',             awayF: '🇦🇹', date: '2026-07-02', time: '16:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 84, phase: 'r32', home: 'Portugal',         homeF: '🇵🇹', away: 'Croacia',             awayF: '🇭🇷', date: '2026-07-02', time: '20:00', venue: 'BMO Field, Toronto' },
  { id: 85, phase: 'r32', home: 'Suiza',            homeF: '🇨🇭', away: 'Argelia',             awayF: '🇩🇿', date: '2026-07-03', time: '00:00', venue: 'BC Place, Vancouver' },
  { id: 86, phase: 'r32', home: 'Australia',        homeF: '🇦🇺', away: 'Egipto',              awayF: '🇪🇬', date: '2026-07-03', time: '15:00', venue: 'AT&T Stadium, Dallas' },
  { id: 87, phase: 'r32', home: 'Argentina',        homeF: '🇦🇷', away: 'Cabo Verde',          awayF: '🇨🇻', date: '2026-07-03', time: '19:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 88, phase: 'r32', home: 'Colombia',         homeF: '🇨🇴', away: 'Ghana',               awayF: '🇬🇭', date: '2026-07-03', time: '22:30', venue: 'Arrowhead Stadium, Kansas City' },

  // ─── OCTAVOS DE FINAL (Ronda de 16) — rivales a definir por resultado ───
  // homeFrom/awayFrom: id del partido de 16avos cuyo ganador ocupa ese lugar
  { id: 89, phase: 'r16', homeFrom: 73, awayFrom: 76, date: '2026-07-04', time: '19:00', venue: 'NRG Stadium, Houston' },
  { id: 90, phase: 'r16', homeFrom: 75, awayFrom: 78, date: '2026-07-04', time: '23:00', venue: 'Lincoln Financial, Filadelfia' },
  { id: 91, phase: 'r16', homeFrom: 74, awayFrom: 77, date: '2026-07-05', time: '22:00', venue: 'MetLife Stadium, Nueva York/NJ' },
  { id: 92, phase: 'r16', homeFrom: 79, awayFrom: 80, date: '2026-07-06', time: '02:00', venue: 'Estadio Azteca, CDMX' },
  { id: 93, phase: 'r16', homeFrom: 84, awayFrom: 83, date: '2026-07-06', time: '21:00', venue: 'AT&T Stadium, Dallas' },
  { id: 94, phase: 'r16', homeFrom: 82, awayFrom: 81, date: '2026-07-07', time: '02:00', venue: 'Lumen Field, Seattle' },
  { id: 95, phase: 'r16', homeFrom: 87, awayFrom: 86, date: '2026-07-07', time: '18:00', venue: 'Mercedes-Benz, Atlanta' },
  { id: 96, phase: 'r16', homeFrom: 85, awayFrom: 88, date: '2026-07-07', time: '22:00', venue: 'BC Place, Vancouver' },

  // ─── CUARTOS DE FINAL — rivales a definir por resultado ─────────────────
  { id: 97,  phase: 'qf', homeFrom: 90, awayFrom: 89, date: '2026-07-09', time: '22:00', venue: 'Gillette Stadium, Boston' },
  { id: 98,  phase: 'qf', homeFrom: 93, awayFrom: 94, date: '2026-07-10', time: '21:00', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 99,  phase: 'qf', homeFrom: 91, awayFrom: 92, date: '2026-07-11', time: '23:00', venue: 'Hard Rock Stadium, Miami' },
  { id: 100, phase: 'qf', homeFrom: 95, awayFrom: 96, date: '2026-07-12', time: '03:00', venue: 'Arrowhead Stadium, Kansas City' },

  // ─── SEMIFINALES — rivales a definir por resultado ──────────────────────
  { id: 101, phase: 'sf', homeFrom: 97, awayFrom: 98,  date: '2026-07-14', time: '21:00', venue: 'AT&T Stadium, Dallas' },
  { id: 102, phase: 'sf', homeFrom: 99, awayFrom: 100, date: '2026-07-15', time: '21:00', venue: 'Mercedes-Benz, Atlanta' },

  // ─── FINAL — rivales a definir por resultado ─────────────────────────────
  { id: 103, phase: 'final', homeFrom: 101, awayFrom: 102, date: '2026-07-19', time: '21:00', venue: 'MetLife Stadium, Nueva York/NJ' },
]