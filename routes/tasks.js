const express = require('express');
const { getAllTasks, createData, singleTask, updateData, deleteSingleTask } = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks).post(createData);
router.route('/:id').get(singleTask).patch(updateData).delete(deleteSingleTask);

module.exports = router;