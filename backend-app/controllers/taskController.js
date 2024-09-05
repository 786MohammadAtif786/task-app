const Task = require("../models/Task");

const response = require('../utils/response');

exports.createTask = async (req, res) => {
 

    const { title } = req.body;

    console.log('rq==>', req.userId);
    try {
      const task = new Task({ title,  userId: req.userId  });
      await task.save();
      return response(res, true, task, "Task created successfully.", 201);
    } catch (error) {
      console.log(error);
      return response(res, false, null, "Internal server error", 500);
    }
};


exports.getTasks = async (req, res) => {

  try {
    const tasks = await Task.find({ userId: req.userId });
    res.send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.updateTasks = async (req, res) => {
  
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.params.id, userId: req.userId },
        req.body,
        { new: true }
      );
      if (!task) return response(res, false, null, "Task not found", 404);
      res.send(task);
    } catch (error) {
      res.status(400).send(error);
    }

};


exports.deleteTasks = async (req, res) => {
  
    try {
      const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
      if (!task) {
        return response(res, false, null, "Task not found", 404);
      }
      return response(res, false, null, "Task deleted successfully", 200);
     
    } catch (error) {
      return response(res, false, null, "Internal server error", 500);
    }
}