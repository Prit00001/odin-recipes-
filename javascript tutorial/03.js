//#Primitive Data Types
//7 types(call by value) :string number boolean null undefined symbol BigInt
const score = 100
const scoreValue=100

const isLoggedin = false
 const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber= 3241546364263n;
console.log(typeof bigNumber)


//#reference type 
// call y reference array,object,functions

const heros =["Shaktiman","Nagraj","Doga"];
let myObj = { 
    name:"raman";
    age:22,
}

const myfunction = function(){
    console.log("Hello World")
}