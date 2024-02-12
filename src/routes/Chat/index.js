const express = require('express');
//const { Router } = require('express');
const { Server } = require('socket.io');
const http = require("http");
const router = express.Router(); 

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);
});

module.exports = router;