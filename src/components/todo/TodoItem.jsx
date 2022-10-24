import React from 'react'
import IconCheck from '../icons/IconCheck'
import IconCross from '../icons/IconCross'

const TodoItem = React.forwardRef(({ todo, updateTodo, removeTodo, ...props }, ref) => {
  const { id, completed, title } = todo
  
  return (
    <article ref={ref} {...props} className="flex gap-4 p-4 border-b border-b-gray-300">
      <button className={`rounded-full border-2 w-6 h-6 flex-none dark:border-gray-700 ${completed ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-indigo-300 dar:via-purple-300 dark:to-pink-300 grid place-items-center' : 'inline-block'}`}
        onClick={() => updateTodo(id)}
      >
        {
          completed && <IconCheck />
        }
      </button>
      <p className={`text-gray-600 dark:text-gray-400 grow ${completed && 'line-through'}`}>{title}</p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  )
})

export default TodoItem
