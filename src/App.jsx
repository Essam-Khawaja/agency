import Nav from "./components/Nav";
import Home from "./components/Home";
import Landing from "./components/Landing";
import { useRef } from "react";
import "./app.css";
import StickyCursor from "./components/StickyCursor";

function App() {
  return (
    <div>
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
