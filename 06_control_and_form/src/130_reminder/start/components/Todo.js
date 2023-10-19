import { useState } from "react";

import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [todos, setTodos] = useState(todosList);

  // 完了ボタンを押すと消える→押した時のidと一致しないものがnewTodoに入る
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  // 新しいtodoを追加→todosの配列の末尾にtodoを追加
  const creatTodo = (todo) => {
    setTodos([...todos, todo]);
  }
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form creatTodo={creatTodo} />
    </>
  )
};
export default Todo;