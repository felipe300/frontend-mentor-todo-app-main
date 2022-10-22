const TodoFilter = () => {
  return (
    <section className="container mx-auto mt-8">
      <div
        className="bg-white text-gray-400 flex gap-4 p-4 justify-center rounded-md"
      >
        <button className="hover:text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>
  )
}

export default TodoFilter