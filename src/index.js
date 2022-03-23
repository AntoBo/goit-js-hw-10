import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import * as Markup from './markup';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const searchValue = event.target.value;
  if (searchValue.length > 0) {
    fetchCountries(searchValue)
      .then(data => {
        Markup.clear();
        Markup.draw(data);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name!', notifyOptions);

        console.log('error caught in index: ', error);
      });
  } else {
    Markup.clear();
  }
}
