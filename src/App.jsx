import "./App.css";
import Dictionary from "./Dictionary.jsx";

export default function App() {
  return (
    <div className="App container">
      <header>
        <h1>React Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>Coded by Sara Littauer</footer>
    </div>
  );
}
