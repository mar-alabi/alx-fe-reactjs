import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WelcomeMessage />
    </>
  );
}

export default App;
