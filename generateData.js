const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require("faker");


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

function populateOneMil(start) {
  let count = start;
  const data = [];
  for (let i= 0; i<1000000; i++) {
    let description = {
      id : count,
      name : faker.commerce.productName(),
      price : faker.commerce.price(),
      deliver_estimation : `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5) + 5} days`,
      seller_name : faker.company.companyName(),
      description : faker.commerce.product(),
    };
    data.push(description);
    count++;
  }
  return data;
}

Promise.resolve()
.then(() => csvWriter.writeRecords(populateOneMil(0)))
.then(() => csvWriter.writeRecords(populateOneMil(1000000)))
.then(() => csvWriter.writeRecords(populateOneMil(2000000)))
.then(() => csvWriter.writeRecords(populateOneMil(3000000)))
.then(() => csvWriter.writeRecords(populateOneMil(4000000)))
.then(() => csvWriter.writeRecords(populateOneMil(5000000)))
.then(() => csvWriter.writeRecords(populateOneMil(6000000)))
.then(() => csvWriter.writeRecords(populateOneMil(7000000)))
.then(() => csvWriter.writeRecords(populateOneMil(8000000)))
.then(() => csvWriter.writeRecords(populateOneMil(9000000)))
.then(()=> console.log('The CSV file was written successfully'));

// csvWriter  
//   .writeRecords(populateOneMil(0))
//   .then(()=> console.log('The CSV file was written successfully'));
