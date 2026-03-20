const allStudentQuotes = [
  // Frases de Familias
  { level: "ESO", category: "Frases de Familias", text: "«Hola, le escribo porque mi hijo dice que no tiene deberes para mañana y quería confirmarlo.»" },
  { level: "ESO", category: "Frases de Familias", text: "«Buenas, le dejamos el portátil sin cargar y la batería duró lo que duró. ¿Puede repetirle lo que perdió?»" },
  { level: "Bachelor", category: "Frases de Familias", text: "«Le dije a mi hija que si el wifi del cole falla, el trabajo no es su responsabilidad, ¿no?»" },
  { level: "ESO", category: "Frases de Familias", text: "«No trajo la chaqueta porque llovía y se manchó bajando desde La Cuesta, no es por molestar.»" },
  { level: "ESO", category: "Frases de Familias", text: "«En casa estudia un montón, pero tiene muy mala memoria. Le entra y se le va.»" },
  { level: "Bachelor", category: "Frases de Familias", text: "«Nos fuimos el puente y no vio las tareas del Classroom. ¿Tiene plazo extra para entregarlo?»" },
  { level: "ESO", category: "Frases de Familias", text: "«Nos parece que la nota de Qualitas no refleja su esfuerzo real. ¿Podemos hablar?»" },
  { level: "ESO", category: "Frases de Familias", text: "«Es que el niño dice que el profesor del año pasado no lo bajaba de notable... no sé qué habrá cambiado.»" },

  // Frases de Compañeros Docentes
  { level: "ESO", category: "Compañeros Docentes", text: "«Hoy en guardia me tocaron los de 2º de ESO solos en el patio. Han sido los 50 minutos más largos de mi vida.»" },
  { level: "Bachelor", category: "Compañeros Docentes", text: "«¿Has visto lo del comunicado en Qualitas? Nos han añadido otra reunión de coordinación el jueves.»" },
  { level: "ESO", category: "Compañeros Docentes", text: "«Oye, el wifi hoy ni ha arrancado en mi clase. Acabé dando la clase en la pizarra como en el año 2003.»" },
  { level: "ESO", category: "Compañeros Docentes", text: "«Tres portátiles sin batería, dos con el teclado roto y uno que no se conecta al wifi. Y así todos los días.»" },
  { level: "Bachelor", category: "Compañeros Docentes", text: "«Los de Bachillerato llevan el chándal puesto dentro del aula y no hay quien les diga nada ya.»" },
  { level: "ESO", category: "Compañeros Docentes", text: "«En la cafetería ya no quedan bocadillos de queso a las 11. Como llegues tarde al recreo, agua.»" },
  { level: "ESO", category: "Compañeros Docentes", text: "«Pues el mismo grupo conmigo es otro, la verdad. No sé qué hora les tienes tú que vienen tan alterados.»" },
  { level: "Bachelor", category: "Compañeros Docentes", text: "«Este año no acabo el temario ni aunque empiece en septiembre y no pare hasta junio.»" },

  // Frases de Alumnos: El día a día
  { level: "ESO", category: "Frases de Alumnos", text: "«Profe, el wifi se ha caído y no me ha dejado subir la tarea. Se lo juro, mírelo en el historial.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Mi portátil se quedó sin batería a medias del trabajo. ¿Puedo entregarlo mañana?»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Profe, ¿esto entra en el examen o es solo para entenderlo?»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«¿Lo vas a subir al Classroom? Es que así lo repaso luego en casa.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Profe, ¿me firmas para bajar a conserjería? Es que dejé el bocadillo abajo.»" },
  { level: "Bachelor", category: "Frases de Alumnos", text: "«No pude entrar al Classroom desde casa porque el wifi de mi vecino no llegaba bien a mi cuarto.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Es que mis padres no miran el Qualitas casi nunca, así que si pone algo ahí no se van a enterar.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Profe, el timbre ha sonado ya, ¿no?»" },

  // Frases de Alumnos: Excusas y negociaciones
  { level: "ESO", category: "Frases de Alumnos", text: "«Perdí la guagua y llegué tarde, pero es que la de las 7:45 no vino.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Lo hice en el portátil pero se me borró cuando se cerró solo por la batería.»" },
  { level: "Bachelor", category: "Frases de Alumnos", text: "«Profe, ¿con un 4,8 no podrías redondear? Es que si no, suspendo la evaluación.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«El de al lado habló y yo me reí, pero el culpable de verdad es él, no yo.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«No traje el libro porque pensé que hoy no tocaba esta asignatura.»" },
  { level: "Bachelor", category: "Frases de Alumnos", text: "«Profe, ¿esto en la EBAU cae mucho? Porque si no, prefiero centrarme en lo importante.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Yo no copié de Internet, es que coincidió que pensamos lo mismo.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Me dejé el trabajo hecho en mi casa. ¿Lo puedo mandar ahora por el Classroom desde el móvil?»" },

  // Frases de Alumnos: Clásicas irresistibles
  { level: "ESO", category: "Frases de Alumnos", text: "«¿Puedo ir al baño? Es urgente de verdad.» (Vuelve 15 minutos después)." },
  { level: "ESO", category: "Frases de Alumnos", text: "«No traje bolígrafo, ¿me dejas uno? (Y nunca lo devuelve).»" },
  { level: "Bachelor", category: "Frases de Alumnos", text: "«¿Puede repetir esa última parte? Es que el portátil tardó en encender y me perdí el principio.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«A los de la clase de enfrente les puso menos deberes que a nosotros, profe. No es justo.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Profe, ¿ponemos un Kahoot hoy? Así repasamos de forma más dinámica.»" },
  { level: "Bachelor", category: "Frases de Alumnos", text: "«Me quedé sin batería a mitad del examen online. No es culpa mía que el enchufe del aula no llegara.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«¿Puede decirle a los de conserjería que me dejen subir? Dejé la chaqueta del uniforme arriba.»" },
  { level: "ESO", category: "Frases de Alumnos", text: "«Profe, si Don Bosco decía que lo importante es la alegría, ¿no podríamos saltarnos este tema?»" }
];

let studentQuotes = [];
let currentCardIndex = 0;
let scoreNoTengo = 0;
let scoreTengo = 0;
let scoreESO = 0;
let scoreBachelor = 0;
let cards = [];

const MAX_CARDS_PER_GAME = 8; // Barajamos 8 cartas en cada inicio de partida de las 40 disponibles.

// DOM Elements
const screens = {
  start: document.getElementById('start-screen'),
  game: document.getElementById('game-screen'),
  result: document.getElementById('result-screen')
};

const cardsContainer = document.getElementById('cards-container');
const scoreNoTengoEl = document.getElementById('score-zen'); 
const scoreTengoEl = document.getElementById('score-cap');

// Initialization
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', () => {
  // Reiniciar variables
  scoreTengo = 0;
  scoreNoTengo = 0;
  scoreESO = 0;
  scoreBachelor = 0;
  scoreTengoEl.innerText = 0;
  scoreNoTengoEl.innerText = 0;
  studentQuotes = [];
  currentCardIndex = 0;
  switchScreen('start');
});
document.getElementById('btn-reject').addEventListener('click', () => swipeCard('left'));
document.getElementById('btn-accept').addEventListener('click', () => swipeCard('right'));

function startGame() {
  switchScreen('game');
  
  // Barajar y tomar un número selecto de cartas
  const shuffled = [...allStudentQuotes].sort(() => 0.5 - Math.random());
  studentQuotes = shuffled.slice(0, MAX_CARDS_PER_GAME).map((item, i) => ({ 
    id: i, 
    text: item.text, 
    category: item.category,
    level: item.level 
  }));
  
  renderCards();
}

function switchScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function renderCards() {
  cardsContainer.innerHTML = '';
  studentQuotes.forEach((quote, index) => {
    const card = document.createElement('div');
    card.className = 'swipe-card';
    card.dataset.index = index;
    
    card.style.transform = `scale(${1 - index * 0.05}) translateY(${index * -15}px)`;
    card.style.zIndex = studentQuotes.length - index;

    card.innerHTML = `
      <div class="card-number">${index + 1} / ${studentQuotes.length}</div>
      <div class="card-category">${quote.category}</div>
      <div class="card-text">${quote.text}</div>
      <div class="swipe-indicator indicator-left">YO NO</div>
      <div class="swipe-indicator indicator-right">SÍ LO TENGO</div>
    `;
    card.dataset.level = quote.level;

    cardsContainer.appendChild(card);
  });

  cards = Array.from(cardsContainer.children);
  if (cards.length > 0) {
    addDragLogic(cards[0]);
  }
}

// Drag Logic 
function addDragLogic(card) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;

  const threshold = window.innerWidth * 0.25;

  const onPointerDown = (e) => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
    card.style.transition = 'none';
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const currentY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    
    offsetX = currentX - startX;
    offsetY = currentY - startY;

    const rotate = offsetX * 0.05;
    card.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;

    const indLeft = card.querySelector('.indicator-left');
    const indRight = card.querySelector('.indicator-right');
    
    if (offsetX > 0) {
      indRight.style.opacity = Math.min(offsetX / (threshold/2), 1);
      indLeft.style.opacity = 0;
    } else {
      indLeft.style.opacity = Math.min(Math.abs(offsetX) / (threshold/2), 1);
      indRight.style.opacity = 0;
    }
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    isDragging = false;
    card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';

    if (offsetX > threshold) {
      performSwipe(card, 'right');
    } else if (offsetX < -threshold) {
      performSwipe(card, 'left');
    } else {
      card.style.transform = 'translate(0px, 0px) rotate(0deg)';
      card.querySelector('.indicator-left').style.opacity = 0;
      card.querySelector('.indicator-right').style.opacity = 0;
    }
  };

  card.addEventListener('mousedown', onPointerDown);
  card.addEventListener('touchstart', onPointerDown, {passive: true});
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('touchmove', onPointerMove, {passive: true});
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchend', onPointerUp);

  card._cleanup = () => {
    card.removeEventListener('mousedown', onPointerDown);
    card.removeEventListener('touchstart', onPointerDown);
    window.removeEventListener('mousemove', onPointerMove);
    window.removeEventListener('touchmove', onPointerMove, {passive: true});
    window.removeEventListener('mouseup', onPointerUp);
    window.removeEventListener('touchend', onPointerUp);
  };
}

function swipeCard(direction) {
  if (currentCardIndex >= studentQuotes.length) return;
  const currentCard = cards[currentCardIndex];
  performSwipe(currentCard, direction);
}

function performSwipe(card, direction) {
  if(card._cleanup) card._cleanup();

  const multiplier = direction === 'right' ? 1 : -1;
  const throwOut = window.innerWidth * 1.5;
  
  card.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
  card.style.transform = `translate(${throwOut * multiplier}px, ${throwOut * 0.2 * multiplier}px) rotate(${45 * multiplier}deg)`;
  card.style.opacity = '0';

  if (direction === 'right') {
    scoreTengo++;
    scoreTengoEl.innerText = scoreTengo;
    
    // Tracking level score for the "guesser"
    if (card.dataset.level === 'ESO') scoreESO++;
    if (card.dataset.level === 'Bachelor') scoreBachelor++;
  } else {
    scoreNoTengo++;
    scoreNoTengoEl.innerText = scoreNoTengo;
  }

  setTimeout(() => {
    card.remove();
    nextCard();
  }, 300);
}

function nextCard() {
  currentCardIndex++;
  
  if (currentCardIndex < studentQuotes.length) {
    const nextCard = cards[currentCardIndex];
    addDragLogic(nextCard);
    
    for(let i = currentCardIndex; i < cards.length; i++) {
        const offsetIdx = i - currentCardIndex;
        const c = cards[i];
        c.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        c.style.transform = `scale(${1 - offsetIdx * 0.05}) translateY(${offsetIdx * -15}px)`;
    }
  } else {
    endGame();
  }
}

function endGame() {
  setTimeout(() => {
    switchScreen('result');
    calculateProfile();
  }, 500);
}

function calculateProfile() {
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');
  const resultEmoji = document.getElementById('result-emoji');

  let profileTitle = '';
  let profileDesc = '';
  let profileEmoji = '';

  // Main profile logic
  if (scoreTengo >= scoreNoTengo + 3) {
    profileEmoji = '🧲';
    profileTitle = 'Imán de Clichés';
    profileDesc = '¡Sobrevives a una auténtica sitcom docente! Eres un coleccionista nato de la fauna típica del colegio. Nunca te aburres, eso seguro.';
  } else if (scoreNoTengo >= scoreTengo + 3) {
    profileEmoji = '🦄';
    profileTitle = 'Oasis Educativo';
    profileDesc = '¿Seguro que das en este planeta? Tienes tanta suerte de no aguantar los dramones diarios que sospechamos que enseñas en una dimensión inexplorada de paz irreal.';
  } else {
    profileEmoji = '⚖️';
    profileTitle = 'El Héroe del Equilibrio';
    profileDesc = 'Experimentas lo mejor de ambos mundos: te han colado de todo, pero también logras mantener la armonía. Eres la viva representación de la paciencia docente.';
  }

  // Course guesser logic (The "Joke")
  let guessMsg = "";
  if (scoreTengo === 0) {
    guessMsg = "<br><br><b>Adivino de curso:</b> No has marcado nada... ¿Seguro que eres profe o estás de permiso?";
  } else if (scoreESO > scoreBachelor) {
    guessMsg = "<br><br><b>Adivino de curso:</b> Por tus respuestas... huelo a hormonas en plena ebullición. Se nota que pasas muchas horas en la <b>ESO</b>. ¡Mucho ánimo con esos Kahoot!";
  } else if (scoreBachelor > scoreESO) {
    guessMsg = "<br><br><b>Adivino de curso:</b> Ese aroma a café, Monster y desesperación pre-EBAU no engaña. Mi bola de cristal dice que lo tuyo es el <b>Bachillerato</b>. ¡Suerte con el temario!";
  } else {
    guessMsg = "<br><br><b>Adivino de curso:</b> Estás en todas partes. Un poco de ESO por aquí, un poco de Bachillerato por allá... Eres el comodín del centro, ¡el docente 360!";
  }

  resultEmoji.innerText = profileEmoji;
  resultTitle.innerText = profileTitle;
  resultDesc.innerHTML = profileDesc + guessMsg;
}
