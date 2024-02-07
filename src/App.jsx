import TodoList from './TodoList'
import './App.css'
function App() {

  return (
    <>
      <div className='flex font-bold justify-center h-screen bg-indigo-950'>
        <div>
          <h1 className='block text-center text-neutral-50 text-5xl p-8'>To do App</h1>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
