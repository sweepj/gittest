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
	
*/
