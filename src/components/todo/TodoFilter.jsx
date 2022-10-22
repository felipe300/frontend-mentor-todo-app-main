const ButtonItem = ({ changeFilter, filter, type }) => {
  return (
    <button
      className={`${filter === `${type}` ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"} `}
      onClick={() => changeFilter(type)}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  )
}

const TodoFilter = ({ changeFilter, filter, type }) => {
  return (
    <section className="container mx-auto mt-8">
      <div
        className="bg-white text-gray-400 flex gap-4 p-4 justify-center rounded-md"
      >
        <ButtonItem
          changeFilter={changeFilter}
          filter={filter}
          type='all'
        />
        <ButtonItem
          changeFilter={changeFilter}
          filter={filter}
          type='active'
        />
        <ButtonItem
          changeFilter={changeFilter}
          filter={filter}
          type='completed'
        />
      </div>
    </section>
  )
}

export default TodoFilter