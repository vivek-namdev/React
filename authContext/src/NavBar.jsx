import { useContext } from "react";
import { AuthContext } from "./components/AuthContext.jsx";

function Navbar() {
  const { user, login, logout } =
    useContext(AuthContext);

  return (
    <nav>
      <h2>My App</h2>

      {user ? (
        <>
          <span>
            Welcome, {user.name}
          </span>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() =>
            login({
              id: 1,
              name: "Vivek",
              email: "vivek@gmail.com",
            })
          }
        >
          Login
        </button>
      )}
    </nav>
  );
}

export default Navbar;