//singleton

//object literals
//object.create//with singleton is called constructor way
const mySym =Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    [mySym]: "mykey1",
    age: 20,
    location: "Imphal",
    isLoggedin: false
}
console.log(Jsuser.age)
console.log(Jsuser["age"])
console.log(Jsuser[mySym])
console.log(typeof mySym)
Jsuser.age="23";
//Object.freeze(Jsuser)
Jsuser.age="20";
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js User");
}
Jsuser.greetingtwo = function(){
    console.log(`"Hello JS user",${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
