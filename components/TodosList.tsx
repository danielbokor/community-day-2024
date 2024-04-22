import { ITodo } from "../interfaces/todo";
import { Todo } from "./Todo";

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchTodos() {
  // await wait(1000);
  const response = await fetch(
    "https://662662ff052332d55322b769.mockapi.io/todos"
  );
  return response.json();
}

export async function TodosList() {
  const todos: ITodo[] = await fetchTodos();

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
