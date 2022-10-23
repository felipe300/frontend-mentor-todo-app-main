import TodoItem from "./TodoItem"

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <div className="bg-white rounded-t-md mt-8 transition-all duration-1000">
      {
        todos?.map((todo) => {
          return <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        })
      }
    </div>
  )
}

export default TodoList
