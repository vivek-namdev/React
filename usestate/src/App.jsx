import { useState } from "react";
import Counter from "./Counter";
import HideAndSeek from "./HideAndSeek";
import HideAndShow from "./HideAndSeek";
import Left from "./Left";
import Right from "./Right";
import Sidebar from "./Sidebar";

function App() {

  const[text, setText] = useState("");

  return (
      <div className="flex">
      {/* <Sidebar/> */}
      {/* <Counter/> */}
      {/* <HideAndSeek/> */}
      <Left setText={setText}/>
      <Right text={text}/>
      </div>
  );
}

export default App;