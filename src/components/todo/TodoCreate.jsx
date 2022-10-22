const TodoCreate = () => {
  return (
    <form
      className="mt-8 flex items-center bg-white rounded-md overflow-hidden gap-4 p-4"
    >
      <span className="rounded-full border-2 w-6 h-6 inline-block"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full outline-none text-gray-400"
      />
    </form>
  )
}

export default TodoCreate