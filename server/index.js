const express = require('express');
const app = express();
const port = 1128;
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./db.js');
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(__dirname + '/../public'));


// read/GET - read an existing item
app.get('/description/:id', function(req, res) {
    let id = req.params.id;
    db.getOne(parseInt(id), (err, result) => {
      if(err) {
        console.log('ERROR IN SERVER', err);
      } else {
        console.log('Response IN SERVER',result);
        res.send(result);
      }
    });
    // console.log(req);
    // res.send('hola');
    // res.end();
});


// create/POST - create new item
app.post("/description", (req,res) => {
  let description = req.body.description;
  db.addDescription(description,(err,result) => {
    if (err) {
      console.log("Error in server adding description", err);
    } else {
      console.log("Resp in server from adding description", result);
      res.send(result);
    }
  })
});

// read/GET - read an existing item


// update/PUT - update existing item
app.put("/description/:id", (req,res) => {
  let id = req.params.id;
  res.send(`modifying description with id: ${id}`);
})

//delete/DELETE - delete existing item
app.delete("/description/:id", (req,res) => {
  let id = req.params.id;
  res.send((`deleting description with id ${id}`))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

