// Поиск элементов в DOM
document.getElementById('d2'); //найти элемент по его id-атрибуту
document.getElementsByName('myName'); //найти элемент по его name-атрибуту
console.log(document.getElementsByClassName('class1')); //найти элемент по его классу
console.log(document.getElementsByTagName('div')); //найти элементы по имени тега
document.querySelector('.class1'); //найти первый элементы, подходящий под css-селектор
document.querySelectorAll('.class1'); //найти все элементы, подходящие под css-селектор


//Свойства и методы Node


/*
	childNodes; Все прямые потомки узла

	parentNode; Родительский узел

	firstChild; Первый прямой потомок узла
	firstElementChild; Первый прямой элемент потомок узла

	lastChild; Последний прямой потомок узла
	lastElementChild; Последний прямой элемент потомок узла

	previousElementSibling Получить соседний узел, стоящий за текущим(элемент)
	previousSibling Получить соседний узел, стоящий за текущим
	
	nextElementSibling Получить соседний узел, стоящий перед текущим(элемент)
	nextSibling Получить сосдений, стоящий перед текущим

	nodeType тип узла(текст, элемент, комментарий и т.д)
	nodeValue для узлов типа "текст" и "комментарии", хранит их содержимое
	(trim() для работы со строками убирает в начале и в конце пробелы).

	textContent все дочерние текстовые узлы, объединенные вместе.
	document.createElement('элемент'); создание элементов при помощи JS

	appendChild(child) добавить потомка у узла (в конце узла)
	insertBefore(what,before) добавить потомка в узел, перед другим потомком внутри узла

	remove() удалить со страници элемент
	removeChild(child) удалить дочерний узел	
	
	innerHTML html-код содержимое текущего элемента
	outerHTML html-код и элемента и его содержимого	

	style позволяет добавить/удалять/ просматривать css-стили элемента

	tagname -имя тега узла

	getAttribute(name) получить значение атрибута по его имени
	getAttribute(name, value) установить значение атрибута по его имени
	removeAttribute(name) удалить атрибут по его имени
*/


/*
			Примеры

var newDiv = document.createElement('div');

newDiv.textContent = "new DIV!";

container.appendChild(newDiv);
container.insertBefore(newDiv, container.firstChild);

d2.remove();
container.removeChild(d1);
container.innerHTML;
container.innerHTML = "<div>new div</div>"; стереть все и запить новую информацию
сontainer.outerHTML;
*/