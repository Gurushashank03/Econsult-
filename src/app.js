const express = require('express');
const { applyMiddleware } = require('./middlewares/applyMiddleware');
require('dotenv').config();
const authenticationRoutes = require('./routes/authentication/index');
const userRoutes = require('./routes/user/index');
const doctorRequestRoutes=require('./routes/DoctorRequest/index');
const doctorRoutes=require('./routes/Doctor/index');
const connectDB = require("./db/client")
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/payment/index');
const commentRoutes = require('./routes/comments/index')
const appointmentRoutes = require('./routes/appointment/index')
const tipsRoutes = require('./routes/tip/index')

const port = process.env.PORT || 5000

const app = express()

// const http=require("http");
// const cors = require("cors");
// const socketIO = require("socket.io");
// const users=[{}];

// app.use(cors());
// const server=http.createServer(app);

// const io=socketIO(server);

applyMiddleware(app);

app.use(authenticationRoutes)
app.use(userRoutes)

app.use(doctorRequestRoutes)
app.use(doctorRoutes)

app.use(paymentRoutes)

app.use(commentRoutes)
app.use(appointmentRoutes)
app.use(tipsRoutes)

const main = async () => {
    // connecting to database
   // console.log("Connecting to database...");
    await connectDB();
    console.log("Connected to database!",mongoose.connection.name);
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })
}

main();



app.get('/health', (req, res) => {
    res.send('Server is running.')
})


// io.on("connection",(socket)=>{
//     console.log("New Connection");

//     socket.on('joined',({user})=>{
//           users[socket.id]=user;
//           console.log(`${user} has joined `);
//           socket.broadcast.emit('userJoined',{user:"Admin",message:` ${users[socket.id]} has joined`});
//           socket.emit('welcome',{user:"Admin",message:`Welcome to the chat,${users[socket.id]} `})
//     })

//     socket.on('message',({message,id})=>{
//         io.emit('sendMessage',{user:users[id],message,id});
//     })

//     socket.on('disconnected',()=>{
//           socket.broadcast.emit('leave',{user:"Admin",message:`${users[socket.id]}  has left`});
//         console.log(`user left`);
//     })
// });





app.all('*', (req, res, next) => {
    const error = new Error(`The requested url is invalid:  [${req.url}] `)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

