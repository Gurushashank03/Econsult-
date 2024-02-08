const express = require('express')
const { createDoctors } = require('../../api/v1/doctors/createDoctors')
const { getDoctors } = require('../../api/v1/doctors/getDoctors')
const { getDoctorsCategory } = require('../../api/v1/doctors/getDoctorsCategory')
const router = express.Router()

router.post('/doctors/createDoctors',createDoctors)
router.get('/doctors',getDoctors)
router.get('/doctorsHealthCategory',getDoctorsCategory)
module.exports = router