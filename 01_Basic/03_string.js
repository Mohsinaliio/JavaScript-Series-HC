const gameName = new String("mohsin-ff-dd");

console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(typeof gameName);

// console.log(gameName.indexOf("o"));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-5, 3);
// console.log(anotherString);

const newStringOne = "    mohsin    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://mohsin.com/mohsin%20newpage";
console.log(url.replace("%20", "-"));

console.log(url.includes("mohsin"));

// console.log(gameName.split("-"));
console.log(gameName.concat());
