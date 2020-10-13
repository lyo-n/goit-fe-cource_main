import './styles.css';
import getCountries from './getCountries.js';
import countriesList from './tamplate/countriesString.hbs';
import countriesString from './tamplate/countriesList.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import debounce from 'lodash.debounce';



const searchForm = document.querySelector('#search__form');
const countries = document.querySelector('#countries');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
});

searchForm.addEventListener('input', debounce(e => {
  searchInput(e);
}, 500),);
function searchInput(e) {
  const searching = e.target.value;

  clearList();

  getCountries(searching).then(data => {
    const markup = changeList(data);
    const createList = listChange(data);
    if (!data) {
      return;
    }
    else if (data.length > 10) {
      PNotify.defaults.styling = 'material';
      PNotify.error({
      text: 'Найдено слишком много совпадений, попробуйте конкретизировать свой запрос!',
      });
    } else if (data.length >= 2 && data.length <= 10) {
      insertItem (createList);
    } else if (data.length === 1) {
      insertItem (markup);
    } else {
      alert('Ничего не найдено.');
    }
  });
}

function insertItem (items) {
  countries.insertAdjacentHTML('beforeend', items);
}

function listChange (items) {
  return countriesString (items);
}

function changeList (items) {
  return countriesList (items);
}

function clearList() {
  countries.innerHTML = '';
}
