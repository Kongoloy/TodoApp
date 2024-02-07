import { useState } from "react";


export default function AddTodo({ addTask }) {
    const [item, setItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (item !== '') {
            addTask(item);
        } else {
            window.alert('Must type something!')
        }

        setItem('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='p-4 text-2xl border' placeholder="Add a new todo!" value={item} type="text" onChange={(e) => setItem(e.target.value)} />
            <button className='p-4 text-2xl bg-white border-2 border-slate-700' type="submit" >+</button>
        </form>
    )
}