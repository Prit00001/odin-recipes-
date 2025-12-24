const myLibrary = [];
//4 form from newBook button
const newBookBtn = document.getElementById("newBookBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", () => {
  bookForm.hidden = !bookForm.hidden;
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  bookForm.reset();
  bookForm.hidden = true;
});
//1
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.read = read;
  this.title = title;
  this.author = author;
  this.pages = pages;
}
//2
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("the Hindu", "Dr. S. Richards", 301, true);
addBookToLibrary("The discovery of Shudras", "Dr. B.R. Ambedkar", 1009, false);

//3
function displayBooks() {
  const container = document.getElementById("library");
  container.innerHTML = "";

  myLibrary.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.dataset.id = book.id;

    const info = document.createElement("p");
    info.textContent = `${book.title} by ${book.author}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      removeBookFromLibrary(book.id);
      displayBooks();
    });

    bookDiv.appendChild(info);
    bookDiv.appendChild(removeBtn);
    container.appendChild(bookDiv);
  });
}


displayBooks();