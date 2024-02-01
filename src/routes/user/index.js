
const express = require('express')
const { createUser } = require('../../api/v1/user/createUser')
const { getUsers } = require('../../api/v1/user/getUser')
const { getIndividualUsers } = require('../../api/v1/user/getIndividualUser')
const { updateIndividualUsers } = require('../../api/v1/user/updateIndividualUser')
const router = express.Router()

router.post('/users/createUser', createUser)
router.get('/users', getUsers)
router.get('/users/:email',getIndividualUsers)
router.put('/users/:id',updateIndividualUsers)

module.exports = router