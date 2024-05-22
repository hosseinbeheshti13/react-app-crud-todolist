interface Props {
  handleAddTodos: (index: string) => void;
  todoValue: string;
  setTodoValue: (item: string) => void;
}

export default function TodoList(props: Props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        type="text"
        placeholder="write"
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        add
      </button>
    </header>
  );
}
