import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};
refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const searchValue = event.target.value;
  if (searchValue.length > 0) {
    fetchCountries(searchValue);
  } else {
    clearMarkup();
  }
}

function clearMarkup() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';
  console.log('clearMarkup() done!');
}
