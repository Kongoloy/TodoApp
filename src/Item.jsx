
export default function Item({ task, checkItem, deleteItem }) {
    return (
        <div className="text-2xl bg-neutral-50 flex justify-between my-8 border-4s cursor-pointer border-slate-950 border-2 border-slate-950">
            <h2 className={`${task.isComplete ? 'line-through p-6 bg-neutral-50 inline-block ' : 'p-6 bg-neutral-50 inline-block'}`} onClick={() => checkItem(task.id)}>{task.task}</h2>
            <span className='inline-block pl-8 py-6 pr-8 bg-neutral-50 border-l-2 border-slate-950' onClick={() => deleteItem(task.id)}>-</span>
        </div>
    )
}