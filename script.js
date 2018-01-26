/**
*Создание блока "battery" и верхний и нижний контур"
*/
var battery=document.createElement('div');
battery.id='battery';
document.body.appendChild(battery);

/**
*создание краев (начало и конец)
*/
var edge=document.createElement('div');
edge.id='edge';
battery.appendChild(edge);

/**
*Создание плюсового электрода
*/

var plusElectrod=document.createElement('div');
plusElectrod.id='plusElectrod';
battery.appendChild(plusElectrod);
/**
*создание элемента анимации
*/

function animation() {
var partProcent=-10;
var interval=setInterval(function() {
	var part=document.createElement('div');
	part.className='part';
	part.style.marginLeft=partProcent+'px';
	partProcent++;
	battery.appendChild(part);
	console.log(part.length)
	if(partProcent==90){clearInterval(interval);}
	}, 50);};
animation();