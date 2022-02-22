import Book from './Book.js';

function li1(title) {
  const li = document.createElement('li');
  li.className = 'book-title';
  li.innerHTML = `"${title}" by`;
  return li;
}

function li2(author) {
  const li = document.createElement('li');
  li.className = 'book-author';
  li.innerHTML = author;

  return li;
}

function button(title) {
  const book = new Book();
  const button = document.createElement('button');
  button.className = 'remove-button';
  button.innerHTML = 'remove';

  button.addEventListener("click", (e) => {
    e.preventDefault();
    book.RemoveBook(title);
    console.log('hello')
  });

  return button;
}


export {
  li1,
  li2,
  button,
}