let axios = require("axios");


for (let i = 0; i <100; i++) {
  setTimeout(() => null, 1000);
  let sku = Math.floor(Math.random() * 10000000);
  axios.get(`http://localhost:1128/description/${sku}`)
    .then(response => {
       return response.data;
    })
    .catch(err => {
      return;
    })
}