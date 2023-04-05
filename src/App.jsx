import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <h1 className="text-7xl text-purple-400">hello Tailwind</h1>
      </div>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
