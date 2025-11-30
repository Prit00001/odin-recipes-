// const name ="raj"
// const repoCount="100"

// //outdated// console.log(name+repoCount+"value")
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// const gameName=new String(`Hites-tic-com-123`)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString=gameName.substring(0,4);
// console.log(newString);

// const anotherString=gameName.slice(-8,6);
// console.log(anotherString);
// const newString1="  Rajihihxhg"
// const newString2="   bxegukhnj  "
// console.log(newString1);
// console.log(newString1.trim());
// console.log(newString2);
// console.log(newString2.trim());
// // url.replace is used to replace any part of given url with the other 
// const url="https://hitesh.com/%20uiwjsi"
// console.log(url.replace('%20','-'))
// //url.includes for checking some keyword is there or not 
// console.log(url.includes('rahhj'));
// // we can use split method for seperating the strings on basis of -/dash we can check how to use split  
// console.log(gameName.split(''));
// console.log(gameName.split('-'));
// comparison of two string with a single character
// const a ='raman';
// const b='radhey';
// if(a<b){
//     //true
//     console.log(`${a} is less than ${b}`);
// }
// else if(a>b){
//     console.log(`${a} is greater than ${b}`);
// }
// else{
//     console.log(`${a} and ${b} both are equal`);
// }
// console.log(a.charCodeAt(0));
// console.log(b.charCodeAt(0));

//  function  areEqualCaseSensitive(str1,str2){
//     return str1.toUpperCase()==str2.toUpperCase()
// ; }
// console.log(areEqualCaseSensitive("Hello","hello"));
// console.log(areEqualCaseSensitive("hello","World"));


const areEqualInUpperCase = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
areEqualInUpperCase("ß", "ss"); // might be false depending on Unicode rules
areEqualInLowerCase("ı", "I");  // false because Turkish "ı" ≠ Latin "I"

console.log(areEqualInUpperCase("hello","Hello"));
console.log(areEqualInLowerCase("Hello","hello"));
 //localeCompare() is a string method that compares two strings according to:
// Language-specific rules
// Case sensitivity rules
const areEqualLocale = (str1, str2) => str1.localeCompare(str2, undefined, { sensitivity: 'accent' }) === 0;
console.log(areEqualLocale("ß","ss"));