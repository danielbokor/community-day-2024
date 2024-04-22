import { NewTodoForm } from "../../components/NewTodoForm";
import { TodosList } from "../../components/TodosList";

export default function TodosPage() {
  return (
    <div>
      <h1>Todos</h1>
      <NewTodoForm />
      <TodosList />
    </div>
  );
}
