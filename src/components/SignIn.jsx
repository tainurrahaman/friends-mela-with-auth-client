import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const { friendLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateFriend = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    friendLogin(email, password)
      .then((result) => {
        console.log(result.user);

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const newFriend = { email, lastSignInTime };

        fetch("https://friends-mela-with-auth-server.vercel.app/friends", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newFriend),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();
            navigate("/friends");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <button className="btn mb-5">
            <Link to="/">Home</Link>
          </button>
          <h1 className="text-5xl text-center font-bold">SignIn now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateFriend} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignIn</button>
            </div>
            <p>
              If new friend , Pls{" "}
              <Link className="btn" to="/signup">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
