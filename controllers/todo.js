// const mongoose = require('../mongodb');
// const bodyParser = require('body-parser');
// let { addTodo, deleteTodo, queryTodo, updatTodoStatus, queryAllTodo } = require('./todoMapper')
const Todo=require('../models/todo')

module.exports = {
    async getTodos(req, res) {
      try {
        const todos = await Todo.find()
        res.status(200).json(todos);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async addTodo(req, res) {
      try {
        const todo = new Todo({
          content: req.body.content,
          completed: false
        });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async deleteTodos(req, res) {
      try {
        const result = await Todo.deleteMany({});
        res.status(200).json(result);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    },
  
    async updateTodo(req, res) {
      try {
        const todo = await Todo.findById(req.params.id).exec();
        if (!todo) {
          return res.status(404).json({ message: 'Todo not found' });
        }
        todo.content = req.body.content;
        todo.completed = req.body.completed;
        const updatedTodo = await todo.save();
        res.status(200).json(updatedTodo);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    }
  };

// module.exports = {
//     query: function (params = {}, callback) { 
//         if (params.id) {
//             let { id } = params
//             let sqlparam = [id]
//             mongoose.query(queryTodo, sqlparam, (err, result) => {
//                 if (err) throw err
//                 callback({ code: 200, data: result })
//             })
//         } else {
//             mongoose.query(queryAllTodo, (err, result) => {
//                 if (err) throw err
//                 callback({ code: 200, data: result })
//             })
//         }
//     },

//     add: function (params, callback) { 
//         let sqlparam = [
//             params.content ? params.content : "",
//             params.completed ? params.completed : "",
//         ]
//         mongoose.query(addTodo, sqlparam, (err, result) => {
//             if (err) throw err
//             callback({ code: 200, data: result })
//         })
//     },

//     update: function (params, callback) { 
//         this.query(params, r => {
//             if (r.data.length === 0) {
//                 callback({ code: 400, msg: 'No todo item.' })
//             } else {
//                 let sqlparam = [
//                     params.content ? params.content : "",
//                     params.completed ? params.completed : "",
//                 ]
//                 mongoose.query(updatTodoStatus, sqlparam, (err, result) => {
//                     if (err) throw err
//                     callback({ code: 200, data: result })
//                 })
//             }
//         })
//     },

//     delete: function (params, callback) { 
//         this.query(params, r => {
//             if (r.data.length === 0) {
//                 callback({ code: 400, msg: 'No todo item.' })
//             } else {
//                 let { id } = params
//                 let sqlparam = [id]
//                 mongoose.query(deleteTodo, sqlparam, (err, result) => {
//                     if (err) throw err
//                     callback({ code: 200, data: result })
//                 })
//             }
//         })
//     }
// }



