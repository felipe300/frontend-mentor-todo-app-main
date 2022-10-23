const TodoComputed = ({ countItemsLeft, clearCompleted }) => {
  return (
    <section className="flex gap-4 p-4 justify-between bg-white rounded-b-md dark:bg-gray-800">
      <span className=" dark:text-gray-400">{countItemsLeft} items left</span>
      <button className=" dark:text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  )
}

export default TodoComputed