function calculateSum(num1, num2) {
	let result = num1 + num2;
	alert(result);
}

calculateSum(5, 3);
calculateSum(100, 1);

function getDiscount() {

let price = +prompt('Яка ціна товару?');

let discount = +prompt('Яка ваша знижка у % ?');

let result = price-(price * discount /100)-0.01;

alert ('Ціна зі знижкою!Всього ' + result + 'грн.');
}

getDiscount();


let names = ["boss", "hacker", "cat"];

function addlogin(){
	
	let login = prompt('Ваш логін');
	
	names.push(login);
	
	alert(names);
}

addlogin();