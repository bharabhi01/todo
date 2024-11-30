import React, { useState, useEffect } from 'react';
import { viewTask } from '../actions/task';

const ViewTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await viewTask();
            setTasks(tasks);
        }
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>View Task</h1>
            <div>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <h2>{task.task}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewTask;