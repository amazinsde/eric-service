const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require("faker");

let count = 0

function Description() {
  this.id = count;
  this.name = faker.commerce.productName();
  this.price = faker.commerce.price();
  this.deliver_estimation = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5) + 5} days`;
  this.seller_name = faker.company.companyName();
  this.description = faker.commerce.product();
}

const csvWriter = createCsvWriter({  
  path: 'data.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'name', title: 'name'},
    {id: 'price', title: 'price'},
    {id: 'deliver_estimation', title: 'deliver_estimation'},
    {id: 'seller_name', title: 'seller_name'},
    {id: 'description', title: 'description'},
  ]
});

const data = [];
for (let i= 0; i<100; i++) {
  let description = new Description();
  data.push(description);
  count++;
}

csvWriter  
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
