import { useState } from "react";
import "./App.css";

function Counter({ title, initialCount }) {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(initialCount);
  }

  return (
    <div className="counter-card">
      <h2>{title}</h2>

      <div className="count-display">{count}</div>

      <div className="button-group">
        <button className="decrement" onClick={decrement}>
          − Decrease
        </button>

        <button className="increment" onClick={increment}>
          + Increase
        </button>
      </div>

      <button className="reset" onClick={reset}>
        Reset
      </button>

      <p className="initial-text">
        Starting count: {initialCount}
      </p>
    </div>
  );
}

function App() {
  return (
    <main className="app-container">
      <header>
        <p className="subtitle"><b><u>React Mini Project</u></b></p>
        <h1>Interactive Counter App</h1>
        <p className="description">
          Manage your counts with simple interactive controls.
        </p>
      </header>

      <section className="counter-container">
        <Counter title="Counter One" initialCount={0} />
        <Counter title="Counter Two" initialCount={5} />
      </section>

      <footer>Built with React and useState</footer>
    </main>
  );
}

export default App;
