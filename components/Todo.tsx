"use client";

import { useTransition } from "react";
import { ITodo } from "../interfaces/todo";
import { toggleTodo } from "../utils/actions";

interface ITodoProps {
  todo: ITodo;
}

export function Todo({ todo }: ITodoProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      toggleTodo(todo);
    });
  }

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onClick={handleClick} />
      <span className={`${todo.completed ? "line-through" : ""}`}>
        {todo.name}
      </span>
    </div>
  );
}
