import CrossIcon from '../icons/CrossIcon'

const TodoItem = () => {
  return (
    <article className="flex gap-4 p-4 border-b border-b-gray-300">
      <button className="rounded-full border-2 w-6 h-6 inline-block flex-none"
      ></button>
      <p className="text-gray-600 grow">Complete course</p>
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  )
}

export default TodoItem