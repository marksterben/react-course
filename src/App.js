import Paper from "./components/Paper";
import "./styles.css";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-black-color">Add</button>
        <h1 className="header-title">todo list</h1>
        <button className="header-btn main-red-color">Clear</button>
      </section>

      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Belajar Bohong</span>
        </div>

        <div className="todo">
          <span className="todo-text">Belajar Nipu</span>
        </div>

        <div className="todo">
          <span className="todo-text">Belajar Terus Capek</span>
        </div>
      </section>
    </Paper>
  );
}
