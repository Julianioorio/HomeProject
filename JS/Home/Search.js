const input = document.getElementById('searchInput')
const listItem = document.querySelectorAll('#itemList li')
const divSearch = document.querySelector('.Search')
const blockSearch = document.querySelector('.blockSearch')

input.addEventListener('focus', () => {
    divSearch.style.border = '1px solid darkorange';
    blockSearch.style.display = 'block'
  });
  input.addEventListener('blur', () => {
    divSearch.style.border = '1px solid rgb(96, 66, 29)';
    blockSearch.style.display = 'none'
  });

input.addEventListener('input', () => {
    const searchValue = input.value.toLowerCase();
    listItem.forEach(li => {
        const linkText = li.querySelector('a').textContent.toLowerCase();
        li.style.display = linkText.includes(searchValue) ? '' : 'none';
      });
});