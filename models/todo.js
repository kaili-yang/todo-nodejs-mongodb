
const mongoose =require('mongoose');

const todoSchema = new mongoose.Schema({
                content: {
                        type: String,
                        required: true
                },
                status: {
                        type: Number,
                        default: 0,
                        required: true
                },
                description: {
                        type: String,
                        required: false,
                }
        
        })
const TodoListModel = mongoose.model('TodoList', todoSchema);
module.exports = TodoListModel;
