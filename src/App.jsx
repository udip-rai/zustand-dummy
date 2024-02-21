import "./App.css";
import { useStore } from "./hooks/useBear";

const App = () => {
  const { bears, increasePopulation, decreasePopulation } = useStore();

  return (
    <>
      <h1>{bears} around here...</h1>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={increasePopulation}>one up</button>
        <button onClick={decreasePopulation}>one down</button>
      </div>
    </>
  );
};

export default App;
