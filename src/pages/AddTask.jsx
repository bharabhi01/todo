import React, { useState } from 'react';
import { addTask, viewTask } from '../actions/task';

const AddTask = (props) => {
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("task: ", task);
        try {
            await addTask(task);
            setTask('');
            await viewTask();

        } catch (error) {
            console.error("Failed to add task:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={task}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;