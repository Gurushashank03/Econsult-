const express = require('express')
const { createDoctors } = require('../../api/v1/doctors/createDoctors')

const { doctorRole } = require('../../api/v1/doctors/doctorRole')
const { getIndividualDoctor } = require('../../api/v1/doctors/getIndivitualDoctor')
const { updateDoctor } = require('../../api/v1/doctors/updateDoctor')
const router = express.Router()

router.post('/doctors/createDoctors',createDoctors)


module.exports = router