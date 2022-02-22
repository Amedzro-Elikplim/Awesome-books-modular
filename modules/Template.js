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

export {
  li1,
  li2,
};