import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';
import templateCard from './card.hbs';
import templateList from './list.hbs';

const refs = {
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

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
    refs.list.innerHTML = templateList(data);
  }
}

export function clear() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';
}
