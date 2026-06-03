// =============================================
// DARKSIDE PENCA — QUIZ DEL DIA
// 30 días × 10 preguntas = 300 preguntas
// Cada día se desbloquea al completar el anterior
// =============================================

export const QUIZ_DAYS = [
  {
    day: 1, theme: 'Mundial 2026 — Lo Básico',
    questions: [
      { id: 'd1q1', q: '¿En cuántos países se disputará el Mundial 2026?', opts: ['1','2','3','4'], a: 2 },
      { id: 'd1q2', q: '¿Cuántos equipos participan en el Mundial 2026?', opts: ['32','40','48','64'], a: 2 },
      { id: 'd1q3', q: '¿Cuándo comienza el Mundial 2026?', opts: ['1 de junio','11 de junio','20 de junio','1 de julio'], a: 1 },
      { id: 'd1q4', q: '¿Cuál es el estadio inaugural del Mundial 2026?', opts: ['MetLife Stadium','SoFi Stadium','Estadio Azteca','Rose Bowl'], a: 2 },
      { id: 'd1q5', q: '¿Quién es el campeón defensor en el Mundial 2026?', opts: ['Francia','Brasil','Argentina','España'], a: 2 },
      { id: 'd1q6', q: '¿Cuántos grupos tiene el Mundial 2026?', opts: ['8','10','12','16'], a: 2 },
      { id: 'd1q7', q: '¿Cuál es el primer partido del Mundial 2026?', opts: ['USA vs México','México vs Sudáfrica','Argentina vs Francia','Brasil vs España'], a: 1 },
      { id: 'd1q8', q: '¿Cuántos equipos clasifican de cada grupo?', opts: ['Solo el 1°','Los 2 primeros + mejores terceros','Los 3 primeros','Los 4 equipos'], a: 1 },
      { id: 'd1q9', q: '¿Dónde se juega la final del Mundial 2026?', opts: ['Dallas','Los Ángeles','MetLife Stadium, NJ','Miami'], a: 2 },
      { id: 'd1q10', q: '¿Cuántos partidos se juegan en total en el Mundial 2026?', opts: ['64','80','104','120'], a: 2 },
    ]
  },
  {
    day: 2, theme: 'Historia del Mundial I',
    questions: [
      { id: 'd2q1', q: '¿En qué año se jugó el primer Mundial de fútbol?', opts: ['1924','1928','1930','1934'], a: 2 },
      { id: 'd2q2', q: '¿Qué país organizó el primer Mundial?', opts: ['Brasil','Argentina','Uruguay','Chile'], a: 2 },
      { id: 'd2q3', q: '¿Quién ganó el primer Mundial de fútbol?', opts: ['Argentina','Brasil','Uruguay','Italia'], a: 2 },
      { id: 'd2q4', q: '¿Qué selección ganó el Mundial en 1958, 1962 y 1970?', opts: ['Argentina','Alemania','Italia','Brasil'], a: 3 },
      { id: 'd2q5', q: '¿En qué país se celebró el Mundial de 1994?', opts: ['México','Estados Unidos','Francia','Italia'], a: 1 },
      { id: 'd2q6', q: '¿Qué selección ganó el Mundial de 2018 en Rusia?', opts: ['Croacia','Bélgica','Francia','Inglaterra'], a: 2 },
      { id: 'd2q7', q: '¿En qué año se jugó el primer Mundial en Asia?', opts: ['1998','2002','2006','2010'], a: 1 },
      { id: 'd2q8', q: '¿Qué selección fue subcampeona en Qatar 2022?', opts: ['Marruecos','Croacia','Francia','Brasil'], a: 2 },
      { id: 'd2q9', q: '¿Cuántos mundiales ha ganado Brasil en total?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd2q10', q: '¿Qué país organizó el Mundial de 2010?', opts: ['Nigeria','Sudáfrica','Kenya','Egipto'], a: 1 },
    ]
  },
  {
    day: 3, theme: 'Historia del Mundial II',
    questions: [
      { id: 'd3q1', q: '¿Qué jugador marcó el "Gol del Siglo" en México 1986?', opts: ['Platini','Maradona','Zico','Lineker'], a: 1 },
      { id: 'd3q2', q: '¿Quién fue el máximo goleador del Mundial 2006?', opts: ['Ronaldo','Zidane','Klose','Rooney'], a: 2 },
      { id: 'd3q3', q: '¿En qué Mundial Alemania le ganó 7-1 a Brasil?', opts: ['Sudáfrica 2010','Brasil 2014','Rusia 2018','Qatar 2022'], a: 1 },
      { id: 'd3q4', q: '¿Quién anotó el gol de la final del Mundial España 2010?', opts: ['Xavi','Iniesta','Villa','Torres'], a: 1 },
      { id: 'd3q5', q: '¿Quién ganó el Balón de Oro en Qatar 2022?', opts: ['Mbappé','Modric','Messi','Benzema'], a: 2 },
      { id: 'd3q6', q: '¿Cuántos goles marcó Miroslav Klose en Mundiales?', opts: ['13','15','16','17'], a: 2 },
      { id: 'd3q7', q: '¿En qué Mundial se usó el VAR por primera vez?', opts: ['Brasil 2014','Rusia 2018','Qatar 2022','Alemania 2006'], a: 1 },
      { id: 'd3q8', q: '¿Qué país organizó el Mundial de 2014?', opts: ['Argentina','Colombia','Chile','Brasil'], a: 3 },
      { id: 'd3q9', q: '¿Quién fue el máximo goleador del Mundial 2018?', opts: ['Kane','Messi','Lukaku','Griezmann'], a: 0 },
      { id: 'd3q10', q: '¿Quién fue el arquero revelación del Mundial Qatar 2022?', opts: ['Lloris','Courtois','Dibu Martínez','Bounou'], a: 2 },
    ]
  },
  {
    day: 4, theme: 'Sudamérica en el Mundial',
    questions: [
      { id: 'd4q1', q: '¿Cuántas veces ganó Uruguay la Copa del Mundo?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd4q2', q: '¿En qué años fue campeón Uruguay?', opts: ['1930 y 1950','1930 y 1954','1950 y 1966','1930 y 1970'], a: 0 },
      { id: 'd4q3', q: '¿Cuántas copas del mundo tiene Argentina?', opts: ['2','3','4','5'], a: 1 },
      { id: 'd4q4', q: '¿En qué año ganó Argentina su tercera Copa del Mundo?', opts: ['2014','2018','2022','2026'], a: 2 },
      { id: 'd4q5', q: '¿Colombia llegó a qué instancia en Brasil 2014?', opts: ['Grupos','Octavos','Cuartos','Semis'], a: 2 },
      { id: 'd4q6', q: '¿Cuál es el apodo de la selección de Ecuador?', opts: ['La Tri','La Celeste','La Verde','Los Cafeteros'], a: 0 },
      { id: 'd4q7', q: '¿En qué grupo del Mundial 2026 está Uruguay?', opts: ['Grupo G','Grupo H','Grupo I','Grupo J'], a: 1 },
      { id: 'd4q8', q: '¿Qué rival tiene Uruguay en el Grupo H?', opts: ['Argentina','Brasil','España y Arabia Saudita','Francia'], a: 2 },
      { id: 'd4q9', q: '¿Cuántos mundiales ganó Brasil?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd4q10', q: '¿En qué grupo está Brasil en el Mundial 2026?', opts: ['Grupo A','Grupo B','Grupo C','Grupo D'], a: 2 },
    ]
  },
  {
    day: 5, theme: 'Europa en el Mundial',
    questions: [
      { id: 'd5q1', q: '¿Cuántas veces ha ganado Alemania la Copa del Mundo?', opts: ['2','3','4','5'], a: 2 },
      { id: 'd5q2', q: '¿Cuántas veces ha ganado Italia la Copa del Mundo?', opts: ['2','3','4','5'], a: 2 },
      { id: 'd5q3', q: '¿En qué año ganó España su único Mundial?', opts: ['2006','2010','2014','2018'], a: 1 },
      { id: 'd5q4', q: '¿Francia ganó su primer Mundial en...?', opts: ['1994','1998','2002','2006'], a: 1 },
      { id: 'd5q5', q: '¿En qué grupo del Mundial 2026 está España?', opts: ['Grupo F','Grupo G','Grupo H','Grupo I'], a: 2 },
      { id: 'd5q6', q: '¿Inglaterra ganó su único Mundial en...?', opts: ['1958','1962','1966','1970'], a: 2 },
      { id: 'd5q7', q: '¿En qué grupo del Mundial 2026 está Francia?', opts: ['Grupo H','Grupo I','Grupo J','Grupo K'], a: 1 },
      { id: 'd5q8', q: '¿Portugal lidera el Grupo K con...?', opts: ['España','Colombia y Uzbekistán','Inglaterra','Argentina'], a: 1 },
      { id: 'd5q9', q: '¿En qué grupo está Alemania en el Mundial 2026?', opts: ['Grupo D','Grupo E','Grupo F','Grupo G'], a: 1 },
      { id: 'd5q10', q: '¿Cuántas veces ganó Francia el Mundial?', opts: ['1','2','3','4'], a: 1 },
    ]
  },
  {
    day: 6, theme: 'África y Asia en el Mundial',
    questions: [
      { id: 'd6q1', q: '¿Qué selección africana llegó a semifinales en Qatar 2022?', opts: ['Nigeria','Ghana','Marruecos','Senegal'], a: 2 },
      { id: 'd6q2', q: '¿Qué selección asiática venció a Argentina en Qatar 2022?', opts: ['Japón','Arabia Saudita','Corea del Sur','Irán'], a: 1 },
      { id: 'd6q3', q: '¿Qué selección asiática llegó a semis en Corea-Japón 2002?', opts: ['Japón','China','Corea del Sur','Arabia Saudita'], a: 2 },
      { id: 'd6q4', q: '¿En qué grupo del Mundial 2026 está Marruecos?', opts: ['Grupo A','Grupo B','Grupo C','Grupo D'], a: 2 },
      { id: 'd6q5', q: '¿Japón está en el Grupo F junto a...?', opts: ['Brasil','Países Bajos, Túnez y Suecia','España','Francia'], a: 1 },
      { id: 'd6q6', q: '¿Cuántas selecciones de África participan en el Mundial 2026?', opts: ['5','6','7','9'], a: 3 },
      { id: 'd6q7', q: '¿Qué país del Golfo está en el Grupo B del Mundial 2026?', opts: ['Arabia Saudita','Emiratos Árabes','Kuwait','Qatar'], a: 3 },
      { id: 'd6q8', q: '¿Cuántos cupos tiene CAF (África) para el Mundial 2026?', opts: ['5','6','7','9'], a: 3 },
      { id: 'd6q9', q: '¿Senegal está en el Grupo I junto a...?', opts: ['Argentina','Francia, Noruega e Iraq','España','Brasil'], a: 1 },
      { id: 'd6q10', q: '¿Cuántas selecciones de Asia van al Mundial 2026?', opts: ['5','6','7','8'], a: 2 },
    ]
  },
  {
    day: 7, theme: 'Reglas del Fútbol',
    questions: [
      { id: 'd7q1', q: '¿Cuántos jugadores tiene cada equipo en la cancha?', opts: ['9','10','11','12'], a: 2 },
      { id: 'd7q2', q: '¿Cuánto dura un partido de fútbol (tiempo reglamentario)?', opts: ['80 min','90 min','100 min','120 min'], a: 1 },
      { id: 'd7q3', q: '¿A cuántos metros del arco se cobra el penal?', opts: ['9','11','12','15'], a: 1 },
      { id: 'd7q4', q: '¿Cuántos cambios puede hacer cada equipo en un Mundial?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd7q5', q: '¿Cuántas tarjetas amarillas equivalen a roja automática?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd7q6', q: '¿Qué significa VAR?', opts: ['Variable de arbitraje','Video Assistant Referee','Virtual Analysis Review','Video Arbitration Rules'], a: 1 },
      { id: 'd7q7', q: '¿Cuántos metros tiene un arco de fútbol de ancho?', opts: ['6','7.32','8','9'], a: 1 },
      { id: 'd7q8', q: '¿Qué sucede si un partido termina empatado en eliminatoria directa?', opts: ['Se repite','Gana el visitante','Prórroga y penales','Gana el que tuvo más tiros'], a: 2 },
      { id: 'd7q9', q: '¿Cuántos jugadores puede llevar un equipo en la lista mundialista?', opts: ['23','25','26','30'], a: 2 },
      { id: 'd7q10', q: '¿Cuántos árbitros hay en el campo durante un partido?', opts: ['2','3','4','5'], a: 1 },
    ]
  },
  {
    day: 8, theme: 'Estadios del Mundial 2026',
    questions: [
      { id: 'd8q1', q: '¿Cuántos estadios tendrá el Mundial 2026?', opts: ['12','14','16','18'], a: 2 },
      { id: 'd8q2', q: '¿Cuál es el estadio de la final del Mundial 2026?', opts: ['Azteca','MetLife Stadium','SoFi Stadium','Rose Bowl'], a: 1 },
      { id: 'd8q3', q: '¿En qué ciudad está el MetLife Stadium?', opts: ['Dallas','Los Ángeles','Nueva York/Nueva Jersey','Miami'], a: 2 },
      { id: 'd8q4', q: '¿Cuántos estadios aporta México al Mundial 2026?', opts: ['1','2','3','4'], a: 2 },
      { id: 'd8q5', q: '¿Cuántos estadios aporta Canadá al Mundial 2026?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd8q6', q: '¿En qué ciudad canadiense está el BMO Field?', opts: ['Vancouver','Montreal','Toronto','Calgary'], a: 2 },
      { id: 'd8q7', q: '¿El SoFi Stadium está en...?', opts: ['San Francisco','Los Ángeles','Seattle','Dallas'], a: 1 },
      { id: 'd8q8', q: '¿En qué ciudad está el NRG Stadium (sede del Grupo K)?', opts: ['Dallas','Houston','Atlanta','Miami'], a: 1 },
      { id: 'd8q9', q: '¿Cuántos estadios aporta Estados Unidos al Mundial 2026?', opts: ['9','10','11','12'], a: 2 },
      { id: 'd8q10', q: '¿El Azteca fue sede del Mundial en...?', opts: ['Solo 1970','Solo 1986','1970 y 1986','1970, 1986 y 2026'], a: 3 },
    ]
  },
  {
    day: 9, theme: 'Jugadores Legendarios I',
    questions: [
      { id: 'd9q1', q: '¿Cuántos mundiales jugó Pelé?', opts: ['2','3','4','5'], a: 1 },
      { id: 'd9q2', q: '¿Cuántos Balones de Oro tiene Lionel Messi?', opts: ['6','7','8','9'], a: 2 },
      { id: 'd9q3', q: '¿De qué país es Ronaldo Nazário?', opts: ['Portugal','España','Brasil','Argentina'], a: 2 },
      { id: 'd9q4', q: '¿Quién fue apodado el "Kaiser" del fútbol alemán?', opts: ['Beckenbauer','Müller','Matthäus','Klose'], a: 0 },
      { id: 'd9q5', q: '¿Cuántos mundiales ganó Diego Maradona?', opts: ['0','1','2','3'], a: 1 },
      { id: 'd9q6', q: '¿De qué club era Zidane cuando ganó el Mundial 1998?', opts: ['Real Madrid','Barcelona','Juventus','Manchester Utd'], a: 2 },
      { id: 'd9q7', q: '¿Cuántos mundiales ganó Pelé?', opts: ['1','2','3','4'], a: 2 },
      { id: 'd9q8', q: '¿Qué jugador tiene más goles en la historia de los Mundiales?', opts: ['Pelé','Ronaldo','Klose','Messi'], a: 2 },
      { id: 'd9q9', q: '¿De qué país es Luka Modric?', opts: ['Serbia','Bosnia','Croacia','Eslovenia'], a: 2 },
      { id: 'd9q10', q: '¿Cuántos Balones de Oro tiene Cristiano Ronaldo?', opts: ['4','5','6','7'], a: 1 },
    ]
  },
  {
    day: 10, theme: 'Jugadores del Mundial 2026',
    questions: [
      { id: 'd10q1', q: '¿Quién ganó la Bota de Oro en Qatar 2022?', opts: ['Messi','Mbappé','Giroud','Müller'], a: 1 },
      { id: 'd10q2', q: '¿De qué país es Erling Haaland?', opts: ['Suecia','Dinamarca','Noruega','Finlandia'], a: 2 },
      { id: 'd10q3', q: '¿En qué club juega Vinicius Jr.?', opts: ['Barcelona','PSG','Real Madrid','Man. City'], a: 2 },
      { id: 'd10q4', q: '¿De qué país es Mohamed Salah?', opts: ['Marruecos','Argelia','Egipto','Túnez'], a: 2 },
      { id: 'd10q5', q: '¿En qué club juega Pedri?', opts: ['Real Madrid','Atlético','Barcelona','Valencia'], a: 2 },
      { id: 'd10q6', q: '¿De qué país es Bukayo Saka?', opts: ['Nigeria','Ghana','Jamaica','Inglaterra'], a: 3 },
      { id: 'd10q7', q: '¿En qué club juega Darwin Núñez?', opts: ['Barcelona','Man. City','Liverpool','Arsenal'], a: 2 },
      { id: 'd10q8', q: '¿Cuál es la nacionalidad de Lautaro Martínez?', opts: ['Italiano','Español','Argentino','Uruguayo'], a: 2 },
      { id: 'd10q9', q: '¿Quién ganó el premio al jugador joven en Qatar 2022?', opts: ['Gavi','Pedri','Bellingham','Camavinga'], a: 0 },
      { id: 'd10q10', q: '¿En qué club juega Kylian Mbappé en 2026?', opts: ['PSG','Liverpool','Real Madrid','Man. City'], a: 2 },
    ]
  },
  {
    day: 11, theme: 'Campeones del Mundo',
    questions: [
      { id: 'd11q1', q: '¿Cuántos países diferentes han ganado la Copa del Mundo?', opts: ['6','7','8','9'], a: 2 },
      { id: 'd11q2', q: '¿Qué selección ha ganado más Mundiales?', opts: ['Argentina','Italia','Alemania','Brasil'], a: 3 },
      { id: 'd11q3', q: '¿Argentina ganó sus 3 mundiales en...?', opts: ['1978, 1986 y 2022','1978, 1986 y 2018','1986, 2014 y 2022','1978, 2014 y 2022'], a: 0 },
      { id: 'd11q4', q: '¿Quién levantó la Copa en Qatar 2022?', opts: ['Di María','Messi','Otamendi','Álvarez'], a: 1 },
      { id: 'd11q5', q: '¿Qué selección ganó el Mundial de Brasil 2014?', opts: ['Argentina','Brasil','Alemania','Países Bajos'], a: 2 },
      { id: 'd11q6', q: '¿Cuántas finales mundialistas perdió Alemania?', opts: ['2','3','4','5'], a: 2 },
      { id: 'd11q7', q: '¿Italia ganó sus 4 mundiales en...?', opts: ['1930, 1934, 1938, 1966','1934, 1938, 1982, 2006','1934, 1938, 1970, 2006','1930, 1938, 1982, 2006'], a: 1 },
      { id: 'd11q8', q: '¿Quién fue el goleador de la final de Brasil 2014?', opts: ['Götze','Müller','Klose','Schweinsteiger'], a: 0 },
      { id: 'd11q9', q: '¿Cuántas finales mundialistas ganó Brasil?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd11q10', q: '¿Qué selección ganó el Mundial 2018 en Rusia?', opts: ['Croacia','Bélgica','Francia','Alemania'], a: 2 },
    ]
  },
  {
    day: 12, theme: 'La Final de Qatar 2022',
    questions: [
      { id: 'd12q1', q: '¿Qué resultado tuvo la final de Qatar 2022 al cabo del tiempo reglamentario?', opts: ['2-2','3-2','2-0','1-1'], a: 0 },
      { id: 'd12q2', q: '¿Cuántos goles marcó Mbappé en la final de Qatar 2022?', opts: ['1','2','3','4'], a: 2 },
      { id: 'd12q3', q: '¿Quién atajó el penal decisivo en la final de Qatar 2022?', opts: ['Lloris','Dibu Martínez','Alisson','Courtois'], a: 1 },
      { id: 'd12q4', q: '¿Quién fue el árbitro de la final de Qatar 2022?', opts: ['Marciniak','Wilton Sampaio','Skomina','Kuipers'], a: 0 },
      { id: 'd12q5', q: '¿En cuántas finales del Mundial jugó Messi antes de ganar?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd12q6', q: '¿Quién marcó el hat-trick en Argentina vs Croacia en semis?', opts: ['Messi','Álvarez','Di María','Mac Allister'], a: 1 },
      { id: 'd12q7', q: '¿A qué selección eliminó Argentina en semis de Qatar?', opts: ['Brasil','Francia','Croacia','Países Bajos'], a: 2 },
      { id: 'd12q8', q: '¿Quién fue el asistente de Argentina en la final (marcó gol)?', opts: ['Álvarez','Messi','Di María','Mac Allister'], a: 2 },
      { id: 'd12q9', q: '¿Con qué resultado ganó Argentina la tanda de penales?', opts: ['4-2','3-2','5-3','4-3'], a: 0 },
      { id: 'd12q10', q: '¿Cuántos goles en total tuvo la final de Qatar 2022 incluyendo prórroga?', opts: ['4','5','6','7'], a: 2 },
    ]
  },
  {
    day: 13, theme: 'Uruguay — La Celeste',
    questions: [
      { id: 'd13q1', q: '¿Cuántas veces ganó Uruguay la Copa del Mundo?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd13q2', q: '¿Cómo se llama el estadio principal de Uruguay?', opts: ['Est. Centenario','Est. Defensores','Est. Nacional','Gran Parque Central'], a: 0 },
      { id: 'd13q3', q: '¿Quién convirtió el gol del título vs Brasil en 1950?', opts: ['Varela','Ghiggia','Schiaffino','Míguez'], a: 1 },
      { id: 'd13q4', q: '¿Qué jugador fue sancionado por morderle a un rival en Brasil 2014?', opts: ['Cavani','Suárez','Forlán','Lugano'], a: 1 },
      { id: 'd13q5', q: '¿Quién es el técnico de Uruguay en el Mundial 2026?', opts: ['Tabárez','Diego Alonso','Marcelo Bielsa','Gallardo'], a: 2 },
      { id: 'd13q6', q: '¿Contra quién debuta Uruguay en el Mundial 2026?', opts: ['España','Cabo Verde','Arabia Saudita','Croacia'], a: 1 },
      { id: 'd13q7', q: '¿Quién es el máximo goleador histórico de Uruguay?', opts: ['Forlán','Suárez','Cavani','Ghiggia'], a: 1 },
      { id: 'd13q8', q: '¿En qué grupo está Uruguay en el Mundial 2026?', opts: ['Grupo F','Grupo G','Grupo H','Grupo I'], a: 2 },
      { id: 'd13q9', q: '¿En qué instancia quedó Uruguay en Qatar 2022?', opts: ['Grupos','Octavos','Cuartos','Semis'], a: 0 },
      { id: 'd13q10', q: '¿Cuántas copas América ganó Uruguay?', opts: ['10','12','15','17'], a: 2 },
    ]
  },
  {
    day: 14, theme: 'Argentina — La Albiceleste',
    questions: [
      { id: 'd14q1', q: '¿Cuántos mundiales ganó Argentina?', opts: ['2','3','4','5'], a: 1 },
      { id: 'd14q2', q: '¿Quién fue el técnico de Argentina en Qatar 2022?', opts: ['Bielsa','Bauza','Scaloni','Sampaoli'], a: 2 },
      { id: 'd14q3', q: '¿En qué grupo está Argentina en el Mundial 2026?', opts: ['Grupo I','Grupo J','Grupo K','Grupo L'], a: 1 },
      { id: 'd14q4', q: '¿Contra quiénes juega Argentina en el Grupo J del Mundial 2026?', opts: ['Brasil, Chile, Paraguay','Argelia, Austria y Jordania','España, Uruguay y Cabo Verde','Francia, Senegal y Noruega'], a: 1 },
      { id: 'd14q5', q: '¿Quién fue el máximo goleador de Argentina en Qatar 2022?', opts: ['Messi','Álvarez','Di María','Mac Allister'], a: 1 },
      { id: 'd14q6', q: '¿Cuántos mundiales jugó Messi antes de ganar?', opts: ['3','4','5','6'], a: 1 },
      { id: 'd14q7', q: '¿En qué años ganó Argentina el Mundial?', opts: ['1978, 1986 y 2022','1982, 1990 y 2022','1978, 1986 y 2014','1986, 2014 y 2022'], a: 0 },
      { id: 'd14q8', q: '¿Quién fue el técnico de Argentina en 1978?', opts: ['Menotti','Bilardo','Basile','Bielsa'], a: 0 },
      { id: 'd14q9', q: '¿Quién fue el técnico de Argentina en 1986?', opts: ['Menotti','Bilardo','Basile','Bielsa'], a: 1 },
      { id: 'd14q10', q: '¿Cuántos goles marcó Messi en la fase de grupos de Qatar 2022?', opts: ['1','2','3','4'], a: 1 },
    ]
  },
  {
    day: 15, theme: 'Récords Mundialistas',
    questions: [
      { id: 'd15q1', q: '¿Cuántos goles marcó Just Fontaine en el Mundial 1958?', opts: ['11','12','13','15'], a: 2 },
      { id: 'd15q2', q: '¿Cuál es la mayor goleada en la historia del Mundial?', opts: ['9-0','10-1','11-0','12-0'], a: 0 },
      { id: 'd15q3', q: '¿Cuántos goles marcó Ronaldo Nazário en Mundiales?', opts: ['12','15','17','20'], a: 2 },
      { id: 'd15q4', q: '¿Qué jugador participó en 5 Mundiales distintos?', opts: ['Messi','Cafu','Brehme','Rafael Márquez'], a: 3 },
      { id: 'd15q5', q: '¿Cuántos Mundiales jugó Antonio Carbajal?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd15q6', q: '¿Qué selección tiene más partidos ganados en la historia del Mundial?', opts: ['Argentina','Alemania','Brasil','Italia'], a: 2 },
      { id: 'd15q7', q: '¿Cuál fue el primer Mundial televisado en color?', opts: ['México 1970','Alemania 1974','Argentina 1978','España 1982'], a: 0 },
      { id: 'd15q8', q: '¿Cuántos goles marcó Messi en todos los Mundiales juntos?', opts: ['11','13','16','17'], a: 2 },
      { id: 'd15q9', q: '¿Cuántas tarjetas rojas hubo en el Mundial de Qatar 2022?', opts: ['4','6','10','14'], a: 2 },
      { id: 'd15q10', q: '¿Quién tiene más partidos jugados en Mundiales como jugador?', opts: ['Messi','Klose','Matthäus','Cafu'], a: 2 },
    ]
  },
  {
    day: 16, theme: 'Grupos del Mundial 2026 — A al F',
    questions: [
      { id: 'd16q1', q: '¿Quién lidera el Grupo A del Mundial 2026?', opts: ['Estados Unidos','México','Canadá','Brasil'], a: 1 },
      { id: 'd16q2', q: '¿Sudáfrica está en el grupo de...?', opts: ['México','Brasil','España','Argentina'], a: 0 },
      { id: 'd16q3', q: '¿Qué país anfitrión está en el Grupo B?', opts: ['México','USA','Canadá','Todos'], a: 2 },
      { id: 'd16q4', q: '¿Haití está en el mismo grupo que...?', opts: ['Argentina','Brasil','España','Francia'], a: 1 },
      { id: 'd16q5', q: '¿Turquía está en el Grupo D junto a...?', opts: ['México y Sudáfrica','USA, Paraguay y Australia','Brasil y Marruecos','Alemania y Ecuador'], a: 1 },
      { id: 'd16q6', q: '¿Curazao es de qué confederación?', opts: ['CONMEBOL','UEFA','CONCACAF','AFC'], a: 2 },
      { id: 'd16q7', q: '¿Alemania está en el Grupo E con...?', opts: ['Ecuador, Costa de Marfil y Curazao','Brasil y Marruecos','Francia y Senegal','España y Uruguay'], a: 0 },
      { id: 'd16q8', q: '¿Japón está en el Grupo F junto a...?', opts: ['Alemania','Países Bajos, Túnez y Suecia','Argentina','Portugal'], a: 1 },
      { id: 'd16q9', q: '¿Qué sede alberga los partidos del Grupo A (México)?', opts: ['Houston y Dallas','Azteca, Akron y BBVA','MetLife y Boston','SoFi y Seattle'], a: 1 },
      { id: 'd16q10', q: '¿Escocia está en el Grupo C con...?', opts: ['Argentina','Brasil, Marruecos y Haití','España','Francia'], a: 1 },
    ]
  },
  {
    day: 17, theme: 'Grupos del Mundial 2026 — G al L',
    questions: [
      { id: 'd17q1', q: '¿Bélgica lidera el Grupo G, ¿cuántos mundiales ganó?', opts: ['0','1','2','3'], a: 0 },
      { id: 'd17q2', q: '¿Nueva Zelanda es de qué confederación?', opts: ['AFC','CAF','OFC','CONCACAF'], a: 2 },
      { id: 'd17q3', q: '¿España y Uruguay están en el Grupo H. ¿Quiénes más?', opts: ['Francia y Alemania','Cabo Verde y Arabia Saudita','Brasil y Marruecos','Japón y Suecia'], a: 1 },
      { id: 'd17q4', q: '¿Francia está en el Grupo I con...?', opts: ['Argentina','Senegal, Noruega e Iraq','España','Brasil'], a: 1 },
      { id: 'd17q5', q: '¿Noruega participa en el Grupo I. ¿Participó en el último Mundial?', opts: ['Sí, Qatar 2022','No, no clasificó desde 1998','Sí, Rusia 2018','No desde 2006'], a: 1 },
      { id: 'd17q6', q: '¿Argentina debutará en el Mundial 2026 vs...?', opts: ['Austria','Argelia','Jordania','Bosnia'], a: 1 },
      { id: 'd17q7', q: '¿RD Congo está en el Grupo K. ¿Cuándo fue al único Mundial?', opts: ['1966','1970','1974','1978'], a: 2 },
      { id: 'd17q8', q: '¿Quién es el favorito del Grupo L?', opts: ['Ghana','Croacia','Panamá','Inglaterra'], a: 3 },
      { id: 'd17q9', q: '¿Croacia llegó a qué instancia en Qatar 2022?', opts: ['Octavos','Cuartos','Semis','Final'], a: 2 },
      { id: 'd17q10', q: '¿Uzbekistán está en el Grupo K, ¿de qué confederación es?', opts: ['UEFA','AFC','OFC','CONMEBOL'], a: 1 },
    ]
  },
  {
    day: 18, theme: 'El Camino a la Final',
    questions: [
      { id: 'd18q1', q: '¿Cuántos equipos pasan a la fase de 32 (octavos) en el Mundial 2026?', opts: ['24','28','32','36'], a: 2 },
      { id: 'd18q2', q: '¿Cuántos "mejores terceros" clasifican a octavos?', opts: ['4','6','8','10'], a: 2 },
      { id: 'd18q3', q: '¿Cuántas fases eliminatorias tiene el Mundial 2026 después de grupos?', opts: ['4','5','6','7'], a: 1 },
      { id: 'd18q4', q: '¿Cuándo termina la fase de grupos del Mundial 2026?', opts: ['24 jun','27 jun','30 jun','2 jul'], a: 1 },
      { id: 'd18q5', q: '¿Qué pasa si dos equipos empatan en puntos en el grupo?', opts: ['Sorteo','Diferencia de goles, luego goles a favor, luego enfrentamiento directo','Gana el que metió más goles','Partido extra'], a: 1 },
      { id: 'd18q6', q: '¿Cuándo es el partido Argentina vs Jordania?', opts: ['16 de junio','22 de junio','24 de junio','27 de junio'], a: 3 },
      { id: 'd18q7', q: '¿Cuándo juega Uruguay vs España?', opts: ['15 de junio','21 de junio','24 de junio','26 de junio'], a: 3 },
      { id: 'd18q8', q: '¿Cuándo es el partido Colombia vs Portugal?', opts: ['17 de junio','23 de junio','25 de junio','27 de junio'], a: 3 },
      { id: 'd18q9', q: '¿Cuándo debuta Brasil en el Mundial 2026?', opts: ['11 de junio','13 de junio','15 de junio','17 de junio'], a: 1 },
      { id: 'd18q10', q: '¿Cuándo debuta Argentina en el Mundial 2026?', opts: ['13 de junio','15 de junio','16 de junio','18 de junio'], a: 2 },
    ]
  },
  {
    day: 19, theme: 'Curiosidades del Mundial',
    questions: [
      { id: 'd19q1', q: '¿Qué Mundial fue el primero con 32 equipos?', opts: ['USA 1994','Francia 1998','Corea-Japón 2002','Alemania 2006'], a: 1 },
      { id: 'd19q2', q: '¿Cuántos países organizarán el Mundial 2030?', opts: ['2','3','4','6'], a: 3 },
      { id: 'd19q3', q: '¿Qué Mundial se realizó en invierno del hemisferio norte?', opts: ['Brasil 2014','Rusia 2018','Qatar 2022','Nunca'], a: 2 },
      { id: 'd19q4', q: '¿Cuándo fue la última vez que Canadá participó antes de 2026?', opts: ['1982','1986','1990','2006'], a: 1 },
      { id: 'd19q5', q: '¿Qué significa el "Maracanazo"?', opts: ['Gol de Pelé en el Maracaná','Derrota de Brasil ante Uruguay en 1950','Victoria de Argentina en el Maracaná','Penal fallado histórico'], a: 1 },
      { id: 'd19q6', q: '¿Cuándo nació el fútbol moderno con sus reglas?', opts: ['1840','1863','1880','1900'], a: 1 },
      { id: 'd19q7', q: '¿En qué país nació el fútbol moderno?', opts: ['Francia','Alemania','Inglaterra','Escocia'], a: 2 },
      { id: 'd19q8', q: '¿Qué significa FIFA?', opts: ['Fédération Internationale de Football Association','Federación Internacional de Fútbol Americano','Fédération Internationale de Football Amateur','Federación Integral de Fútbol Asociación'], a: 0 },
      { id: 'd19q9', q: '¿Qué ciudad norteamericana fue sede de la final del Mundial 1994?', opts: ['Los Ángeles','Nueva York','Pasadena','Chicago'], a: 2 },
      { id: 'd19q10', q: '¿Cuándo fue el primer Mundial en México antes de 2026?', opts: ['1966 y 1978','1970 y 1986','1974 y 1982','1962 y 1970'], a: 1 },
    ]
  },
  {
    day: 20, theme: 'Brasil — La Canarinha',
    questions: [
      { id: 'd20q1', q: '¿En qué años ganó Brasil la Copa del Mundo?', opts: ['1958, 1962, 1970, 1994 y 2002','1958, 1962, 1966, 1994 y 2002','1950, 1962, 1970, 1994 y 2002','1958, 1970, 1982, 1994 y 2002'], a: 0 },
      { id: 'd20q2', q: '¿Quién era el técnico de Brasil en Qatar 2022?', opts: ['Tite','Scolari','Dunga','Parreira'], a: 0 },
      { id: 'd20q3', q: '¿Brasil fue eliminado por quién en Qatar 2022?', opts: ['Argentina','Croacia','Francia','Marruecos'], a: 1 },
      { id: 'd20q4', q: '¿Cuántos goles marcó Pelé en Mundiales?', opts: ['9','10','12','15'], a: 2 },
      { id: 'd20q5', q: '¿Qué rival tiene Brasil en el Grupo C del Mundial 2026?', opts: ['Argentina y Colombia','Marruecos, Haití y Escocia','España y Uruguay','Francia y Senegal'], a: 1 },
      { id: 'd20q6', q: '¿Cuántas finales mundialistas perdió Brasil?', opts: ['0','1','2','3'], a: 2 },
      { id: 'd20q7', q: '¿Quién fue el máximo goleador de Brasil en Qatar 2022?', opts: ['Neymar','Vinicius','Raphinha','Richarlison'], a: 3 },
      { id: 'd20q8', q: '¿Quién dirige a Brasil en el Mundial 2026?', opts: ['Dorival Jr.','Tite','Ancelotti','Jardine'], a: 0 },
      { id: 'd20q9', q: '¿Qué significa el apodo "La Canarinha"?', opts: ['El verde','El canario','El guerrero','El rey'], a: 1 },
      { id: 'd20q10', q: '¿Cuándo debuta Brasil en el Grupo C del Mundial 2026?', opts: ['11 de junio','12 de junio','13 de junio','14 de junio'], a: 2 },
    ]
  },
  {
    day: 21, theme: 'Técnicos y Estrategias',
    questions: [
      { id: 'd21q1', q: '¿Quién fue el técnico de Alemania cuando ganó el Mundial 2014?', opts: ['Klinsmann','Löw','Flick','Tuchel'], a: 1 },
      { id: 'd21q2', q: '¿Qué técnico dirigió a España en el Mundial 2010?', opts: ['Camacho','Aragonés','Del Bosque','Clemente'], a: 2 },
      { id: 'd21q3', q: '¿Quién dirigió a Francia cuando ganó el Mundial 2018?', opts: ['Zidane','Platini','Deschamps','Henry'], a: 2 },
      { id: 'd21q4', q: '¿Quién fue el técnico de Italia en el Mundial 2006?', opts: ['Sacchi','Lippi','Mancini','Capello'], a: 1 },
      { id: 'd21q5', q: '¿Cuántos mundiales dirigió Óscar Tabárez a Uruguay?', opts: ['2','3','4','5'], a: 2 },
      { id: 'd21q6', q: '¿Quién dirige a Portugal en el Mundial 2026?', opts: ['Mourinho','Fernando Santos','Rui Costa','Roberto Martínez'], a: 3 },
      { id: 'd21q7', q: '¿Quién dirige a Colombia en el Mundial 2026?', opts: ['Rueda','Queiroz','Lorenzo','Lozano'], a: 2 },
      { id: 'd21q8', q: '¿Quién fue el técnico de Argentina en 1978?', opts: ['Menotti','Bilardo','Basile','Bielsa'], a: 0 },
      { id: 'd21q9', q: '¿Quién dirige a España en el Mundial 2026?', opts: ['Hierro','Enrique','De la Fuente','Lopetegui'], a: 2 },
      { id: 'd21q10', q: '¿Quién fue el técnico de Marruecos en Qatar 2022?', opts: ['Vahid','Regragui','Badou','Benzema'], a: 1 },
    ]
  },
  {
    day: 22, theme: 'Copa América y Eliminatorias',
    questions: [
      { id: 'd22q1', q: '¿Quién ganó la Copa América 2024?', opts: ['Uruguay','Brasil','Argentina','Colombia'], a: 2 },
      { id: 'd22q2', q: '¿Dónde se jugó la Copa América 2024?', opts: ['Brasil','Argentina','Estados Unidos','Colombia'], a: 2 },
      { id: 'd22q3', q: '¿Qué selección ganó más veces la Copa América?', opts: ['Brasil','Argentina','Uruguay','Chile'], a: 2 },
      { id: 'd22q4', q: '¿Qué sistema se usa en las Eliminatorias Sudamericanas?', opts: ['Grupos','Todos contra todos','Ida y vuelta','Rondas clasificatorias'], a: 1 },
      { id: 'd22q5', q: '¿Cuántos cupos tiene UEFA para el Mundial 2026?', opts: ['12','13','16','17'], a: 2 },
      { id: 'd22q6', q: '¿Cuántas selecciones de CONCACAF van al Mundial 2026?', opts: ['3','4','6','8'], a: 2 },
      { id: 'd22q7', q: '¿Cuántas selecciones de CONMEBOL van al Mundial 2026?', opts: ['4','5','6','8'], a: 2 },
      { id: 'd22q8', q: '¿Qué selección lideró las Eliminatorias CONMEBOL para el Mundial 2026?', opts: ['Brasil','Argentina','Uruguay','Colombia'], a: 1 },
      { id: 'd22q9', q: '¿Qué selección de CONMEBOL no clasificó al Mundial 2026?', opts: ['Bolivia','Venezuela','Perú','Chile'], a: 3 },
      { id: 'd22q10', q: '¿Cuántos cupos tiene CONCACAF para el Mundial 2026 (como anfitrión + clasificados)?', opts: ['3','4','6','8'], a: 2 },
    ]
  },
  {
    day: 23, theme: 'Messi y su Historia Mundialista',
    questions: [
      { id: 'd23q1', q: '¿En qué año debutó Messi en un Mundial?', opts: ['2002','2006','2010','2014'], a: 1 },
      { id: 'd23q2', q: '¿Cuántos goles hizo Messi en Qatar 2022?', opts: ['6','7','8','9'], a: 1 },
      { id: 'd23q3', q: '¿Cuántos goles en total marcó Messi en Mundiales?', opts: ['11','13','16','17'], a: 2 },
      { id: 'd23q4', q: '¿En qué Mundial Messi ganó el Balón de Oro sin ser campeón?', opts: ['Sudáfrica 2010','Brasil 2014','Rusia 2018','Qatar 2022'], a: 1 },
      { id: 'd23q5', q: '¿Cuántas asistencias hizo Messi en Qatar 2022?', opts: ['1','2','3','4'], a: 2 },
      { id: 'd23q6', q: '¿Contra quién marcó Messi su primer gol en un Mundial?', opts: ['Serbia','México','Ghana','Alemania'], a: 2 },
      { id: 'd23q7', q: '¿Cuántos Mundiales jugó Messi incluyendo Qatar 2022?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd23q8', q: '¿Qué número usa Messi en la selección argentina?', opts: ['7','9','10','11'], a: 2 },
      { id: 'd23q9', q: '¿Cuántos mundiales ganó Messi?', opts: ['0','1','2','3'], a: 1 },
      { id: 'd23q10', q: '¿Messi participó en el Mundial 2026 con cuántos años?', opts: ['36','37','38','39'], a: 2 },
    ]
  },
  {
    day: 24, theme: 'El Balón y el Reglamento',
    questions: [
      { id: 'd24q1', q: '¿Cuántos metros mide el arco de alto?', opts: ['2','2.44','2.5','3'], a: 1 },
      { id: 'd24q2', q: '¿Cómo se llama el balón oficial del Mundial 2026?', opts: ['Telstar','Jabulani','Brazuca','Conext26'], a: 3 },
      { id: 'd24q3', q: '¿Cuántos jugadores puede llevar un equipo en la lista mundialista?', opts: ['23','25','26','30'], a: 2 },
      { id: 'd24q4', q: '¿Cuántos metros tiene el área penal de profundidad?', opts: ['5.5','11','16.5','18.32'], a: 2 },
      { id: 'd24q5', q: '¿Cuántos puntos vale ganar en la fase de grupos?', opts: ['1','2','3','4'], a: 2 },
      { id: 'd24q6', q: '¿Cuántos árbitros están en el campo durante un partido?', opts: ['2','3','4','5'], a: 1 },
      { id: 'd24q7', q: '¿Qué pasa si el balón sale por línea de fondo tocado por un defensor?', opts: ['Tiro de esquina','Saque de meta','Lateral','Penal'], a: 0 },
      { id: 'd24q8', q: '¿Cuántas sustituciones extra se permiten en la prórroga?', opts: ['0','1','2','Las que queden'], a: 0 },
      { id: 'd24q9', q: '¿Cuánto pesa el balón oficial en gramos?', opts: ['310-340','410-450','510-560','610-640'], a: 1 },
      { id: 'd24q10', q: '¿Cuántos metros tiene el área chica de ancho?', opts: ['5.5','9.15','16.5','18.32'], a: 3 },
    ]
  },
  {
    day: 25, theme: 'Porteros Legendarios',
    questions: [
      { id: 'd25q1', q: '¿Quién fue el mejor arquero del Mundial Qatar 2022?', opts: ['Lloris','Courtois','Dibu Martínez','Bounou'], a: 2 },
      { id: 'd25q2', q: '¿Cuántos penales atajó el "Dibu" Martínez en Qatar 2022?', opts: ['2','3','4','5'], a: 2 },
      { id: 'd25q3', q: '¿Quién fue el arquero de Italia cuando ganó el Mundial 2006?', opts: ['Buffon','Cannavaro','Casillas','Barthez'], a: 0 },
      { id: 'd25q4', q: '¿Cuántos mundiales jugó Buffon?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd25q5', q: '¿Quién fue el arquero de Alemania en el Mundial 2014?', opts: ['Neuer','Kahn','Lehmann','ter Stegen'], a: 0 },
      { id: 'd25q6', q: '¿Quién fue el arquero de Francia cuando ganó en 1998?', opts: ['Barthez','Lloris','Mandanda','Coupet'], a: 0 },
      { id: 'd25q7', q: '¿Cuántos mundiales jugó el portero Antonio Carbajal de México?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd25q8', q: '¿Quién fue el arquero de Argentina en el Mundial 1986?', opts: ['Fillol','Pumpido','Goycochea','Almeyda'], a: 1 },
      { id: 'd25q9', q: '¿Quién atajó los penales en la semifinal de Qatar 2022 (Argentina)?', opts: ['Rulli','Dibu Martínez','Musso','Armani'], a: 1 },
      { id: 'd25q10', q: '¿Qué arquero ganó el Guante de Oro en más Mundiales?', opts: ['Buffon','Neuer','Casillas','Sepp Maier'], a: 1 },
    ]
  },
  {
    day: 26, theme: 'Los Goleadores del Mundial',
    questions: [
      { id: 'd26q1', q: '¿Quién es el máximo goleador histórico de los Mundiales?', opts: ['Pelé','Ronaldo Nazário','Klose','Messi'], a: 2 },
      { id: 'd26q2', q: '¿Cuántos goles marcó Klose en Mundiales?', opts: ['13','15','16','17'], a: 2 },
      { id: 'd26q3', q: '¿Quién fue el máximo goleador del Mundial Brasil 2014?', opts: ['Messi','Neymar','James Rodríguez','Müller'], a: 3 },
      { id: 'd26q4', q: '¿Cuántos goles hizo James Rodríguez en Brasil 2014?', opts: ['4','5','6','7'], a: 2 },
      { id: 'd26q5', q: '¿Quién fue el máximo goleador del Mundial Rusia 2018?', opts: ['Kane','Messi','Lukaku','Griezmann'], a: 0 },
      { id: 'd26q6', q: '¿Cuántos goles marcó Harry Kane en Rusia 2018?', opts: ['4','5','6','7'], a: 2 },
      { id: 'd26q7', q: '¿Quién fue el máximo goleador del Mundial 1998?', opts: ['Ronaldo','Suker','Batistuta','Zidane'], a: 1 },
      { id: 'd26q8', q: '¿Cuántos goles marcó Ronaldo Nazário en el Mundial 2002?', opts: ['6','7','8','9'], a: 2 },
      { id: 'd26q9', q: '¿Quién fue máximo goleador en Alemania 2006?', opts: ['Ronaldo','Zidane','Klose','Rooney'], a: 2 },
      { id: 'd26q10', q: '¿Cuántos goles marcó Mbappé en Qatar 2022?', opts: ['6','7','8','9'], a: 2 },
    ]
  },
  {
    day: 27, theme: 'Las Grandes Sorpresas',
    questions: [
      { id: 'd27q1', q: '¿Qué selección eliminó a Italia en el Mundial 2018 (previa)?', opts: ['Suecia','Irlanda','Portugal','Grecia'], a: 0 },
      { id: 'd27q2', q: '¿Qué selección venció a Alemania en la primera fase de Qatar 2022?', opts: ['Arabia Saudita','Japón','Camerún','Costa Rica'], a: 1 },
      { id: 'd27q3', q: '¿Qué selección africana llegó a semis en Qatar 2022?', opts: ['Nigeria','Senegal','Marruecos','Ghana'], a: 2 },
      { id: 'd27q4', q: '¿Qué sorpresa protagonizó Argentina en su debut en Qatar 2022?', opts: ['Ganó 5-0','Perdió contra Arabia Saudita','Empató con México','Perdió con Polonia'], a: 1 },
      { id: 'd27q5', q: '¿Qué resultado hizo Senegal en su debut de Qatar 2022?', opts: ['Ganó a Qatar','Perdió con Ecuador','Empató con Países Bajos','Perdió con Senegal'], a: 0 },
      { id: 'd27q6', q: '¿Qué debutante del Mundial 2026 viene de CONCACAF?', opts: ['Curazao','Jamaica','Haití','Saint Kitts'], a: 0 },
      { id: 'd27q7', q: '¿Cuándo fue la última vez que Escocia fue al Mundial antes de 2026?', opts: ['1990','1994','1998','2002'], a: 2 },
      { id: 'd27q8', q: '¿Cuándo fue la última vez que Canadá fue al Mundial antes de 2026?', opts: ['1982','1986','1990','1994'], a: 1 },
      { id: 'd27q9', q: '¿Qué selección amazona clasifica por primera vez al Mundial 2026?', opts: ['Haití','Bolivia','Cabo Verde','Curazao'], a: 0 },
      { id: 'd27q10', q: '¿Uzbekistán debuta en un Mundial en 2026. ¿Quién es su técnico?', opts: ['Cannavaro','Capello','Benitez','Mancini'], a: 0 },
    ]
  },
  {
    day: 28, theme: 'Penales y Momentos Icónicos',
    questions: [
      { id: 'd28q1', q: '¿Quién falló el penal definitivo para Italia en el Mundial 1994?', opts: ['Baresi y Maldini','Baggio','Donadoni','Costacurta'], a: 1 },
      { id: 'd28q2', q: '¿Quién fue expulsado en la final del Mundial 2006?', opts: ['Materazzi','Zidane','Ronaldo','Cannavaro'], a: 1 },
      { id: 'd28q3', q: '¿Qué ocurrió en el famoso "Partido del Siglo" (Italia vs Alemania 1970)?', opts: ['Italia ganó 4-3','Alemania ganó 4-3','Terminó en empate','Alemania ganó en penales'], a: 0 },
      { id: 'd28q4', q: '¿Cuántos penales atajó el "Dibu" Martínez vs Países Bajos en cuartos de Qatar?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd28q5', q: '¿Quién anotó el gol de cabeza del título en la final de 2010?', opts: ['Xavi','Iniesta','Villa','Torres'], a: 1 },
      { id: 'd28q6', q: '¿En qué Mundial hubo más penales ejecutados?', opts: ['Qatar 2022','Rusia 2018','Brasil 2014','Alemania 2006'], a: 0 },
      { id: 'd28q7', q: '¿Qué selección no falló ningún penal en Qatar 2022?', opts: ['Argentina','Francia','Marruecos','Croacia'], a: 2 },
      { id: 'd28q8', q: '¿En qué año se jugó la famosa "Batalla de Santiago"?', opts: ['1954','1958','1962','1966'], a: 2 },
      { id: 'd28q9', q: '¿Quién anotó el gol olímpico más famoso en la historia del Mundial?', opts: ['Messi','Maradona','Pelé','Rivelino'], a: 3 },
      { id: 'd28q10', q: '¿Cuál fue el primer Mundial en definirse por penales en la final?', opts: ['México 1986','Italia 1990','USA 1994','Francia 1998'], a: 2 },
    ]
  },
  {
    day: 29, theme: 'Repaso General',
    questions: [
      { id: 'd29q1', q: '¿Qué tres países organizan el Mundial 2026?', opts: ['USA, México, Colombia','USA, México, Canadá','USA, Canadá, Brasil','México, Canadá, Costa Rica'], a: 1 },
      { id: 'd29q2', q: '¿Cuántos equipos clasifican de la fase de grupos en el Mundial 2026?', opts: ['24','28','32','36'], a: 2 },
      { id: 'd29q3', q: '¿Cuándo termina la fase de grupos del Mundial 2026?', opts: ['24 jun','27 jun','30 jun','2 jul'], a: 1 },
      { id: 'd29q4', q: '¿Quién es el campeón del Mundial 2022?', opts: ['Francia','Brasil','Argentina','España'], a: 2 },
      { id: 'd29q5', q: '¿Cuántos mundiales tiene Brasil?', opts: ['3','4','5','6'], a: 2 },
      { id: 'd29q6', q: '¿Uruguay ganó el Mundial en 1930 y...?', opts: ['1938','1946','1950','1958'], a: 2 },
      { id: 'd29q7', q: '¿Quién es el máximo goleador histórico del Mundial?', opts: ['Pelé','Ronaldo','Klose','Messi'], a: 2 },
      { id: 'd29q8', q: '¿En qué grupo está Uruguay en el Mundial 2026?', opts: ['Grupo F','Grupo G','Grupo H','Grupo I'], a: 2 },
      { id: 'd29q9', q: '¿Dónde se juega la final del Mundial 2026?', opts: ['Dallas','Los Ángeles','MetLife Stadium, NJ','Miami'], a: 2 },
      { id: 'd29q10', q: '¿Cuántos mundiales tiene Argentina?', opts: ['2','3','4','5'], a: 1 },
    ]
  },
  {
    day: 30, theme: '¡Maestro Mundialista! — Gran Final',
    questions: [
      { id: 'd30q1', q: '¿Cuántos goles tuvo la final de Qatar 2022 (incluyendo prórroga)?', opts: ['4','5','6','7'], a: 2 },
      { id: 'd30q2', q: '¿Quién fue el mejor portero de Qatar 2022?', opts: ['Lloris','Courtois','Dibu Martínez','Bounou'], a: 2 },
      { id: 'd30q3', q: '¿Cuántos mundiales tiene Francia?', opts: ['1','2','3','4'], a: 1 },
      { id: 'd30q4', q: '¿Cuántos goles marcó Mbappé en el Mundial Qatar 2022 en total?', opts: ['7','8','9','10'], a: 1 },
      { id: 'd30q5', q: '¿El partido inaugural del Mundial 2026 es el...?', opts: ['10 de junio','11 de junio','12 de junio','13 de junio'], a: 1 },
      { id: 'd30q6', q: '¿Cuántos equipos participan en el Mundial 2026?', opts: ['32','40','48','64'], a: 2 },
      { id: 'd30q7', q: '¿En qué ciudad se juega el debut de México en el Mundial 2026?', opts: ['Guadalajara','Monterrey','Ciudad de México','Atlanta'], a: 2 },
      { id: 'd30q8', q: '¿Quién tiene más Balones de Oro?', opts: ['Ronaldo','Messi','Zidane','Ronaldinho'], a: 1 },
      { id: 'd30q9', q: '¿Qué selección ganó más mundiales en total?', opts: ['Argentina','Italia','Alemania','Brasil'], a: 3 },
      { id: 'd30q10', q: '¿Cuántos grupos tiene el Mundial 2026?', opts: ['8','10','12','16'], a: 2 },
    ]
  },
]

export function getDayQuiz(dayNumber) {
  return QUIZ_DAYS.find(d => d.day === dayNumber) || QUIZ_DAYS[0]
}

export function calcQuizPoints(correct) {
  if (correct >= 9) return 3
  if (correct === 8) return 2
  if (correct === 7) return 1
  return 0
}
