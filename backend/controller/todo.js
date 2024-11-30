const Task = require('../models/taskmodel');

exports.addtask = async (req, res) => {
    const { task } = req.body;
    console.log("task: ", task);
    try {
        const newTask = new Task({ task });
        await newTask.save();
        res.status(201).json({ message: "Task added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.viewtask = async (req, res) => {
    try {
        const tasks = await Task.find({}, { task: 1, _id: 0 });
        console.log("tasks: ", tasks);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};