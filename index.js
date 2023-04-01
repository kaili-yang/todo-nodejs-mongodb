// server.js
const express = require('express');
const app = express(); 
const cookieParser = require('cookie-parser');
const todoRouter = require('./routes/todo')
// const logger = require('./log/log')
// const mongoose = require('./mongodb')

// app.use(cors())
app.use(cookieParser())

// app.use("/client",clientRouter)
app.use("/", todoRouter)

app.get("/test", (req, res) => {
    res.send("Server is running")
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("server runing in localhost:" + port.toString() + " ...")
})






// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// logger.info('server runs successfully')

// app.use('/api', todoRoutes)
// const PORT = process.env.PORT || 5000;

// const conn = mongoose.connection
// conn.on('connected', function(){
//   console.log("mongodb启动成功")
// })



// module.exports = app


// const express = require('express')
// // const indexRouter = require('./routes/index')
// const userRouter = require('./routes/user')
// const logger = require('./log/log')
// const path = require('path');

// const app = express()

// // app.use(logger('todo'))
// logger.info('userLog')
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// // app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', userRouter)
// // app.use('/user', userRouter)
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// module.exports = app
