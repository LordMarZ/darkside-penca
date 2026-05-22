// Fixture oficial FIFA World Cup 2026 — Fase de Grupos
// Horarios en hora Uruguay (UY = ET + 1)
// Fuente: FIFA / ESPN / bracketmundial2026.com

export const GROUPS = {
  A: ['México', 'Sudáfrica', 'Corea del Sur', 'Chequia'],
  B: ['Canadá', 'Bosnia y Herzegovina', 'Qatar', 'Suiza'],
  C: ['Brasil', 'Marruecos', 'Haití', 'Escocia'],
  D: ['Estados Unidos', 'Paraguay', 'Australia', 'Turquía'],
  E: ['Alemania', 'Curazao', 'Costa de Marfil', 'Ecuador'],
  F: ['Países Bajos', 'Japón', 'Túnez', 'Suecia'],
  G: ['Bélgica', 'Egipto', 'Irán', 'Nueva Zelanda'],
  H: ['España', 'Cabo Verde', 'Arabia Saudita', 'Uruguay'],
  I: ['Francia', 'Senegal', 'Noruega', 'Iraq'],
  J: ['Argentina', 'Argelia', 'Austria', 'Jordania'],
  K: ['Portugal', 'RD Congo', 'Uzbekistán', 'Colombia'],
  L: ['Inglaterra', 'Croacia', 'Ghana', 'Panamá'],
}

export const MATCHES = [
  // ─── GRUPO A ───────────────────────────────────────────
  { id: 1,  phase: 'groups', group: 'A', home: 'México',        homeF: '🇲🇽', away: 'Sudáfrica',       awayF: '🇿🇦', date: '2026-06-11', time: '16:00', venue: 'Estadio Azteca, CDMX' },
  { id: 2,  phase: 'groups', group: 'A', home: 'Corea del Sur', homeF: '🇰🇷', away: 'Chequia',          awayF: '🇨🇿', date: '2026-06-11', time: '23:00', venue: 'Estadio Akron, Guadalajara' },
  { id: 3,  phase: 'groups', group: 'A', home: 'Chequia',       homeF: '🇨🇿', away: 'Sudáfrica',        awayF: '🇿🇦', date: '2026-06-18', time: '13:00', venue: 'Mercedes-Benz, Atlanta' },
  { id: 4,  phase: 'groups', group: 'A', home: 'México',        homeF: '🇲🇽', away: 'Corea del Sur',    awayF: '🇰🇷', date: '2026-06-18', time: '22:00', venue: 'Estadio Akron, Guadalajara' },
  { id: 5,  phase: 'groups', group: 'A', home: 'Chequia',       homeF: '🇨🇿', away: 'México',           awayF: '🇲🇽', date: '2026-06-24', time: '22:00', venue: 'Estadio Azteca, CDMX' },
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
  { id: 20, phase: 'groups', group: 'D', home: 'Australia',      homeF: '🇦🇺', away: 'Turquía',   awayF: '🇹🇷', date: '2026-06-13', time: '01:00', venue: "Levi's Stadium, San Francisco" },
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
]