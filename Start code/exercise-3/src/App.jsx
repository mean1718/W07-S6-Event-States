import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = React.useState("");
  const [b, setB] = React.useState("");
  const [result, setResult] = React.useState("");
  const [error, setIsError] = React.useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }

  function onB(event) {
    setB(event.target.value);
  }

  function handleCompute() {
    if (a === "" || b === "" || isNaN(a) || isNaN(b)) {
      setResult("And B should be numbers!");
      setIsError(true);
    } else {
      const sum = Number(a) + Number(b);
      setResult(sum);
      setIsError(false);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={a} onChange={onA} />

      <label>B =</label>
      <input value={b} onChange={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} className={error ? "error" : ""} disabled />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
