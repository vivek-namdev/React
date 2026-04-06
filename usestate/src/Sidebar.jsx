import { useState } from "react";

const Sidebar = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <aside 
      onMouseEnter={() => setIsSideBarOpen(true)}
      onMouseLeave={() => setIsSideBarOpen(false)}
      className={`w-[5vw] h-[48vw] bg-yellow-200 gap-4 flex flex-col items-center transition-all 
      ${isSideBarOpen ? "w-[20vw]" : "w-[5vw]"}`}
    >

      <p>
        <span>🏠</span>{isSideBarOpen && "Home"}
      </p>

      <p>
        <span>🧑‍💻</span>{isSideBarOpen && "Code"}
      </p>

      <p>
        <span>📝</span>{isSideBarOpen && "Media"}
      </p>

    </aside>
  )
}

export default Sidebar;