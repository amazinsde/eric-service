const mongoose = require('mongoose');
require('dotenv').config();

 const MONGO_USER = process.env.MONGO_USER;
 const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
 const MONGO_URL = process.env.MONGO_URL;

// console.log('hola', MONGO_URL);


mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}`, { useNewUrlParser: true });

//url-mongo:cluster0-x46xc.mongodb.net/test?retryWrites=true
//my desployment: http://description.us-east-2.elasticbeanstalk.com/

const connect = mongoose.connection;

module.exports.getOne = (id, callback) => {
  connect.db.collection('descriptions', (err, collection) => {
    if(err) {
      console.log('there is an error', err);
    } else {
      collection.findOne({_id: id},function(err, result) {
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
  connect.db.collection('descriptions', (err,collection) => {
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
  connect.db.collection('descriptions', (err,collection) => {
    if (err) {
      console.log('there is an error', err);
    } else {
      collection.update({_id : id}, description, (err,result) => {
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
  connect.db.collection('descriptions', (err,collection) => {
    if (err) {
      console.log("There is an error", err)
    } else {
      collection.remove({_id : id}, (err,result) => {
        if (err) {
          callback(err);
        } else {
          console.log("result from delete", result);
          callback(null, result);
        }
      })
    }
  })
}
