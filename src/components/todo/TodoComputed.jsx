const TodoComputed = ({ countItemsLeft, clearCompleted }) => {
  return (
    <section className="flex gap-4 p-4 justify-between bg-white rounded-b-md">
      <span className="text-gray-400">{countItemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  )
}

export default TodoComputed