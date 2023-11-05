import './index.scss';


// Задача 13.1
const task1 = document.querySelector('.task-1');
const input1 = task1.querySelector('#input-1');
const button1 = task1.querySelector('.btn-1');
const result1 = task1.querySelector('.result-1');

button1.addEventListener("click", () => {
  const phoneNumber = input1.value;

  let result = 'Некорректно введен номер. Попробуйте снова';

  let onlyNumbers = phoneNumber.match(/\d/g).join('');

  const numberLengthRegEx = /^.{11}$/;

  if (numberLengthRegEx.test(onlyNumbers)) {
    if (onlyNumbers[0] === '7' || onlyNumbers[0] === '8') {
      result = '+7' + onlyNumbers.slice(1);
    }
  }

  result1.innerHTML = `<p>Ваш ввод: ${phoneNumber}</p><p>Ваш телефонный номер в нормализованном виде: ${result}</p>`;

  input1.value = '';
});


// Задача 13.2
const task2 = document.querySelector('.task-2');
const input2 = task2.querySelector('#input-2');
const button2 = task2.querySelector('.btn-2');
const result2 = task2.querySelector('.result-2');

button2.addEventListener("click", () => {
  const string = input2.value;

  let result = string.match(/(-?\d+(\.\d+)?)/g).join(', ');

  result2.innerHTML = `<p>Ваш ввод: ${string}</p><p>Числа внутри вашей строки: ${result}</p>`;

  input2.value = '';
});


// Задача 13.3
const task3 = document.querySelector('.task-3');
const input3 = task3.querySelector('#input-3');
const button3 = task3.querySelector('.btn-3');
const result3 = task3.querySelector('.result-3');

button3.addEventListener("click", () => {
  const str = input3.value;

  let capitl = str.match(/[A-Z]/g).length;
  let lowercase = str.match(/[a-z]/g).length;

  // London is the Capital of Great Britan
  // мал - 27, бол - 4

  result3.innerHTML = `<p>Ваш ввод: ${str}</p><p>Заглавных букв: ${capitl}</p><p>Строчных букв: ${lowercase}</p>`;

  input3.value = '';
});


// Задача 13.4
const task4 = document.querySelector('.task-4');
const input4 = task4.querySelector('#input-4');
const button4 = task4.querySelector('.btn-4');
const result4 = task4.querySelector('.result-4');

button4.addEventListener("click", () => {
  const str = input4.value;

  const array = str.match(/[А-Яа-яЁёa-zA-Z]+/g);

  let longestWord = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  result4.innerHTML = `<p>Ваш ввод: ${str}</p><p>Самое длинное слово: ${longestWord}</p>`;

  input4.value = '';
});


// Задача 13.5
const task5 = document.querySelector('.task-5');
const input5 = task5.querySelector('#input-5');
const button5 = task5.querySelector('.btn-5');
const result5 = task5.querySelector('.result-5');

button5.addEventListener("click", () => {
  const word = input5.value;

  let reverseWord = '';

  word.replace(/[а-яА-Я\w]/g, (letter) => reverseWord = letter + reverseWord);

  let result = Boolean(word === reverseWord);

  result5.innerHTML = `<p>Ваш ввод: ${word}</p><p>Является ли слово перевертышем: ${result}</p>`;

  input5.value = '';
});


// // Задача 13.6
// const task6 = document.querySelector('.task-6');
// const input6 = task6.querySelector('#input-6');
// const button6 = task6.querySelector('.btn-6');
// const result6 = task6.querySelector('.result-6');

// button6.addEventListener("click", () => {
//   const str = input6.value;

//   let newStr = str.replace(/[ ]+\b\b[ ]+/g, '');
//   // let newStr = str.match(/^([ ]+\b)^(\b[ ]+)/g);
//   console.log(str);
//   console.log(newStr);

//   result6.innerHTML = `<p>Ваш ввод без лишних пробелов: ${newStr}</p>`;

//   input6.value = '';
// });


// // Задача 12.7
// const task7 = document.querySelector('.task-7');
// const input7 = task7.querySelector('#input-7');
// const button7 = task7.querySelector('.btn-7');
// const result7 = task7.querySelector('.result-7');

// button7.addEventListener("click", () => {
//   const str = input7.value;

//   let result = str.replace(/\b[a-z]/g, `/\b[A-Z]/g`);

//   result7.innerHTML = `<p>Ваш ввод: ${str}</p><p>Результат: ${result}</p>`;

//   input7.value = '';
// });


// // Задача 12.8*
// const task8 = document.querySelector('.task-8');
// const input8 = task8.querySelector('#input-8');
// const button8 = task8.querySelector('.btn-8');
// const result8 = task8.querySelector('.result-8');

// button8.addEventListener("click", () => {
//   const str = input8.value;

//   let result = '';

//   // код
//   let equal = str.indexOf("=");
//   let plus = str.indexOf("+");
//   let minus = str.indexOf("-");
//   let multiplication = str.indexOf("*");
//   let division = str.indexOf("/");

//   let operation = '';
//   if (plus !== -1) {
//     operation = plus;
//   } else if (minus !== -1) {
//     operation = minus;
//   } else if (multiplication !== -1) {
//     operation = multiplication;
//   } else {
//     operation = division;
//   }

//   let num1 = parseInt(str.slice(0, operation));
//   let num2 = parseInt(str.slice((operation + 1), equal));
//   let num3 = parseInt(str.slice(equal + 1));

//   let bool = false;

//   switch (str[operation]) {
//     case '+':
//       if (num1 + num2 === num3) {
//         bool = true;
//       }
//       break;

//     case '-':
//       if (num1 - num2 === num3) {
//         bool = true;
//       }
//       break;

//     case '*':
//       if (num1 * num2 === num3) {
//         bool = true;
//       }
//       break;

//     case '/':
//       if (num1 / num2 === num3) {
//         bool = true;
//       }
//       break;
//   }

//   result = `<p>Ваш ввод: ${str}</p><p>Результат: ${bool}</p>`;

//   result8.innerHTML = result;

//   input8.value = '';
// });


// // Задача 12.9*
// const task9 = document.querySelector('.task-9');
// const input9 = task9.querySelector('#input-9');
// const button9 = task9.querySelector('.btn-9');
// const result9 = task9.querySelector('.result-9');

// button9.addEventListener("click", () => {
//   const str = input9.value;

//   let result = '';

//   // цикл для заполнения массива чисел
//   let arrayOfNumbers = [];
//   let number = '';
//   const arrayForIf1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   for (let i = 0; i < str.length; i++) {
//     if (arrayForIf1.includes(str[i])) {
//       number += str[i];
//     } else {
//       if (number) {
//         arrayOfNumbers.push(number);
//         number = '';
//       }
//     }
//   }

//   if (number) {
//     arrayOfNumbers.push(number);
//   }

//   // цикл для заполнения массива знаков операций
//   let arrayOfSigns = [];
//   const arrayForIf2 = ['+', '-', '*', '/'];

//   for (let i = 0; i < str.length; i++) {
//     if (arrayForIf2.includes(str[i])) {
//       arrayOfSigns.push(str[i]);
//     }
//   }

//   // получение результата
//   let count = 0;
//   let numResult = arrayOfNumbers.reduce((result, item) => {
//     if (arrayOfSigns[count] === '+') {
//       count++;
//       return parseInt(result) + parseInt(item);
//     } else if (arrayOfSigns[count] === '-') {
//       count++;
//       return parseInt(result) - parseInt(item);
//     } else if (arrayOfSigns[count] === '*') {
//       count++;
//       return parseInt(result) * parseInt(item);
//     } else {
//       count++;
//       return parseInt(result) / parseInt(item);
//     }
//   });

//   result = `<p>Ваш ввод: ${str}</p><p>Результат: ${numResult}</p>`;

//   result9.innerHTML = result;

//   input9.value = '';
// });