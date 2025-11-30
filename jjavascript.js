// "use strict";//traet all js code as newer version

// //  we are using node js not browser alert(3+5)
// console.log(3+3);// code readibility should be high 
//     let name="raj"
//     let age=20
//     let isLoggedin=true
//     let state=null
//     console.log(name)
//     // number=>2 to the pwr 53
//     //bigint
//     //string=>""
//     //boolean=>true/false
//     //null=>standalone value
//     //undefined=>
//         //symbol=>unique

//     // objects

//     console.log(typeof undefined);



// conversion 
// let score=true;
// console.log(typeof score);

// let valueinNumber=Number(score)
// console.log(valueinNumber)
// console.log(typeof valueinNumber);
// // "33"=>33
// // "33abc"=>NaN(but data type of NaN is also a number)
// // for true it will give 1,null=>0,false=>0
 
// let isLoggedin=1

// let booleanIsloggedIn=Boolean(isLoggedin)
// console.log(booleanIsloggedIn);
// // 1=>true 0=>false ""=>false 

 const score=100
 const scoreValue=100.


 const isLoggedIn=false
 const outsideTemp=null
 let userEmail;
 
 const id=Symbol('123')
 const anotherId=Symbol('123')

 console.log(id==anotherId);

 const bigNumber=3456638723782390983n

 // References or non primitive 
 // Array,Objects,Functions

 const heros=["Shaktiman","Nagraj","Doga"];
 let myObj={
    name:"hitesh",
age:22,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heros)
console.log(typeof myFunction)



// +++++++++++++++++++++++++++++++++++=

// stack(primitive),Heap(non primitive)

let myYoutubename="bubhcuybuvytc"
let anothername= "chaiaurcode"
console.log(anothername)
console.log(myYoutubename)

let userOne={
    email:"user@google.com",
    upui:"user@icici"
}
let userTwo= userOne

userTwo.email="raj@google.com"
console.log(userOne.email);
console.log(userTwo.email);