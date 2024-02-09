const express = require('express');
const { applyMiddleware } = require('./middlewares/applyMiddleware');
require('dotenv').config();
const authenticationRoutes = require('./routes/authentication/index');
const userRoutes = require('./routes/user/index');
const doctorRequestRoutes = require('./routes/DoctorRequest/index');
const doctorRoutes = require('./routes/Doctor/index');
const connectDB = require("./db/client")
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/payment/index');
const commentRoutes = require('./routes/comments/index')
const appointmentRoutes = require('./routes/appointment/index')

const tipsRoutes = require('./routes/tip/index')
const { Server } = require('socket.io');
const http = require("http");
const cors = require("cors");


const port = process.env.PORT || 5000
const app = express()




applyMiddleware(app);
app.use(cors());
app.use(authenticationRoutes)
app.use(userRoutes)
app.use(doctorRequestRoutes)
app.use(doctorRoutes)
app.use(paymentRoutes)
app.use(appointmentRoutes)
app.use(tipsRoutes)

const main = async () => {
    // connecting to database
    // console.log("Connecting to database...");
    await connectDB();
    console.log("Connected to database!", mongoose.connection.name);
    server.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
        console.log(clientLink)
        console.log(serverLink)
    })

}
main();


const server = http.createServer(app);
const io = new Server(server,
    {
        cors: {
            origin: ["http://localhost:5173", "https://virtual-doc-site.web.app"],
            methods: ["GET", "POST"],
            credentials: true,
        },
    }
);

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});



app.get('/health', (req, res) => {
    res.send('Server is running.')
})

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





