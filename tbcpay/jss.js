var counter = 345;
counter = counter + 345;
console.log(counter);

let cristiano = 33;
cristiano = cristiano - 2;
console.log(cristiano);
cristiano--;
console.log(cristiano);
cristiano--;
console.log(cristiano);

let forlan = 34;
forlan = forlan + 1;
forlan++;
forlan = forlan + 3;
forlan--;
forlan = forlan + "Aguero";
console.log("kunn" + forlan);

//ათწილადების ნამრავლი
let sami = 1.5 * 2;
console.log(sami);

//ათწილადების გაყოფა
let xuti = 2.5 / 0.5;
console.log(xuti);

//რიმეინდერი / remainder
let remainder;
remainder = 17 % 5;
console.log(remainder);

//შორთქათი შეკრებისას, გამოკლებისას, გაყოფისას, გამრავლებისას
var a = 3;
var b = 17;
var c = 12;

a = a + 12; // შეიძლება ჩაგვეწერა ასე: a += 12;
b = 9 + b; // b += 9;
c += 8; // c += 8;
console.log(a, b, c);

//ანალოგიურად გამოკლების დროსაც. ანუ თუ მოცემულია:
let d = 22;
let f = 25;
let g = 35;

d -= 12;
f -= 10;
g -= 7;
console.log(d, f, g);

//გამრავლება
let k = 3;
let h = 3.2;
let y = 5;

k *= 33;

h *= 5; // <___________იგივეა
y *= 12;
console.log(k, h, y);

//გაყოფაზეც იგივეა. ანუ თუ
let m = 35;
m /= 7; // <_________________           m = m / 7;
console.log(m);

// ჯავასკრიპტში 3 სახის ლოგიკური ოპერატორია || (OR), && (AND), ! (NOT)

console.log(true || true);
console.log(false || true);
console.log(false || false);

if (1 || 0) {
  console.log("truth");
}

// თასქები
let result;
if (a + b < 4) {
  result = "Bellow";
} else {
  result = "Over";
}

a + b < 4 ? console.log("Below") : console.log("Over");

// // let result;
// let a = 0;
// let b = 2;
// // if (a + b < 4) {
//   result = 'Below'
// } else {
//   result = "over"
// }
// console.log(result)

// (a+b < 4) ? console.log('below') : console.log('over')
// a + b < 4 ? console.log('below') : console.log('over')

//------------------------------------------------------------------------

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// console.log('message', message)

// let message;
// let login = 'employee';

// if (login == 'employee') {
//   message = 'hello';
// }
// else if (login == 'director') {
//   message = 'greetings';
// }
// else if (login == '') {
//   message = 'no login';
// }
// else {
//   message = '';
// }
// console.log('message', message)

// let message;
// let login = 'hfghff'

// login === 'employee' ? console.log('hello') : login === 'director' ? console.log('greetings') : login ==='' ? console.log('no login') : console.log('ra ginda vis ejaxebi');

// login==='Employee' ? console.log('Hello') : login==='Director' ?  console.log('Greetings') : login==='' ? console.log('No Login') : console.log('sadsad')

//--------------------------------------------------------------------------------------------------

// postfix ფორმაა, როცა ოპერატორი ცვლადის შემდეგ წერია (y++, სადაც ++ოპერატორია. ან --y). პრეფიქს ფორმაა როცა ოპერატორი უსწრებს ცვლადს. მაგალითად --y, ++y.

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

// let username = "John"
// console.log(username)
// function showmessage() {
//   username = 'Bob'
//   let message = `Hello ${username}`
//   console.log('message', message)
// }
// console.log('username', username)
// showmessage()
// console.log('outside, username) // after the function call //function call ნიშნავს როცა შოუქეისს გამოვიტან, ანუ ფუნქციის სახელს?

// let username = "alexa"
// console.log(username)
// function showmessage() {
//   username = "lazar"
//   let message = `hello ${username}`   //`` <------ამ ნიშნებს თავისი დატვირთვა აქვს?
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
//ფუნქცია შექმნის და გამოიყენებს საკუთარ იუზერნეიმს let შემოდის. მაგრამ როცა ფუნქცია გაეშვება მაინც ფუნქციის გარეთ რომ ცვლადია იმას გამოიტანს როცა let შექმნილია.
// showmessage()
// console.log('outside from function', username)
