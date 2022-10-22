import IconCheck from '../icons/IconCheck'
import IconCross from '../icons/IconCross'

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
  const { id, completed, title } = todo
  return (
    <article className="flex gap-4 p-4 border-b border-b-gray-300">
      <button className={`rounded-full border-2 w-6 h-6 flex-none ${completed ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center' : 'inline-block'}`}
        onClick={() => updateTodo(id)}
      >
        {
          completed && <IconCheck />
        }
      </button>
      <p className={`text-gray-600 grow ${completed && 'line-through'}`}>{title}</p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  )
}

export default TodoItem
