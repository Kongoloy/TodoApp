import { useState } from "react"
import AddTodo from "./AddTodo"
import Item from "./Item"
export default function TodoList() {
    const [tasks, setTasks] = useState([])

    function addTask(taskName) {
        setTasks([...tasks, {
            id: crypto.randomUUID(),
            task: taskName,
            isComplete: false,
        }])
        console.log(tasks)
    }
    function checkItem(id) {
        setTasks(tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task))
    }
    function deleteItem(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <div>
            <AddTodo addTask={addTask} />
            {tasks.map((item, index) => (
                <Item task={item} key={index} checkItem={checkItem} deleteItem={deleteItem} />
            ))}
        </div>
    )
}