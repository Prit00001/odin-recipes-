// Dates 

 let myDate= new Date()
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(typeof myDate)

let mycreatedDate= new Date("2025-10-14")
// console.log(mycreatedDate.toDateString())
// let myTimeStamp = Date.now()

// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/10000))

// let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1)

const newDate = new Date();

console.log(`Day is ${newDate.getDate()} and the month is ${newDate.toLocaleString('default', { month: 'long' })}`);
