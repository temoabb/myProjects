// let a = 1
// while (a < 9) {
//  console.log("a->", a)
//   a++
// }

// let i = 3
// while(i) {
//     console.log('i->', i)
//     i--
// }

// let c = 11;
// do {
//   console.log(c);
//   c--;
// } while (c > 5);

// for (let d = 0; d < 9; d++) {
//     console.log('d->', d)
// }

// let g = 25;
// do {
//   console.log(g);
//   g--;
// } while (g >= 0);
// //

// let h = 11;
// while (h >= 4) {
//   console.log(h);
//   h--;
// }

// for (let k = 10; k < 20; k++) {
//   console.log(k);
// }

// let t = 0;
// while (t < 100) {
//   t++;
//   if ( t % 2 === 0) continue
//   console.log(t)
// }

// var s = "my" + "string";
// alert(s);

//................................................task1........................
// Task1
// Output even numbers in the loop

//...............................................ამოხსნა.........................................................
// let t = 0;
// while (t < 50) {
//   t++;
//   if ( t % 2 === 0) continue
//   console.log(t)
// }

// ...............................Task__2.............change for loop into while
//Task2
// Rewrite the code changing the for loop to while without altering its behavior
// for (let i = 0; i < 3; i++) {
//   console.log( `number ${i}!` );
// }

//...........................................................ამოხსნა........................................
// let i = 0;
// while ( i < 3) {
//   i++
//   console.log (`number ${i}!`)
// }

//...........................breaking the loop ??????????????????????????????????????????
// let sum = 0;
// let value
// while (true) {
//   value = prompt('enter number')
//   value = +value
//   if (!value) break;
//   sum += value;
// }
// console.log( 'Sum: ', sum );

// let y = -2;
// console.log(+y)

//____________________????????????????????????_______________________________

// Numeric conversion, unary +
// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers.
// But if the operand is not a number, the unary plus converts it into a number.

// let b = '-5'
// console.log(+b)

// let counter = 1;
// let a = counter++

// console.log('a', a)
// console.log('counter', counter)

// let counter = 1;
// let a = counter++;

// // console.log('a', a)
// console.log(counter)

// let a = 3, b = 5;

// let c = a++;
// let d = ++b;
// console.log('a', a,'b', b,'c', c,'d', d)

// Task1
// Write the code using if..else which would correspond to the following switch:
// let browser = "Edge";
// switch (browser) {
//   case "Edge":
//     console.log("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     console.log("Okay we support these browsers too");
//     break;

//   default:
//     console.log("We hope that this page looks ok!");
// }

//-------------------------------solution--------------------------

// let browser = "safari";
// if (browser === "edge") {
//   console.log("You've got the Edge!");
// } else if (browser === "safari") {
//   console.log("Okay we support these browsers too");
// } else if (browser === "chrome") {
//   console.log("Okay we support these browsers too");
// } else if (browser === "opera") {
//   console.log("Okay we support these browsers too");
// } else if (browser === "mozila") {
//   console.log("Okay we support these browsers too");
// } else if (browser === "mozila") {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// browser = 'edge' ? console.log('you have got the edge!') :
//  browser = 'chrome' ? console.log('Okay we support these browsers too') : browser = 'mozila' ? console.log('Okay we support these browsers too') : browser = 'safari' ? console.log('Okay we support these browsers too') : browser = 'firefox' ? console.log('Okay we support these browsers too') : browser = 'exsplorer' ? console.log('Okay we support these browsers too') :
//   console.log('We hope that this page looks ok!')

// browser === "edge"
//   ? console.log("edge")
//   : browser === "chrome" || browser === "oper"
//   ? console.log("we support")
//   : console.log("we hope");

//---------------------------end of solution--------------------------------

// Task2
// Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   console.log('0');
// }
// if (a == 1) {
//   console.log('1')
// }

// if (a == 2 || a == 3) {
//   console.log( '2,3' );
// }

//----------------------------------------------------------------solution------------------------------

// let a = +prompt("a?", "");
// switch (a) {
//   case 0:
//     console.log("0");
//     break;
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//   case 3:
//     console.log("2,3");
//     break;
//   default:
//     console.log("I don not know such nubmer");
// }

// ---------------end of solution ---------------------------------------------------

// function go(name, age) {
//   if (age < 20) {
//     return name + ", ჯერ არ ხარ სრულწლოვანი!";
//   } else {
//     return name + ", თქვენი რეგისტრაცია დასრულდა წარმატებით!";
//   }
// }
// alert(go("temo", 22));

// სკრიპტში საკმაოდ ხშირად გვჭირდება ერთი და იმავე მოქმედების სხვადასხვა ადგილას შესრულება. მაგალითად გვჭირდება ლამაზი მესიჯი რომდესაც ვიზიტორი საიტზე შედის , საიტიდან გადის ან სადმე სხვაგან. ფუნქციები პროგრამის მთავარი ''building blocks''-ია. ისინი გვაძლევენ უფლებას კოდში გამოვიძახოთ რამდენჯერმე ,გამეორების გარეშე.

//=========ფუნქციის დეკლარაცია=============

//ფუნქციის შესაქმნელად გვჭირდება დეკლარაცია. მაგალითად:

//        let x = 'hello'
//        let y = 'world'

//        function name(parameters) {
//        ....body...
//        }
//
// იმისათვის რომ ჩაიწეროს ფუნქცია, ჯერ ვწერთ ქივორდს(keyword) function, შემდეგ ფუნქციის სახელს  name, შემდეგ პარამეტრების სიას ფრჩხილებს შორის (parameters), და ბოლოს ყველაზე მნიშვნელოვანს - ფუნქციის კოდს, სიმრავლის ნიშნებს შორის {...........}, რასაც ''the function body''-საც უწოდებენ.
//შე
//

// function showmessage() {
//   alert('hello everyone');
// }
// showmessage();
// showmessage();

//=========ლოკალური ცვლადები ================

// function  showmessage() {
//   let message = "Hello, I am Javascript!"
//   console.log('message->', message)
// }
// showmessage()
// console.log(message) <------------------ ანუ ამაზე არ რეაგირებს?

// function showcase() {
//   let message = 'hello';
//   console.log(message)
// }
// showcase()

//============გარეთ გატანილი ცვლადები=================
//
//EX1

// let username = 'John'
// function showmessage() {
//  let message = `Hello ${username}`
//  console.log('message', message)
// }
// showmessage()

//-----------------------------------აქ ზემოთ ფუნქციაში რა ხდება?--------------

//ფუნქციას სრული წვდომა აქვს გარეთ გატანილ ცვლადზე და მისი გარდაქმნაც შესაძლებელია.

// let username = "John";
// console.log(username);

// function showmessage() {
//   let username = "Bob";
//   let message = `Hello ${username}`;
//   console.log("message", message);
// }

// console.log("username", username);
// showmessage();
// console.log("outside", username);

// after the function call //function call ნიშნავს როცა შოუქეისს გამოვიტან, ანუ ფუნქციის სახელს?

// let username = "alexa"
// console.log(username)
// function showmessage() {
//   username = "lazar"
//   let message = `hello ${username}`
//   console.log(message)
// }
// console.log('changed?', username)
// showmessage()
// console.log(username)

// let username = 'lazara'
// function showmessage() {
//   let username = 'Dumbledore' //declare a local variable
//   let message = `hello ${username}`
//   console.log(message)
// }

// showmessage()
// console.log('outside from function', username)

// function showcase(age) {
//   if (age >= 19) return true;
//   else return false;
// }
// var result = showcase(21);
// console.log(result);

// function min(a, b, c) {
//   if (a < b && a < c) return a;
//   else if (b < a && b < c) return b;
//   return c;
// }

// const res = min(12, 35, 87);
// console.log(res);

// let pow = function(x, n) {};

//-----------------------------Taassssssssskkkkkkkkkkkkkkkk--------------------------------------------------------------------------------------

let triangle = function(k, l, m) {
  if (
    k + l > m &&
    k - l < m &&
    (l + m > k && l - m < k) &&
    (k + m > l && k - m < l)
  )
    return true;
  return false;
};
var tr = triangle(5, 12, 13);
console.log(tr);

// let square = function(x, w, h) {
//     if (h === 'სამკუთხედი') return x * y / 2
//     return x * w
// }

// var samkmart = square( 20, 20, 'მართკუთხედი')
// console.log(samkmart)
//--------------------------------------------Tasssssssskkkkkkkkkkkkk---------------------------------------------------------------------------------------

let pow = function(x, n) {
  let result = 1;
  if (n === 0) return 1;
  for (let i = n; i !== 0; i--) {
    result = result * x;
  }
  return result;
};

let powpow = pow(3, 2);
console.log(powpow);
