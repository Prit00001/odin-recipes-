// function addTwonumbers(number1,number2){
//     console.log(number1+number2)

// }
// addTwonumbers(3,4)
// function addTwonumbers(num1,num2){
//     let result =num1+num2;
//     return result;
// }
// const result=addTwonumbers(9,8)
// console.log("Result:",result);

// function loginusermesseage(username){
//     return `${username} just logged in `

// }
// console.log(loginusermesseage("hitesh"))
// function with objects
// function calculatecardprice(...num1){
//     return num1
// }
// console.log(calculatecardprice(200,400,100))

// const user ={
//     username: "ram",
//     price:1999
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

// }
// handleObject({
//     username: "sam",
//     price :399
// })

// const mynewArray = [200,400,700,300]

// function returnSecondvalue(getArray){
//     return getArray;
// }
function* myGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const iterator =myGenerator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);