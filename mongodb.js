
const mongoose = require('mongoose');
const TodoListModel = require('./models/todo');
const MONGODB_URI = 'mongodb://localhost:27017/todo_db';
const DB_NAME = 'todo_db';

// Define the MongoDB connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log(`Connected to MongoDB database "${DB_NAME}"`))
  .catch((error) => console.error(`Failed to connect to MongoDB: ${error}`));

// Export the mongoose object
module.exports = mongoose;

// const mongoose = require('mongoose');

// const dbName = 'todo_db';
// const dbUrl = `mongodb://localhost:27017/${dbName}`;

// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected successfully');

//   // create a new collection
//   const todoSchema = new mongoose.Schema({
//     content: String,
//     complete: Boolean,
//     backup: String
//   });
//   const Todo = mongoose.model('Todo', todoSchema);

//   // do something with the collection
//   Todo.find({}, function (err, todos) {
//     if (err) return console.error(err);
//     console.log(todos);
//   });
// });

