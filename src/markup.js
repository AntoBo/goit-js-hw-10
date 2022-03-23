import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';
import Handlebars from 'handlebars';

Handlebars.registerHelper('tostring', function (obj) {
  return Object.values(obj).join(', ');
});

import templateCard from './card.hbs';

const refs = {
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

const listMaruup = '';
const cardMarkup = '';

export function draw(data) {
  //check if data too long
  if (data.length > 10) {
    Notify.info('Too many matches found. Please keep typing', notifyOptions);
    return;
  }

  //draw if ok
  //card
  if (data.length === 1) {
    refs.card.innerHTML = templateCard(data[0]);
  } else {
    //list
    refs.list.innerHTML = 'this in data to put to list';
  }
}

export function clear() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';
  console.log('clear markup!');
}
