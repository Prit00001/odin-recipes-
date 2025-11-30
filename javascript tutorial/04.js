// let myarr1=[1,2,3,4,5,6]
// let myarr2=["raman","rachit"]

// console.log(myarr1);
// console.log(myarr2)
// // myarr1.push(2)
// // myarr1.push(8)
// // myarr1.pop()
// // myarr1.pop()
// // myarr1.pop()
// // myarr1.unshift(78)
// // console.log(myarr1)
// // myarr2.unshift("raj")
// // myarr2.shift()
// // console.log(myarr2)

// //console.log(myarr1.indexOf(3))
// const newArr= myarr1.join()
// console.log(typeof newArr)
// console.log(newArr)

// //slice and splice 
// console.log("A ",myarr1);

// // const myn1=myarr1.splice(1,3)
// // console.log(myn1)
// // console.log("c",myarr1)
// const myn2=myarr1.slice(1,4)
// console.log(myn2);
// console.log(myarr1)
// //the main difference between slice and splice is that after using slice if you want to print original array it will be in the same form as previously but use of splice will change the original array and spliced part will be out of the array amd second we can understand that in splice it will include last elemnet 
// const marvel_heros = ["thor","Ironman","spiderman"]
// const dc_heros = ["superman","batman","flash"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros[3][0])
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)
// for concat there will be a seperate array 
// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)
//spread is more used becaise we can concat multiple arrays
// const arr=[1,2,3,4,5,6,7,[1,2,3,4,[1,2,3]]]
// const real_an_arr=arr.flat(Infinity)
// console.log(real_an_arr)
//will open all the arrays inside arrays thing will be resolved

// console.log(Array.isArray("raman"))
// console.log(Array.from("raman"))
// console.log(Array.from({name: "Raman"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));