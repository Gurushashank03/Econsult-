const express = require('express')
const { createDoctors } = require('../../api/v1/doctors/createDoctors')

const { doctorRole } = require('../../api/v1/doctors/doctorRole')
const { getIndividualDoctor } = require('../../api/v1/doctors/getIndivitualDoctor')
const { updateDoctor } = require('../../api/v1/doctors/updateDoctor')
const { getDoctors } = require('../../api/v1/doctors/getDoctors')
const { getDoctorsCategory } = require('../../api/v1/doctors/getDoctorsCategory')
<<<<<<< HEAD
const { getDoctorAppointment } = require('../../api/v1/appointment/getDoctorAppointment')
=======
const { deleteDoctor } = require('../../api/v1/doctors/deleteDoctor')
>>>>>>> c0c2baf46d815e6cc56187f74ff4828065fbfabb
const router = express.Router()

router.get('/doctors',getDoctors)
router.get('/doctorsHealthCategory',getDoctorsCategory)
router.post('/doctors/createDoctors',createDoctors)
router.get("/doctors/:email" , doctorRole)
router.get("/doctor/:email" , getIndividualDoctor)
router.get("/doctors" , getDoctors)
router.get("/doctorsHealthCategory" , getDoctorsCategory)
router.put('/doctor/:email',updateDoctor)
<<<<<<< HEAD
router.get('/doctorAppointment/:email',getDoctorAppointment)
=======
router.delete("/doctor/:id", deleteDoctor)
>>>>>>> c0c2baf46d815e6cc56187f74ff4828065fbfabb

module.exports = router