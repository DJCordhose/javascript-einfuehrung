const BACKEND_URL = 'https://mortgage-demo.appspot.com/mortgage_calculator/';
const path = 'rs/200000/10/7.5/0';

const url = `${BACKEND_URL}${path}`;

const promise = fetch(url)
    .then(response => response.json())
    .then(mortgage => mortgage.monthly)
    // .then(() => {throw new Error('nix')})
    .catch(ex => {
      console.error('request failed', ex);
      return 'Ersatz';
    }).then(weiter => console.log(weiter));
    
promise.then(monthly => console.log(monthly));