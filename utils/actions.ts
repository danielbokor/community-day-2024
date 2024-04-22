"use server";

import { revalidatePath } from "next/cache";
import { ITodo } from "../interfaces/todo";

export async function toggleTodo(todo: ITodo) {
  const response = await fetch(
    `https://662662ff052332d55322b769.mockapi.io/todos/${todo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
    }
  );

  revalidatePath("/todos");
}

export async function createTodo(data: FormData) {
  const name = data.get("name");

  await fetch("https://662662ff052332d55322b769.mockapi.io/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      completed: false,
    }),
  });

  revalidatePath("/todos");
}
