const API_KEY = '100fe7c52b320c89da34ca4c33c46881';
const API_ENDPOINT = `http://api.brewerydb.com/v2/search?q=Goosinator&type=beer&key=${API_KEY}`;

export const fetchBeer = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json;
    })
  })
};