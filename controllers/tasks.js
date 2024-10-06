const Task = require('../model/task')
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ Length: tasks.length, tasks });
  } catch (error) {
    res.send({ status: failed, msg: "value not found." });
  }
};
const createData = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.errors.name });
  }
};
const updateData = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task found by ${taskId}` });
    }
    res.status(200).json({ task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const singleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task found by ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task found by ${taskId}` });
    }
    res.status(200).json({ msg: `${taskId} delete succesfull..` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {getAllTasks,createData,updateData,singleTask,deleteSingleTask}