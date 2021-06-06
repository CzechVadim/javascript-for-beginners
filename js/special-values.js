let valueUndefined;  /* Значение которое обозначает "неопределенность". */
console.log(valueUndefined); 



let valueNull = null;  /* Значение которое обозначает "ничего". */
console.log(valueNull);



let currentYear = 2021;
let birthDay = 1985;

let fullAge = currentYear - birthDay;
let minAge = 18;

let valueTrue = fullAge >= minAge;  /* Значение которое обозначает "true". */
console.log(valueTrue);

let valueFalse = fullAge <= minAge;  /* Значение которое обозначает "false". */
console.log(valueFalse);



let string1 = 'abc';
let string2 = 'def';
let sumStrings = string1 * string2;  /* Значение которое обозначает "NaN (Not-A-Number) (не число)". */
console.log(sumStrings);



let number10 = 10;
let number0 = 0;
let infinity = number10 / number0;  /* Значение которое обозначает "infinity (бесконечность)". */
console.log(infinity);



let numberMinus = -10;
let numberNull = 0;
let infinityMinus = numberMinus / numberNull;  /* Значение которое обозначает "-infinity (минус бесконечность)". */
console.log(infinityMinus);