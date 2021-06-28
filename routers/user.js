const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, getUser, upgradeUser, deleteUser } = require('../controllers/user')

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUser).patch(upgradeUser).delete(deleteUser)

module.exports = router