const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({}).then((todo) => {

});

Todo.findByIdAndRemove('58157fffd3bef1b1b25d4b29').then((todo) => {
  console.log(todo);
});
