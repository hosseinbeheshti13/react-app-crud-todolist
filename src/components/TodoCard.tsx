import React from 'react';
interface Props {
  children ?: React.ReactNode;
  handleDeleteTodos: (index: number) => void;
  index: number;
  handleEditTodo: (index: number) => void;
}

export default function TodoCard(props: Props) {
  const { children, handleDeleteTodos, index, handleEditTodo } = props;
  return (
    <li className="todoItem list-group-item d-flex">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
