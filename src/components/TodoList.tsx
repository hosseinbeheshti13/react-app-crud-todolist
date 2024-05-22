import TodoCard from "./TodoCard";

interface Props {
  todos: string[];
  handleDeleteTodos: (index: number) => void;
  handleEditTodo: (index: number) => void;
}

export default function TodoList(props:Props) {
  const { todos} = props;
  return (
    <ul className="todo-list list-group">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} index={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
