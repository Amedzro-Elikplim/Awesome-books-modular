import Book from './modules/Book.js';
// import showDate from './modules/Date.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const add = document.getElementById('add');

const book = new Book();
// showDate();

add.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = title.value;
  const Author = author.value;

  const newBook = {
    title: Title,
    author: Author,
  };

  if (Title === '' || Author === '') {
    alert('please fill all fields');
    return;
  }

  book.SaveBook(newBook);
  alert('book saved successuflly');
  title.value = '';
  author.value = '';
});