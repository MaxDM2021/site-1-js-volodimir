const list = document.querySelector(".list");

const createLi = (count) => {
    for (let i = 0; i < count; i += 1) {
    const li = document.createElement("li");
    li.textContent = `${i}`;
    list.append(li);
    }
}

createLi(10);

// Нужно удалить 1-й, 4-й, 7-й -элементы
// Вариант 1 - с помощью фильтра
// Преврящаем html массив в обычный массив с помощью спред-оператора [...], т.к. в нем больше свойст для работы
// const filteredLi = [...list.children].filter((li, index) => index !== 1 || index !== 4 || index !==7);
// Ul-остается, все потомки удаляются
// list.innerHTML = "";
// list.append(...filteredLi);

// Вариант 2 - с помощью querySelectorAll  и forEach 

const children = document.querySelectorAll("li");
children.forEach((el, i) => {
    if (i === 1 || i === 4 || i === 7)  {
        el.remove()
    }
});

console.log(children);


// Добавление элементов

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const title = document.createElement("h1");
title.textContent = "Hello World!!";
// Клонируется tytle со всем контентом
const titleCopy = title.cloneNode(true);
overlay.append(title);
modal.append(titleCopy);