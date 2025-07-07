import React from "react";
import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => onToggle(todo.id);

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={handleToggle}
    >
      <button
        className={`custom-checkbox ${todo.completed ? "checked" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
        aria-label={todo.completed ? "Unmark todo" : "Mark todo as completed"}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      <span>{todo.text}</span>

      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        aria-label="Delete todo"
      >
        &#10005;
      </button>
    </li>
  );
};

export default TodoItem;
