/*var a = 5;
var b = 10;

console.log(a + b);*/
/*
a = 'a';
b = false;
c = 'c';
d = false;
e = false;

console.log(a && b && c && d && e);

console.log(a && b || c && d || e);

console.log(a || b && c && d || e);

console.log(a || b || c && d && e);

console.log(a && b && c || d && !e);

console.log(a && b && c && d || e);

console.log(a && b && !c && d || e);

console.log(a && !b && c || d || e);

console.log(!a && !b && c || d || e);

console.log(a || b && !c || d || e);

console.log(a && !b && c || !d || e);

*/
/*
var a = '1';

var b = Number (a);

console.log(typeof(b));

if (b === 1) {
    console.log('correct');
}
else {
    console.log('incorrect');
}
*/
/*
var a = 3;
var b = 6;

if (a <= 1 && b >= 3) {
    var c = a + b;
    console.log(c);
}
else {
    var c = a - b;
    console.log(c);
}
*/
//Первая задача
/*
for (i = 1; i <= 10; i++) {
    var a = 3 * i;
    document.write ('3*' + i + '=' + a + '</br>');
}

//Вторая задача


var userNum = prompt ('Введите целое положительное число');
var num = Number(userNum);
var type = typeof (num);


function summa (userNum) {
    var sum = 0;
    for (i = 1; i <= userNum; i++) {
    sum += i;
    }
    console.log(sum);
}

if (type == 'number' && userNum > 0 && userNum % 1 == 0) {
    summa(userNum);
}  
    else {
        alert ('ошибка, введите целое положительное число');
    }


//Третья задача

var a = prompt('введите число');
var b = prompt('введите ещё одно число');


function getMinNumbers (a,b) {
    if (a < b) {
        alert(a);
    }
    else {
        alert(b);
    }
}

getMinNumbers (a,b);
*/
/*
var a = ['1'];
var b = [1];

var result = a.concat(b);

var c = prompt('enter number');
*/
/*
var numbers = [];
var result = 0;

while(true) {
    var value = prompt('Enter your number');
    if(value === '' || value === null || isNaN(value)) break;
    numbers.push(+value);
}
*/
/*
for(var i = 0; i < numbers.length; i++){
    result += numbers[i];
    console.log(numbers[i]);
}
*/
/*
numbers.forEach(item => result += item);

console.log(result);
*/

// Zadacha 2 --------------------------
/*
var arr = [1, 3, 'a'];

var find = (arr, item) => {
  if (arr) 
   //  var value = arr.indexOf(item);
   //  console.log(value);
   console.log(arr.indexOf(item));
}


find(arr, 'a');
*/
/*
var words = ['asdasd', 'ggggg', 'dd', 'fff', 'aaa'];

var result = words.filter(item => {
    return item.length === 3;
});

console.log(result);
*/
/*
var a = ['1', '2'];
var b = [
    [1,2,3],
    [2,3,4],
    [3,4,5]
];

b[1].push('new element');

console.log(b[1].length);
console.log(b[1].filter (item => item > 2));
*/

/* var testArr = ['test1', 'test2'];

testArr.push('new element');

console.log(testArr);

testArr.splice(-2, 1, 'banani');
console.log(testArr);
/*
testArr [testArr.length - 3] = 'help';
console.log(testArr);
*/
/*
alert(testArr.shift(0));
console.log(testArr); */
/*
var a = 0;
var arr = [1, 2, 3, 5, 6, 8, 7];

var result = arr.filter(item => item % 2 == 1 );

console.log(result);
*/

var a = 0;
var arr = [1, 9, 3, 7, 5, 0, 2];

var result = arr.filter((item, id) => {
    if(id % 2 && item % 2) {
        a++;
    }
});

console.log(a);

