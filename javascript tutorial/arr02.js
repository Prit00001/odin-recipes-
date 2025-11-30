// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(arr)
// console.log(arr[0][0])
// console.log(arr[1][0])
// console.log(arr[2][2])
// arr[2][2]=89
// console.log(arr[2][2])
// arr.push([10,11,12])
// console.log(arr[3][2])

// using .fill().map(())
// let arr =Array(4).fill().map(()=>Array(3));
// console.log(arr)
// arr[0][2]=32
// arr[0][1]=21
// arr[0][0]=7
// arr[2][2]=9
// console.log(arr)

// //usin Array.from()
// let arr = Array.from(Array(4),()=> new Array(3));
// console.log(arr)

let dhbassessment = new Array()
//for inserting any element in end of an arrau\y
dhbassessment.push(["240103025",23,20]);
console.log(dhbassessment)
//for inserting at index 0
dhbassessment.unshift(["240103001",25,24]);
console.log(dhbassessment)
dhbassessment.splice(1,1,["240103010",20,12]);

dhbassessment.pop();   // removes last element
dhbassessment.shift(); // removes first element
console.log(dhbassessment);console.log(dhbassessment)
dhbassessment.forEach((elem)=>{
    let sum = elem[1] + elem[2];
    elem.push(sum);
});
console.log(dhbassessment);