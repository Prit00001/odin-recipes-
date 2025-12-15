// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const p1 = document.createElement("p");
p1.textContent="Hey! I am red";
p1.style.color="red";
container.appendChild(p1);

const h3 = document.createElement("h3");
h3.textContent = "Hey! i am blue h3!";
h3.style.color="blue";
container.appendChild(h3);

const div = document.createElement("div");
div.style.cssText ="border: 2px solid black; background-color:pink;"
const h1 = document.createElement("h1");
h1.textContent = "I am in div";
const p= document.createElement("p");
p.textContent ="Me too ";
div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);