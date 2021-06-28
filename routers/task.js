const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getTask, upgradeTasks, deleteTask} = require('../controllers/task')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(upgradeTasks).delete(deleteTask)

module.exports = router