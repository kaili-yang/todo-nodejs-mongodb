const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo');

router.get('/api/todo', TodoController.getTodos);
router.post('/api/todos', TodoController.addTodo);
router.delete('/api/todos', TodoController.deleteTodos);
router.put('/api/todos/:id', TodoController.updateTodo);

module.exports = router;

// // // GET /api/todo endpoint to get todo items
// // router.get('/api/todo', async (req, res) => {
// //   try {
// //     const searchText = req.query.searchText || '';
// //     const todos = await Todo.find({ content: new RegExp(searchText, 'i') }).sort({ id: 1 });

// //     const completeTodos = todos.filter(todo => todo.complete);
// //     const incompleteTodos = todos.filter(todo => !todo.complete);

// //     const payload = { complete: completeTodos, incomplete: incompleteTodos };
// //     res.json(payload);
// //   } catch (err) {
// //     console.error(err.message);
// //     res.status(500).send('Server Error');
// //   }
// // });
  
  
// //   // POST /api/add endpoint to add a new todo item
// // router.post('/api/add', async (req, res) => {
// //     try {
// //       const searchText = req.body.searchText || '';
// //       const addText = req.body.addText || '';
// //       const todo = new Todo({ text: addText });
// //       const todoList = await TodoList.findOneAndUpdate(
// //         { searchText },
// //         { $push: { todoList: todo } },
// //         { upsert: true, new: true }
// //       ).lean();
// //       if (todoList) {
// //         res.json(todoList.todoList);
// //       } else {
// //         res.sendStatus(404);
// //       }
// //     } catch (err) {
// //       console.error('Failed to add todo item:', err);
// //       res.sendStatus(500);
// //     }
// //   });
  
// //   // Update a todo item
// //   router.put('/api/todo/:id', (req, res) => {
// //       const todoId = req.params.id;
// //       const modifyText = req.body.modifyText;
    
// //       Todo.findById(todoId, (err, todo) => {
// //         if (err) {
// //           console.log(err);
// //           return res.status(500).send();
// //         }
// //         if (!todo) {
// //           return res.status(404).send();
// //         }
// //         todo.addText = modifyText;
// //         todo.save((err, updatedTodo) => {
// //           if (err) {
// //             console.log(err);
// //             return res.status(500).send();
// //           }
// //           res.status(200).json(updatedTodo);
// //         });
// //       });
// //     });
    
// //     // Delete all todo items
// //     router.delete('/api/todo', (req, res) => {
// //       Todo.deleteMany({}, (err) => {
// //         if (err) {
// //           console.log(err);
// //           return res.status(500).send();
// //         }
// //         res.status(200).send();
// //       });
// //     });

    
// module.exports = router
