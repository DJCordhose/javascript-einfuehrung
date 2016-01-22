const BACKEND_URL = 'https://mortgage-demo.appspot.com/mortgage_calculator/';
const path = 'rs/200000/10/7.5/30';

const url = `${BACKEND_URL}${path}`;

const promise = fetch(url)
    .then(response => response.json())
    .then(mortgage => mortgage.monthly)
    .catch(ex => console.error('request failed', ex));
    
promise.then(monthly => console.log(monthly));