const refs = {
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

const listMaruup = '';
const cardMarkup = '';

export function draw(data) {
  console.log('draw markup for data of: ', data.length);
  if (data.length === 1) {
    console.log('draw card');
    refs.card.innerHTML = 'this is capital: ' + data[0].capital;
  } else {
    console.log('draw list');
    refs.list.innerHTML = 'this in data to put to list';
  }
}

export function clear() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';

  console.log('clear markup!');
}
