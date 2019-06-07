const mongoose = require('mongoose');
require('dotenv').config();

//  const MONGO_USER = process.env.MONGO_USER;
//  const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
//  const MONGO_URL = process.env.MONGO_URL;

// console.log('hola', MONGO_URL);


mongoose.connect(`mongodb://localhost:27017/sdc`);

//url-mongo:cluster0-x46xc.mongodb.net/test?retryWrites=true
//my desployment: http://description.us-east-2.elasticbeanstalk.com/

const connect = mongoose.connection;

module.exports.getOne = (id, callback) => {
  connect.db.collection('amazin', (err, collection) => {
    if(err) {
      console.log('there is an error', err);
    } else {
      collection.findOne({id: id},function(err, result) {
        if(err) {
          callback(err);
        } else {
          console.log('this is result DB ', result);
          callback(null, result);
        }
      });
    }  
  });
}

module.exports.addDescription = (description, callback) => {
  connect.db.collection('amazin', (err,collection) => {
    if (err) {
      console.log('there is an error', err);
    } else {
      collection.insert(description, (err,result) => {
        if (err) {
          callback(err);
        } else {
          console.log("result from insertion", result);
          callback(null,result);
        }
      })
    }
  })
}

module.exports.updateDescription = (id, description, callback) => {
  connect.db.collection('amazin', (err,collection) => {
    if (err) {
      console.log('there is an error', err);
    } else {
      collection.update({id : Number(id)}, description, (err,result) => {
        if (err) {
          callback(err);
        } else {
          console.log("result from update", result);
          callback(null, result);
        }
      })
    }
  })
}

module.exports.deleteDescription = (id, callback) => {
  connect.db.collection('amazin', (err,collection) => {
    if (err) {
      console.log("There is an error", err)
    } else {
      collection.remove({id : Number(id)}, (err,result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      })
    }
  })
}
