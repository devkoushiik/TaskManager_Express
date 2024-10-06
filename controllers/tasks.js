const Task = require('../model/task')
const getAllTasks = (req,res) => {
    res.send('all items');
}
const createData = async (req,res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}
const updateData = (req,res) => {
    res.send('update data');
}
const singleTask = (req,res) => {
    res.send('get single task');
}
const deleteSingleTask = (req,res) => {
    res.send('deleteSingleTask');
}

module.exports = {getAllTasks,createData,updateData,singleTask,deleteSingleTask}