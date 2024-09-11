const myLibrary = [];

function Book(title, author, pages,read ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    console.log("Displaying books, library length:", myLibrary.length);
    
    myLibrary.forEach((book, index) => {
        console.log("Creating book card for:", book.title);
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        
        const title = document.createElement("h3");
        title.textContent = book.title;
        bookCard.appendChild(title);
        
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);
        
        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);
        
        const read = document.createElement("p");
        read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        bookCard.appendChild(read);
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => removeBook(index));
        bookCard.appendChild(removeBtn);
        
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = book.read ? "Mark as Unread" : "Mark as Read";
        toggleBtn.classList.add("toggle-btn");
        toggleBtn.addEventListener("click", () => toggleButton(index));
        bookCard.appendChild(toggleBtn);
        
        bookList.appendChild(bookCard);
    });
}

function removeBook(index){
    myLibrary.splice(index,1);
    displayBooks();
}

function toggleButton(index){
    myLibrary[index].read = !myLibrary[index].read
    displayBooks();
}

const newBookBtn = document.getElementById("newBookBtn");
const bookForm = document.getElementById("bookForm");
const addBookForm = document.getElementById("addBookForm");

newBookBtn.addEventListener("click",() => {
    bookForm.style.display = "block";
});

addBookForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    bookForm.style.display = "none";
    addBookForm.reset();
    console.log("book added! displaying books")
});

window.onclick = (event) => {
    if (event.target == bookForm) {
        bookForm.style.display = 'none';
    }
};

displayBooks();