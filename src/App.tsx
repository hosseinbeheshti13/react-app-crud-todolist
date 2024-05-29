import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoValue, setTodoValue] = useState<string>("");

  function handleAddTodos(newTodo: string) {
    const newTodoList: string[] = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index: number) {
    const newTodoList: string[] = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index: number) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  function persistData(newList: string[]) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
    <h2 className="app-title">To Do App</h2>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      ></TodoInput>
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodos={handleDeleteTodos}
        todos={todos}
      ></TodoList>
    </>
  );
}

export default App;
