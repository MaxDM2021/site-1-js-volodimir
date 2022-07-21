
// ===== Вариант 1 - создание вручную дом дерева ======

const body = document.querySelector("body")
// create elements
const main = document.createElement("main");
const title = document.createElement("h1");
const figure = document.createElement("figure");
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");


// add atr
// Добавление атрибута через точку
main.id = "main";
title.id = "title";
figure.id = "img-div";
img.id = "image";
img.src = "https://picsum.photos/id/237/200/300";
img. alt = "Michel Legrand conducting his orchestra.";
figcaption.id = "img-caption"

// add textContent
title.textContent = "- Michel Legrand -";
figcaption.textContent = "Michel Legrand conducting his orcherstra.";



// pasr to DOM
// prepend - ставит в самое начало тела (перед скриптом)
body.prepend(main);
main.append(title);
main.append(figure);
figure.append(img);
figure.append(figcaption);



// ===== Вариант 2 - создание с помощью шаблонной строки дом дерева ======

const article = `<article id="tribute-info">
<div id="intro"><p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p></div>
<p><u>Here are some major facts about him:</u></p>
<p>
  <ul class ="fact-list">
   
  </ul>
</p>
<blockquote id="quote">
  <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
  <cite>-- Michel Legrand</cite>
</blockquote>
<hr>
<p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link" href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
</article>`;

main.insertAdjacentHTML("beforeend", article);

// Достучаться до ul можно только после того как задана шаблонная строка, в которой объявлена ul!!
const ul = document.querySelector("ul");


const facts = [
    "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
    "His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.",
    "His sister was a Soprano and a member of the Swingle Singers.",
    "Along his career, he composed more than two hundred film and television scores.",
    "He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.",
    "He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.",
    "He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.",
    "He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.",
  ];


//   Вариант 1 map и join
//   Вариант с применением .join("") - превращает массив в одну строку;
//   const createLiFromArray = (array) => array.map((el) => `<li>${el}</li>`).join("");
//   const list = createLiFromArray(facts);
//   ul.insertAdjacentHTML("beforeend", list);
  
//   console.log(createLiFromArray(facts));

//   Вариант 2 с применением reduce (делает сразу две операции вместо map и join)

const createLiFromArray = (array) => array.reduce((acc, el) => acc + `<li>${el}</li>`, "");

const list = createLiFromArray(facts);
  ul.insertAdjacentHTML("beforeend", list);
  
  console.log(createLiFromArray(facts));
