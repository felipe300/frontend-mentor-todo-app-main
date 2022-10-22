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

  return (
    <div
      className="bg-[url('/images/bg-mobile-light.jpg')] bg-gray-300 bg-no-repeat bg-contain min-h-screen"
    >
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>
      <p className="text-center mt-8 text-gray-400">Drag and drop to reorder list</p>
    </div>
  )
}

export default Main
