import { useState } from "react"

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(title)
    if (!title.trim()) return setTitle('')

    createTodo(title)
    setTitle('')
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex items-center bg-white rounded-md overflow-hidden gap-4 p-4 dark:bg-gray-800 transition-all duration-1000"
    >
      <span className="rounded-full border-2 w-6 h-6 inline-block dark:border-gray-700"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full outline-none text-gray-400 dark:bg-gray-800 transition-all duration-1000"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default TodoCreate