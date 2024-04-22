import { createTodo } from "../utils/actions";

export function NewTodoForm() {
  return (
    <form action={createTodo}>
      <input
        type="text"
        placeholder="New Todo"
        name="name"
        className="border border-black"
      />
      <button type="submit">Add</button>
    </form>
  );
}
