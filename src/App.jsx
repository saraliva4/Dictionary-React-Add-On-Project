import "./App.css";
import Dictionary from "./Dictionary.jsx";

export default function App() {
  return (
    <div className="App container">
      <header>
        <h1 className="text-center">React Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by Sara Littauer</footer>
    </div>
  );
}
