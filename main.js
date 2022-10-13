let lists =  [
	{"millimeter": 1, "centimeter": 10, "inch": 25.4, "ft": 304.8, "jd":914.4, "meter": 1000, "kilometer": 1000000}
  ];

//Переменные

  let inputValue = document.getElementById('input-value');
  let inputUnit = document.getElementById('input-unit');
  let outputValue = document.getElementById('output-value');
  let outputUnit = document.getElementById('output-unit');


//Выводим данные из объекта в выпадающий список

let htmlString = "";
for (let key in lists) {
   for (let item in lists[key]) {
	   htmlString +=  `<option value='${lists[key][item]}'> ${item} </option>`;
   }
}

document.getElementById("input-unit").innerHTML = htmlString;
document.getElementById("output-unit").innerHTML = htmlString;


//Проверка на ошибку

inputValue.addEventListener('keyup', function() {
	if (isNaN(inputValue.value)) {
		outputValue.value = "Error!";
	} else {
		showResult();
	}
});


//Ввод и вывод значений 

inputUnit.addEventListener('change', function() {
	inputUnit = document.getElementById('input-unit');
	showResult();
});

outputUnit.addEventListener('change', function() {
	outputUnit = document.getElementById('output-unit');
	showResult();
});


//Формула конвертации в заданное значение

function change() {
	return Math.round(parseFloat(inputValue.value * inputUnit.value / outputUnit.value)*100)/100;
}

function showResult() {
	return outputValue.value = change();
}
