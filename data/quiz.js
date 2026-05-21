// =============================================
// BANCO DE PREGUNTAS — QUIZ DEL DIA
// Categorias: historia, jugadores, sedes 2026,
//             selecciones clasificadas
// =============================================

export const QUIZ_QUESTIONS = [
  // --- HISTORIA ---
  { id: 1, cat: 'historia', q: '¿Cuántos mundiales ha ganado Brasil?', opts: ['4','5','6','3'], a: 1 },
  { id: 2, cat: 'historia', q: '¿En qué país se jugó el primer Mundial de fútbol?', opts: ['Brasil','Italia','Uruguay','Francia'], a: 2 },
  { id: 3, cat: 'historia', q: '¿Qué selección ganó el Mundial de Qatar 2022?', opts: ['Francia','Brasil','Argentina','Croacia'], a: 2 },
  { id: 4, cat: 'historia', q: '¿Cuál es el máximo goleador en la historia de los Mundiales?', opts: ['Pelé','Miroslav Klose','Ronaldo Nazario','Just Fontaine'], a: 1 },
  { id: 5, cat: 'historia', q: '¿En qué año se disputó el primer Mundial de fútbol?', opts: ['1926','1930','1934','1928'], a: 1 },
  { id: 6, cat: 'historia', q: '¿Qué país organizó el Mundial de 2018?', opts: ['Alemania','Rusia','Francia','Brasil'], a: 1 },
  { id: 7, cat: 'historia', q: '¿Cuántas selecciones participan en el Mundial 2026?', opts: ['32','36','48','40'], a: 2 },
  { id: 8, cat: 'historia', q: '¿Qué selección ha disputado todos los Mundiales sin excepción?', opts: ['Alemania','Brasil','Argentina','Italia'], a: 1 },
  { id: 9, cat: 'historia', q: '¿Cuál fue el resultado de la final del Mundial 1950 entre Uruguay y Brasil?', opts: ['2-1','3-0','1-0','2-0'], a: 0 },
  { id: 10, cat: 'historia', q: '¿Qué árbitro anuló el "gol del siglo" de Maradona contra Inglaterra?', opts: ['Nadie, fue válido','El asistente','El árbitro principal','El VAR'], a: 0 },
  { id: 11, cat: 'historia', q: '¿Cuántas estrellas tiene la camiseta de Francia por sus títulos mundiales?', opts: ['1','2','3','0'], a: 1 },
  { id: 12, cat: 'historia', q: '¿Qué país fue el primer campeón mundial europeo?', opts: ['Alemania','España','Italia','Checoslovaquia'], a: 2 },
  { id: 13, cat: 'historia', q: '¿Cuántos goles marcó Just Fontaine en el Mundial 1958, récord absoluto?', opts: ['11','13','10','15'], a: 1 },
  { id: 14, cat: 'historia', q: '¿En qué Mundial se usó por primera vez el VAR?', opts: ['Brasil 2014','Rusia 2018','Qatar 2022','Alemania 2006'], a: 1 },
  { id: 15, cat: 'historia', q: '¿Qué selección eliminó a Italia en el Mundial 2018 (fase previa)?', opts: ['Suecia','Irlanda','Portugal','Grecia'], a: 0 },
  { id: 16, cat: 'historia', q: '¿Quién fue el portero titular de la selección alemana en el Mundial 2014?', opts: ['Neuer','Kahn','Lehmann','ter Stegen'], a: 0 },
  { id: 17, cat: 'historia', q: '¿En qué país y año Pelé ganó su tercer Copa del Mundo?', opts: ['Chile 1962','Inglaterra 1966','México 1970','Suecia 1958'], a: 2 },
  { id: 18, cat: 'historia', q: '¿Cuál es el partido con más goles en la historia de los Mundiales?', opts: ['Austria 7-5 Suiza (1954)','Francia 4-3 Alemania (1982)','Hungría 10-1 El Salvador (1982)','Brasil 7-1 Alemania (2014)'], a: 0 },

  // --- JUGADORES ---
  { id: 30, cat: 'jugadores', q: '¿Cuántos Balones de Oro tiene Lionel Messi?', opts: ['6','7','8','9'], a: 2 },
  { id: 31, cat: 'jugadores', q: '¿Con qué club debutó profesionalmente Cristiano Ronaldo?', opts: ['Manchester United','Sporting CP','Real Madrid','Juventus'], a: 1 },
  { id: 32, cat: 'jugadores', q: '¿Quién es el máximo goleador histórico de la Copa América?', opts: ['Messi','Ronaldo','Neymar','Batistuta'], a: 0 },
  { id: 33, cat: 'jugadores', q: '¿En qué año nació Kylian Mbappé?', opts: ['1996','1997','1998','1999'], a: 2 },
  { id: 34, cat: 'jugadores', q: '¿De qué país es Erling Haaland?', opts: ['Suecia','Dinamarca','Noruega','Finlandia'], a: 2 },
  { id: 35, cat: 'jugadores', q: '¿Qué número de camiseta usa habitualmente Lionel Messi?', opts: ['9','10','11','7'], a: 1 },
  { id: 36, cat: 'jugadores', q: '¿Cuál es el nombre completo de Neymar?', opts: ['Neymar da Silva Santos Jr.','Neymar Júnior Santos','Neymar Rodrigues da Silva','Neymar Santos Alves'], a: 0 },
  { id: 37, cat: 'jugadores', q: '¿Quién ganó el Balón de Oro del Mundial de Qatar 2022?', opts: ['Mbappé','Messi','Modric','Benzema'], a: 1 },
  { id: 38, cat: 'jugadores', q: '¿Cuántos goles marcó Miroslav Klose en Mundiales en total?', opts: ['14','16','18','12'], a: 1 },
  { id: 39, cat: 'jugadores', q: '¿Con qué apodo es conocido Ronaldo Nazario en Brasil?', opts: ['O Rei','O Fenômeno','O Ídolo','O Gordo'], a: 1 },
  { id: 40, cat: 'jugadores', q: '¿Quién fue elegido mejor jugador del Mundial Rusia 2018?', opts: ['Mbappé','Griezmann','Modric','Hazard'], a: 2 },
  { id: 41, cat: 'jugadores', q: '¿De qué ciudad es oriundo Luis Suárez?', opts: ['Montevideo','Salto','Paysandú','Colonia'], a: 1 },
  { id: 42, cat: 'jugadores', q: '¿Qué jugador marcó el gol más rápido en la historia de los Mundiales?', opts: ['Hakan Şükür','Robbie Fowler','Christian Vieri','Miroslav Klose'], a: 0 },
  { id: 43, cat: 'jugadores', q: '¿Cuántos goles marcó Ronaldo (el brasileño) en el Mundial 2002?', opts: ['6','8','10','12'], a: 1 },
  { id: 44, cat: 'jugadores', q: '¿Quién fue el primer jugador en marcar en 5 Mundiales distintos?', opts: ['Ronaldo','Messi','Cristiano Ronaldo','Uwe Seeler'], a: 2 },

  // --- SEDES 2026 ---
  { id: 60, cat: 'sedes', q: '¿Cuántos países organizan el Mundial 2026?', opts: ['2','3','4','1'], a: 1 },
  { id: 61, cat: 'sedes', q: '¿Cuál será la sede de la Gran Final del Mundial 2026?', opts: ['AT&T Stadium, Dallas','SoFi Stadium, LA','MetLife Stadium, NJ','Hard Rock, Miami'], a: 2 },
  { id: 62, cat: 'sedes', q: '¿Cuántos estadios tiene EEUU para el Mundial 2026?', opts: ['8','10','11','12'], a: 1 },
  { id: 63, cat: 'sedes', q: '¿Qué ciudad mexicana albergará partidos del Mundial 2026?', opts: ['Ciudad de México','Guadalajara','Monterrey','Todas las anteriores'], a: 3 },
  { id: 64, cat: 'sedes', q: '¿Cómo se llama el estadio donde se jugarán partidos en la Ciudad de México?', opts: ['Estadio Olímpico','Estadio Azteca','Estadio BBVA','Estadio Chivas'], a: 1 },
  { id: 65, cat: 'sedes', q: '¿Qué ciudad canadiense será sede del Mundial 2026?', opts: ['Toronto','Vancouver','Ambas','Calgary'], a: 2 },
  { id: 66, cat: 'sedes', q: '¿En qué ciudad está el MetLife Stadium, sede de la Final del Mundial 2026?', opts: ['Nueva York','Nueva Jersey','Filadelfia','Newark'], a: 1 },
  { id: 67, cat: 'sedes', q: '¿Cuál es la capacidad aproximada del Estadio Azteca?', opts: ['70.000','80.000','87.000','100.000'], a: 2 },
  { id: 68, cat: 'sedes', q: '¿En cuántas zonas horarias se jugarán partidos del Mundial 2026?', opts: ['2','3','4','5'], a: 2 },
  { id: 69, cat: 'sedes', q: '¿Qué ciudad de EEUU tiene el estadio llamado "Levi\'s Stadium"?', opts: ['Los Ángeles','San Francisco','Seattle','Portland'], a: 1 },

  // --- SELECCIONES ---
  { id: 80, cat: 'selecciones', q: '¿Cómo se llama el técnico de Argentina en el Mundial 2026?', opts: ['Scaloni','Simeone','Bielsa','Gallardo'], a: 0 },
  { id: 81, cat: 'selecciones', q: '¿Cuántos mundiales ganó Uruguay?', opts: ['1','2','3','0'], a: 1 },
  { id: 82, cat: 'selecciones', q: '¿Con qué apodo es conocida la selección brasileña?', opts: ['La Canarinha','La Verde','La Auriverde','La Canarinha o La Auriverde'], a: 3 },
  { id: 83, cat: 'selecciones', q: '¿Qué selección europea tiene como apodo "Die Mannschaft"?', opts: ['Austria','Suiza','Alemania','Países Bajos'], a: 2 },
  { id: 84, cat: 'selecciones', q: '¿Qué selección lleva el nombre de "Les Bleus"?', opts: ['Bélgica','Francia','Italia','Grecia'], a: 1 },
  { id: 85, cat: 'selecciones', q: '¿Cuándo fue la última vez que Uruguay ganó la Copa América?', opts: ['2007','2011','2016','2019'], a: 1 },
  { id: 86, cat: 'selecciones', q: '¿Qué país sudamericano clasificó al Mundial 2026 en primer lugar de las eliminatorias?', opts: ['Brasil','Argentina','Uruguay','Colombia'], a: 1 },
  { id: 87, cat: 'selecciones', q: '¿Cuántos jugadores puede incluir cada selección en su lista definitiva para el Mundial 2026?', opts: ['23','26','28','30'], a: 1 },
  { id: 88, cat: 'selecciones', q: '¿Qué color de camiseta usa de local la selección de Uruguay?', opts: ['Blanca','Celeste','Azul','Verde'], a: 1 },
  { id: 89, cat: 'selecciones', q: '¿Qué apodo tiene la selección de Portugal?', opts: ['A Seleção','Os Navegadores','A Quina','Os Lusos'], a: 0 },
  { id: 90, cat: 'selecciones', q: '¿Cuál es la mascota oficial del Mundial 2026?', opts: ['Zabivaka','Fuleco','Atchoo','Cobi'], a: 2 },
  { id: 91, cat: 'selecciones', q: '¿Quién es el máximo goleador histórico de la selección de México?', opts: ['Hugo Sánchez','Chicharito','Cuauhtémoc Blanco','Javier Aguirre'], a: 1 },
  { id: 92, cat: 'selecciones', q: '¿En qué año debutó la selección de Canadá en un Mundial por primera vez?', opts: ['1986','1994','2022','2018'], a: 2 },
  { id: 93, cat: 'selecciones', q: '¿Cuántas veces fue subcampeón del mundo Países Bajos?', opts: ['1','2','3','4'], a: 2 },
]

// Funcion para obtener 10 preguntas aleatorias para el dia
export function getDailyQuiz(dateStr) {
  // Seed basado en la fecha para que todos tengan el mismo quiz ese dia
  const seed = dateStr.split('-').join('') * 1
  const shuffled = [...QUIZ_QUESTIONS].sort((a, b) => {
    const ha = Math.sin(seed + a.id) * 10000
    const hb = Math.sin(seed + b.id) * 10000
    return (ha - Math.floor(ha)) - (hb - Math.floor(hb))
  })
  return shuffled.slice(0, 10)
}
