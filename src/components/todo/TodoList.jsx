import TodoItem from "./TodoItem"
import { Droppable, Draggable } from "@hello-pangea/dnd"

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className="bg-white rounded-t-md mt-8 transition-all duration-1000 overflow-hidden dark:bg-gray-800">
          {
            todos?.map((todo, index) => {
              return (
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {
                    (draggableProvider) => (
                      <TodoItem
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                      />
                    )
                  }
                </Draggable>)
            })
          }
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TodoList
