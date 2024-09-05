const express = require('express');
const authenticate = require('../middleware/auth')
const {createTask, updateTasks, getTasks, deleteTasks} = require('../controllers/taskController')

const router = express.Router();

router.post('/', authenticate, createTask)

router.put('/:id', authenticate, updateTasks)


router.delete('/:id', authenticate, deleteTasks)

router.get('/', authenticate, getTasks)

module.exports = router;
