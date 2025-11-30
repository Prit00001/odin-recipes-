////singleton or constrtuctor 
//const tinderUser =new Object()
// //let course = new course("CS2015", "Web Technology", "Dr. N. Saharia");
//console.log(course.code)
// const tinderUser = {}
//  tinderUser.Id = "123abc"
// tinderUser.name = "Kumar"
// tinderUser.isLoggedIN = false



// //console.log(tinderUser);
const regularUser = {
    email: "snc@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Kumar",
            lastname: "Gaurav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 ={
//     1: "a",
//     2: "b"
// }
// const obj2 ={
//     3: "c",
//     4: "d"
// }
// // const obj3={obj1,obj2}
// // console.log(obj3)
// //const obj3 = Object.assign({},obj1,obj2)
// //const obj3 = Object.assign(obj1,obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const users =[
//     {
//         id :1,
//         email: "jhc@gmail.com"
//     },
//     {

//     },
// {

// },
// ]
// console.log(users[1].email)
// console.log(tinderUser);
 //console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty('name'))
// console.log(Object.hasOwnProperty('email'))
// console.log(Object.hasOwnProperty('id'))
Object.freeze(regularUser)
regularUser.fullname.userfullname.lastname="Aman"
console.log(regularUser.fullname)
//object.freeze() function will only restruct the reassigning of direct properties iof there are nested object we can modify,change and do whatever we want 
console.log(Object.isFrozen(regularUser))