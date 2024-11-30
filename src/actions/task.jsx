import axios from 'axios';

export const addTask = async (task) => {
    console.log("task here: ", task);
    try {
        const response = await axios.post("http://localhost:8080/api/addtask", { task });
        console.log("response: ", response);
        return response.data;
    } catch (error) {
        console.error("Error adding task: ", error);
        throw error;
    }
}

export const viewTask = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/viewtask");
        return response.data;
    } catch (error) {
        console.error("Error viewing task: ", error);
        throw error;
    }
}