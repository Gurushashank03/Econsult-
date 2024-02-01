const express = require('express')
const { createDoctors } = require('../../api/v1/doctors/createDoctors')
const router = express.Router()

router.post('/doctors/createDoctors',createDoctors)

module.exports = router