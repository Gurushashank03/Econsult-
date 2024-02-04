const express = require('express');
const { getAppointment } = require('../../api/v1/appointment/getAppointment');
const router = express.Router();

router.get("/appointment/:email", getAppointment)

module.exports = router;