import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';

export function fetchCountries(name) {
  const searchParams = 'name,capital,population,flags,languages';
  const url = `https://restcountries.com/v3.1/name/${name.trim()}?fields=${searchParams}`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('response is not OK: ', response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log('data is here: ', data);
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name', notifyOptions);
    });
}
