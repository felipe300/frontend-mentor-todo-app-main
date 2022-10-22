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
      className="mt-8 flex items-center bg-white rounded-md overflow-hidden gap-4 p-4"
    >
      <span className="rounded-full border-2 w-6 h-6 inline-block"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full outline-none text-gray-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default TodoCreate