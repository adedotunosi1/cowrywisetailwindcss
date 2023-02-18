const list = document.querySelector('li');
const dropdown = document.querySelector('.dropdown-menu');
const mainlist = document.querySelector('#menu');
const burger = document.querySelector('#burger');

list.addEventListener('click', () => {
     if(dropdown.style.display === 'none'){
          dropdown.style.display === 'block';
     } else {
     dropdown.style.display = 'block';
     }
});

burger.addEventListener('click', () => {
     if(mainlist.classList.contains('hidden')){
          mainlist.classList.remove('hidden');
     } else {
          mainlist.classList.add('hidden');
     }
})