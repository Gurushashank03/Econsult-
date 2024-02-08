const express = require('express');
const { getAppointment } = require('../../api/v1/appointment/getAppointment');
const { createBookAppointment } = require('../../api/v1/bookAppointment/createBookAppointment');
const router = express.Router();

router.get("/appointment/:email", getAppointment)
router.post("/appointment/bookAppointment",createBookAppointment)

module.exports = router;