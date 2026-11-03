// function outer() {
//   let a = 10;

//   function inner() {
//     let b = 20;
//     console.log(a);
//     console.log(b);
//   }

//   inner();

//   console.log(a);
// }

// function outer() {
//   let a = 10;

//   return function () {
//     a++;
//     console.log(a);
//   };
// }

// let fn = outer();

// fn();
// fn();
// fn();

// function greet(greetFn) {
//     greetFn();
// }

// function hello() {
//   console.log("Hello");
// }

// greet(hello);

// (function () {
//   console.log("Hello world");
// })();

// let a, b, c;
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

// [a,b, ...c] = arr1;
// console.log(a);
// console.log(b);
// console.log(c);

// const car = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };

// const car_more = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// const mycar = { ...car, ...car_more };
// console.log(mycar);
