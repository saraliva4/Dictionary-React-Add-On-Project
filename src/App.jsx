import "./App.css";
import Dictionary from "./Dictionary.jsx";

export default function App() {
  return (
    <div className="App container">
      <header>
        <h1 className="text-center m-5">React Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center mt-5">
        <a
          href="https://github.com/saraliva4/Dictionary-React-Add-On-Project"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>{" "}
        by{" "}
        <a href="https://github.com/saraliva4" target="_blank" rel="noreferrer">
          Sara Litauer
        </a>{" "}
        hosted on{" "}
        <a
          href="https://dictionary-react2-project.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
