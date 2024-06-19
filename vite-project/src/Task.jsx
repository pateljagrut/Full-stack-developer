import { useRef, useState } from "react";

const Task = () => {
    const inputRef = useRef(null)
    const [tasks, setTasks] = useState([])
    const addNewTaskHolder = () => {
        if (!inputRef.current.value.trim()) return alert("Please Enter Your Task");
        const newtask = inputRef.current.value;
        setTasks([...tasks, newtask]);
        inputRef.current.value = "";
    }
    return (
        <>
            <div>
                Example of useRef</div>
            Enter your task
            <input ref={inputRef} /><br />
            <button onClick={addNewTaskHolder}>Add</button>
            {tasks.length === 0 && <p>No Task added</p>}
            <ul>
                {tasks.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
        </>
    )
}
export default Task;
