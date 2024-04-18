const express = require('express');
const router = express.Router()
const {getAllUsers, getSingleUser, createNewUser, updateAUser, deleteAUser } = require("../controllers/userController")

router.route('/users').get(getAllUsers).post(createNewUser)
router.route('/users/:id').get(getSingleUser).put(updateAUser).delete(deleteAUser)

module.exports = router