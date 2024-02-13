const express = require('express');
const { getAppointment } = require('../../api/v1/appointment/getAppointment');
const { createBookAppointment } = require('../../api/v1/bookAppointment/createBookAppointment');
const { getDoctorAppointment } = require('../../api/v1/appointment/doctorAppointment');
const router = express.Router();

router.get("/appointment/:email", getAppointment)
router.post("/appointment/bookAppointment",createBookAppointment)
router.get("/appointment/doctor/:email", getDoctorAppointment)

module.exports = router;