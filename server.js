// server.js
const express = require('express');
const app = express(); 
const todoRoutes = require('./routes/todo')
const logger = require('./log/log')
const mongoose = require(mongodb)


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
logger.info('server runs successfully')

app.use('/api', todoRoutes)
const PORT = process.env.PORT || 5000;

const conn = mongoose.connection
conn.on('connected', function(){
  console.log("mongodb启动成功")
})

app.use(httpProxy);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app

// // short url proxy
// const httpProxy = proxy.createProxyMiddleware("/", {
//   target: "https://localhost:3000",// http代理跨域目标接口
//   changeOrigin: true,
//   logLevel: "debug",
// });


// // Define the schema for the todo item
// const todoSchema = new mongoose.Schema({
//     text: { type: String, required: true },
//     completed: { type: Boolean, default: false },
//     createdAt: { type: Date, default: Date.now }
// });
  
// // Define the schema for the todo list
// const todoListSchema = new mongoose.Schema({
//     searchText: { type: String, default: '' },
//     addText: { type: String, default: '' },
//     todoList: [todoSchema],
//     doneList: [todoSchema]
// });

// // Define the Todo and TodoList models using the schemas
// const Todo = mongoose.model('Todo', todoSchema);
// const TodoList = mongoose.model('TodoList', todoListSchema);


// ======================
// app.use(express.json());

// app.get('/api/todo', (req, res) => {
//   res.json(todoList);
// });

// app.post('/api/todo', (req, res) => {
//   const newItem = req.body.item;
//   if (newItem && !todoList.includes(newItem)) {
//     todoList.push(newItem);
//     res.json({ message: 'Item added to todo list.' });
//   } else {
//     res.status(400).json({ message: 'Invalid or duplicate item.' });
//   }
// });

// app.delete('/api/todo/:item', (req, res) => {
//   const itemToRemove = req.params.item;
//   const index = todoList.indexOf(itemToRemove);
//   if (index !== -1) {
//     todoList.splice(index, 1);
//     res.json({ message: 'Item removed from todo list.' });
//   } else {
//     res.status(404).json({ message: 'Item not found.' });
//   }
// });

// app.put('/api/todo/:item', (req, res) => {
//   const itemToComplete = req.params.item;
//   const index = todoList.indexOf(itemToComplete);
//   if (index !== -1) {
//     todoList.splice(index, 1);
//     doneList.unshift(itemToComplete);
//     recentDoneList.unshift(itemToComplete);
//     if (recentDoneList.length > 10) {
//       recentDoneList.pop();
//     }
//     res.json({ message: 'Item completed and moved to done list.' });
//   } else {
//     res.status(404).json({ message: 'Item not found.' });
//   }
// });

// app.delete('/api/todo', (req, res) => {
//   // Prompt for confirmation before deleting all tasks
//   const confirmation = req.query.confirmation;
//   if (confirmation === 'yes') {
//     todoList = [];
//     doneList = [];
//     recentDoneList = [];
//     res.json({ message: 'All tasks deleted.' });
//   } else {
//     res.status(400).json({ message: 'Confirmation not provided.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

// ============================
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('fs/promises');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// const DATA_FILE = './data.json';

// app.get('/api/todos', async (req, res) => {
//   try {
//     const data = await fs.readFile(DATA_FILE);
//     const todos = JSON.parse(data);
//     res.json(todos);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.post('/api/todos', async (req, res) => {
//   const newTask = { id: uuidv4(), text: req.body.text, completed: req.body.completed };
//   try {
//     const data = await fs.readFile(DATA_FILE);
//     const todos = JSON.parse(data);
//     todos.push(newTask);
//     await fs.writeFile(DATA_FILE, JSON.stringify(todos));
//     res.json(newTask);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.patch('/api/todos/:id', async (req, res) => {
//   const id = req.params.id;
//   const completed = req.body.completed;
//   try {
//     const data = await fs.readFile(DATA_FILE);
//     const todos = JSON.parse(data);
//     const updatedTaskIndex = todos.findIndex(task => task.id === id);
//     if (updatedTaskIndex === -1) {
//       res.sendStatus(404);
//     } else {
//       todos[updatedTaskIndex].completed = completed;
//       await fs.writeFile(DATA_FILE, JSON.stringify(todos));
//       res.json(todos[updatedTaskIndex]);
//     }
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.delete('/api/todos', async (req, res) => {
//   try {
//     await fs.writeFile(DATA_FILE, '[]');
//     res.sendStatus(204);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
