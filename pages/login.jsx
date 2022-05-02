import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container card authcard center-align">
      <h1>Login</h1>
      <form>
      <input
        type="text"
        placeholder="email"
        value={name}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={name}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn waves-effect waves-light #1565c0 blue darken-3"
        type="submit">
      Login <i className="material-icons right">forward</i>
      </button>
      <Link href="/signup"><a><h5>Dont have an account ? </h5></a></Link>
      
      </form>
    </div>
  );
};

export default Login;
