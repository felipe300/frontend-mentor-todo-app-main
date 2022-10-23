import { useState } from "react"

import Header from "../components/Header"
import TodoCreate from "../components/todo/TodoCreate"
import TodoList from "../components/todo/TodoList"
import TodoFilter from "../components/todo/TodoFilter"
import TodoComputed from "../components/todo/TodoComputed"

const initialStateTodos = [
  { id: '1', title: 'Learn JS', completed: false },
  { id: '2', title: 'Learn TS', completed: true },
  { id: '3', title: 'Learn Astro', completed: false },
  { id: '4', title: 'Learn CSS', completed: false },
]

const Main = () => {
  const [todos, setTodos] = useState(initialStateTodos)

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


  return (
    <div
      className="bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] bg-gray-300 bg-no-repeat bg-contain min-h-screen dark:bg-gray-900"
    >
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filteredTodos()}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
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
