const express = require('express');
const { createTip } = require('../../api/v1/tip/createTip');
const router = express.Router()

router.post('/tips', createTip)

module.exports = router