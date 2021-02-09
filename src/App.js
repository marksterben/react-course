import Header from "./components/Header";
import Paper from "./components/Paper";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./styles.css";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
}
