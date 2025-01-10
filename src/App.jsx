import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-6xl text-green-500">Welcome to the Friends Zone</h1>
      <div className="space-x-3 mt-10">
        <button className="btn">
          {" "}
          <Link to="/friends">All Friends</Link>
        </button>
        <button className="btn">
          {" "}
          <Link to="/signup">SignUp</Link>
        </button>
        <button className="btn">
          {" "}
          <Link to="/signin">SignIn</Link>
        </button>
      </div>
    </>
  );
}

export default App;
