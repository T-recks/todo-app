// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({
  //   text: 'shower'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'shower'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Timothy'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({name: 'Mike'}).then((result) => {
    console.log(result);
  });

  // db.close();
});
