const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser')
const { LOCAL_CLIENT, NORMAL_CLIENT } = require('../config/default')


const applyMiddleware = (app) => {
    app.use(cors({
        origin: '*',
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }))

    app.use(express.json())
    app.use(cookieParser())
}

module.exports = { applyMiddleware };