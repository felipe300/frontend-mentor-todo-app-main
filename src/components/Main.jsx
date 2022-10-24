import { useEffect, useState } from "react"

import Header from "../components/Header"
import TodoCreate from "../components/todo/TodoCreate"
import TodoList from "../components/todo/TodoList"
import TodoFilter from "../components/todo/TodoFilter"
import TodoComputed from "../components/todo/TodoComputed"

import { DragDropContext } from "@hello-pangea/dnd"

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const Main = () => {
  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: `${Date.now()}`,
      title: title.trim(),
      complete: false
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const countItemsLeft = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter] = useState('all')
  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    if (filter === 'all') return todos
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed)
    }
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed)
    }
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result
    if (!destination) return
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    )
  }

  return (
    <div
      className="bg-mobile-light dark:bg-mobile-dark bg-gray-300 bg-no-repeat bg-contain min-h-screen dark:bg-gray-900 transition-all duration-1000 md:bg-desktop-light md:dark:bg-desktop-dark"
    >
      <Header />
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          {/* <DragDropContext> */}
          <TodoList
            todos={filteredTodos()}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        </DragDropContext>
        <TodoComputed
          countItemsLeft={countItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter
          changeFilter={changeFilter}
          filter={filter}
        />
      </main>
      <p className="text-center mt-8 text-gray-400 dark:text-gray-700">Drag and drop to reorder list</p>
    </div>
  )
}

export default Main
