export function fetchCountries(name) {
  const searchParams = 'name,capital,population,flags,languages';
  const url = `https://restcountries.com/v3.1/name/${name.trim()}?fields=${searchParams}`;
  console.log(url);
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
      console.log('error is here: ', error);
    });
}
