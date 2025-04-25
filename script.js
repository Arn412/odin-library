
class Book {
    constructor(author, title, pages, read_status){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read_status = read_status;
  }
  };
  
  
  const myLibrary = [
    new Book("George Orwell", "1984", 328, "Read"),
    new Book("Harper Lee", "To Kill a Mockingbird", 281, "Not Read"),
    new Book("J.K. Rowling", "Harry Potter and the Philosopher's Stone", 223, "Read"),
    new Book("J.R.R. Tolkien", "The Hobbit", 310, "Read"),
  ];
  
  
  function addBookToLibrary(author, title, pages, read_status) {
    const book = new Book(author, title, pages, read_status);
    myLibrary.push(book);
    displayBooks();
  }
  

  function displayBooks() {
    const container = document.getElementById("book-container");
    container.innerHTML = ""; 
  
    myLibrary.forEach((book, index) => {
      const bookdiv = document.createElement("div");
      bookdiv.style.border = "1px solid #ccc";
      bookdiv.style.margin = "10px";
      bookdiv.style.padding = "10px";
  
      bookdiv.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read Status:</strong> ${book.read_status}</p>
      `;
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.style.marginTop = "10px";
      removeBtn.addEventListener("click", () => {
        myLibrary.splice(index, 1); // Remove from array
        displayBooks(); // Re-render the list
      });

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Toggle Read Status";
      toggleBtn.addEventListener("click", () => {
      book.read_status = book.read_status === "Read" ? "Not Read" : "Read";
      displayBooks();
    });

      bookdiv.appendChild(toggleBtn)
      bookdiv.appendChild(removeBtn);
      container.appendChild(bookdiv);
    });
  }
  

  const formbutton = document.getElementById("openFormButton");
  
  const formdialog = document.getElementById("book-dialog")

  const closeform = document.getElementById("closeDialogButton")

  
formbutton.addEventListener("click",()=>{
    formdialog.showModal();
})


closeform.addEventListener("click",()=>{
    formdialog.close();
})

const addBookForm = document.getElementById("addBookForm");

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const formData = new FormData(addBookForm);

  const author = formData.get("author");
  const title = formData.get("title");
  const pages = formData.get("pages");
  const readStatus = formData.get("read-status");

  if (author && title && pages && readStatus) {
      addBookToLibrary(author, title, pages, readStatus);

      formdialog.close();
      addBookForm.reset();
  } else {
      alert("Please fill in all fields.");
  }
});



displayBooks();