const express = require('express')
const { createDoctors } = require('../../api/v1/doctors/createDoctors')
const { doctorRole } = require('../../api/v1/doctors/doctorRole')
const { getIndividualDoctor } = require('../../api/v1/doctors/getIndivitualDoctor')
const { updateDoctor } = require('../../api/v1/doctors/updateDoctor')
const router = express.Router()

router.post('/doctors/createDoctors',createDoctors)
router.get("/doctors/:email" , doctorRole)
router.get("/doctor/:email" , getIndividualDoctor)
router.put('/doctor/:email',updateDoctor)


module.exports = router