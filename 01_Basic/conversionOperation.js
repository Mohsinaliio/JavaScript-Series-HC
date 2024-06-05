let score = "mohsin";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


let isLoggedIn = "false"

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn)


let gameScore = 3;

//console.log(gameScore++);
// console.log(++gameScore);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

let arr = ["mohsin", "ali"];

// console.log(typeof arr);



let name1 = 'xyz';
let anotherName = name1;
anotherName = 'mohsin'

// console.log(name1);
// console.log(anotherName);

let userOne = { 
    name: 'Mohsin',
    email: 'mohsin@gmail.com'
}

let userTwo = userOne;

userOne.name = 'John';
userTwo.email = 'john@gmial.con';
userTwo.age = 23;

console.log(userOne);
console.log(userTwo);