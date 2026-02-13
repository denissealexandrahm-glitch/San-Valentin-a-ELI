const mensajes =[
  "Amo cada pequeña cosa que te hace ser tú",
  "Tu y yo... ¿Nosotras?",
  "Siempre pienso en ti, linda ;)",
  "Te quiero y adoro mucho, estrellita.",
  "Cerca o lejos, tienes todo mi corazón, cariño y apoyo.",
  "Te amare y cuidare...y te protegere! Y es que hasta mi vida te doy! Jajsjd ILOVEYOU   -Virgen/Adolescent's Orquesta",
  "Ya no llores no me importa tu pasado...si yo te amooooo. Perdoname a mi por llegar tarde... a lo que Dios me han mandado    -Virgen/Adolescent's Orquesta",
  "Te puedo yo jurar ante un altar mi amor sincero. A todo el mundo le puedes contar... que si te quierooooooo",
  "Si supieras que me muero por tenerte junto a mi, ya no puedo guardar este secreto... -El Ritmo de mi corazon/ Grupo 5"
];

const boton = document.getElementById("btnMensaje");
const texto = document.getElementById("mensajeTexto");

// 1. Creamos un índice para saber por qué mensaje vamos
let indiceActual = 0; 

boton.onclick = function () {
    // 2. Mostramos el mensaje en la posición del índice
    texto.textContent = mensajes[indiceActual];

    // 3. Aumentamos el índice para el próximo clic
    indiceActual++;

    // 4. Si llegamos al final del array, volvemos a empezar desde 0
    if (indiceActual >= mensajes.length) {
        indiceActual = 0;
    }
    
    // Si quieres que sigan saliendo corazones, llama a tu función aquí:
    crearCorazon(); 
};


function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💗";
  corazon.style.position = "fixed";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.top = "100vh";
  corazon.style.fontSize = "20px";
  corazon.style.animation = "subir 3s linear";
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 3000);
}

setInterval(crearCorazon, 800);



const mensajeTexto = [
  "KOTTAKI_YUKI : Elina, la verdad te llevo conociendo ya desde hace semana y media, pero la verdad te agradezco muchísimo lo que me has ayudado, la verdad había llegado a un punto donde pensaba en parar de hacer contenido, pero cuando parte de la comunidad de Kira me invitó a jugar You ❌ My Work Of Art, y que te hallan llamado para verme hacer a King, y que me hallas ayudado haciéndome parte del elenco con un personaje tan grande e importante y lindo u como me identifico con King, es lo que agradezco enserió muchísimo, que halla llegado la comunidad, que me hallan acogido y de paso que me apoyen cada que hago algo de contenido y directos es increíble, tú me devolviste las ganas de seguir haciendo lo que hago desde hace 11 años, y quiero que sepas que definitivamente eres y serás una de mis mejores amigas y que tienes todo mi apoyo para lo que sea, gracias por todo y te quiero" ,
  "BLUEBERRY 🫐 :Bueno algo que siempre quise decirte, es que te admiro mucho y te tengo mucho aprecio, aunque no hablemos seguido las pocas veces que platicamos me cuentas sobre como estuvo tu dia y la neta te admiro porque tu solita te sacas adelante, te esfuerzas mucho y eso es mucho de que admirar. Te admiro bastante porque a pesar de las dificultades siempre tratas de ver todo positivo, amo tu paciencia, amo como te esfuerzas cada dia aunque tengas dificultades.",
  "KAI ☘️★ :De verdad eres una persona que admiro mucho, eres muy linda y aunque estes muy ocupada siempre interactuas con nosotros, muchas gracias por todo",
  "EMI 🦊🤍 : Elina eres una gran persona, que existiera you ❌ my work of art fue algo que me hizo sentir feliz, ademas usted fue esa persona que me ayudó a no sentirme sola, se lo agradezco mucho. Hizo y sigue haciendo un muy buen trabajo, adoro lo que hace y es muy buena en ello. Aprecio mucho su trabajo y a usted, tqm.",
  "DYDDESA 🤓 : No soy muy buena expresando lo que siento, pero quiero empezar diciendo: gracias. Gracias por absolutamente todo el esfuerzo y el amor que pones en cada dibujo y en cada dinámica. Gracias por tomarte el tiempo de ver nuestros videos y por intentar responder siempre a nuestras preguntas. No miento cuando digo que cuando te conocí a ti y a tu novela, cambio mi vida, se hizo mejor... Siempre espero con ansias un mensaje tuyo, porque uno solo basta para hacerme inmensamente feliz. Gracias por todo lo que haces :3 eres una persona maravillosa y talentosa que ha logrado formar una familia increíble y muy grande. Sé que siempre habrá tropiezos, momentos difíciles, cansancio o dudas... pero aquí estaremos, siempre vamos a estar aquí para ti. Se te quiere muchísimo, y de verdad hay mucho más detrás de esto pero no puedo expresarlo solo con palabras... <3",
  "AMYSS: Tu novela ha sido la salvacion de varios ante el aburrimiento, depresion y entre mas cosas, se te agradece por ello. Ademas que en tu canal se siente como hablar con una amiga y cura el amiga.",
  "🐺🦉:Eli!, eres una persona maravillosa!!, creativa y me sorprendes cada día más ✨💗, me alegro de haberte conocido, de haber compartido contigo 💕✨, te quiero muchísimo ♥, nunca te rindas🥰, eres muy talentosa!!!, sigue así!!💌   Att:Nani_Galaxia!!! ❤️‍🩹",
  "†valkiria† : HOLI JEFA! JAJAJAJAJA Este mensajito se lo dedico así bien bonito por qué es alguien que aprecio y amo bastante, tanto como una figura a seguir, como una amiga. Y no se por donde empezar la verdad JAJAJA Primero agradecerle por tantas cosas que he logrado gracias a usted, yo creí que sería una fan más de Esteban del montón JAJAJAJ Y ahora estoy aquí siendo parte de esta bella familia, siendo parte del equipo y 2da jefecita JAJAJA  Quisiera hacer más cosas por usted realmente, usted vale muchísimo créame, usted es bastante fuerte, a luchado, trabaja, nos da de comer, nos aguanta... JAJAJA Y por parte mía y de la comunidad un enorme gracias y bellos deseos a ti 🫂🩷  Que el camino que este adelante sea igual de bello que ahora, no te sientas mal por sentir algo humano. 🫂🩷 Recuerde querida Elina, como amiga y como 2da jefecita en la comunidad, un besote grandote y mis más buenos deseos para ti, las palabras no son suficientes para decirte lo mucho que agradezco estar en esta comunidad junto con usted. 💪🩷ERES GRANDE LEONA, MENEA LA CHAPA!      Atte: valkisita",
  "●☆SHUMITSU☆●(🌷) : Holitaaa Elina, te sigo desde antes de que la novela siquiera tuviera la voz de Esteban, cuando apenas estaba en la parte del club de artes. Desde entonces ya era tu fan, incluso antes de que el proyecto creciera tanto.  Quiero decirte que admiro muchísimo tu trabajo. Conocer tu novela fue de las mejores cosas que me han pasado. Más que una novela visual, para mí fue un lugar seguro. En un momento en el que me sentía muy sola y triste, estaba tan mal y en mis perores momentos donde solo podia refugiarme con la novelas ya que el 2025 fue mi peor año, perdí amistades y estuve case 1 años con amistades toxicas y una relación nd que ver, además de otros temas sensibles, estaba muy sola y hasta deseaba desaparecer ya que no soportaba ese dolor, tu creación osea tu novelita me dio compañía y alegría ya que podía jugarla por horas sin casarme y fue  algo a lo que aferrarme. ☆☆ Gracias por todo el esfuerzo que pones en cada detalle y a tus personajes. Se nota el amor que le tienes a lo que haces. Formar parte del fandom ha sido una de las experiencias más bonitas para mí, y jamás me arrepentiré de ser tu fan. Te quiero y te admiro mucho. Eres un gran ejemplo para mí y me inspiras muchooooooo. ▪︎▪▪︎ Eres una persona increíble incluso  me acuerdo que me entre a el canal de WhatsApp solo por que si no esperaba mucho..pero wow no me arrepiento cuando llegaba cansada a casa sin ganas de más ver los mensajes de otros fan y sus bromas me hicieron reír tanto y sentirme no tan mal de mi vida, ADEMASSSS ignore los malos comentarios y fans tóxicos que exigen cosas, ignorelos, con ellos nada que ver...son pendejos simplemente por naturaleza, usted es perfecta, es linda, usted es usted ¿si?😼 ○ ♡ EN fin. Ajjajak ,el famdon, yo y su hermosa esposa Ale estamos para usted y la queremos muchísimo y nunca pero nunca me arrepentiré de verla conocido por sus videos de mychael😼😼🌸🌸🌸🌸🌸🌸. EN FIN FELIZ DIA DE LA AMISTAD Y EL AMOR 😃☝️🩷🩷🌷🌷🌸🌸🌸.",
"SARITA💗 : JEJE si lees esto quiero decirte que eres la mejor y que tu novela visual es muy especial para mi enserio gracias por crear algo tan increíble algo que desde el inicio súpe que iba a ser mi novela visual favorita no sabes cuanto admiro el esfuerzo que se ve en cada dibujo y no solos admiro tu esfuerzo si no también como tratas a tu fandom con tanto amor y cariño pero bueno como dije no soy buena con las palabras pero quiero que sepas que te quiero mucho y aunque suene raro tu novela visual me iso sentir mejor en mi momento de crisis y tu fandom y tu me an sacado risas en mi momento malos 💗feliz día del amor y la amistad espero que la pases bien💗",
"{🌺🎻}: No suelo ser mucho de palabras pero esto va con mucho cariño... No sabes el gran aprecio que le tengo a la novela y a usted, eli, cada vez que estoy triste o aburrida, siempre llegas tú a hacernos mejor el dia. No sabes lo mucho que admiro su trabajo, no solo de la novela, sino el esfuerzo que haces por hacernos sentir mejor cada día, se siente como si habláramos en llamada pero sin estar en llamada JAJAJA  Desde el día que conocí la novela, sentí como si hubiera visto el cielo... De corazón le pido que nunca se vaya a rendir por más complicado que se vuelva todo, tienes mi apoyo cada que lo necesites, la quiero mucho muchito jefecita :'3💗 Usted y ale han hecho que mis días no sean tan malos últimamente, son unas grandes amigas para mi hasta el punto de verlas como unas hermanas... Desde el día que empeze a subir dibujos sobre la novela, fue lo mejor que he podido hacer gracias a usted, eli, tenía miedo que me llegaran a juzgar por lo rarito que dibujo pero usted me causó una gran seguridad y me arme más de valor a ver lo mucho que a usted la ponía ver como su comunidad, su familia hacia ese tipo de cosas por usted... :'p  Como no tengo más por decir, lo dejaré hasta aqui, gracias por su atención🕴💕.",
"ALE ⭐️: Hola de nuevo, cari... espero que este detalle te haya gustado, se que no es mucho pero realmente queria darte algo por esta fecha...queria que te animaras y recordaras que te quiero, que todos te queremos de hecho. Tengo mucho de que agradecerte, el como me aconsejas, como me demuestras apoyo, tu atencion, tu amistad mas sincera, eso entre muchas cosas mas. Tambien cabe decir que te admiro demasiado, eres una gran persona, alguien realmente muy fuerte y dedicada, se que aveces tienes tus momentos bajos pero siempre tratas de estar bien, eso es mucho de que admirar. Adore tu proyecto/novela visual desde el primer instante, apenas iba iniciando y al ver que era una total maravilla, desee con todas mis ganas que se hiciera mas conocido y tuviera mucho mas apoyo, y ahora mira! Realmente me pone muy feliz que You My Work Of Art haya tenido tanto exito, estoy tan orgullosa de ti... TE QUIERO, AMO Y ADORO, MI ESTRELLITA. "
];

let indice = 0;



function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje-dinamico");
  mensaje.textContent = mensajeTexto[indice];

  indice++;
  if (indice >= mensajeTexto.length) {
    indice = 0;
  }
}
