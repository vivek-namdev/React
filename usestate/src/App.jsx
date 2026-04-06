import Counter from "./Counter";
import HideAndSeek from "./HideAndSeek";
import HideAndShow from "./HideAndSeek";
import Sidebar from "./Sidebar";

function App() {

  return (
    <div>

      <div className="flex">
      <Sidebar/>
      {/* <Counter/> */}
      <HideAndSeek/>
      </div>
      
    </div>
  );
}

export default App;