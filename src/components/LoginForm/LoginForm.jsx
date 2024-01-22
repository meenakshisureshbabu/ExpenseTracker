import React, { useState } from "react";
import "../LoginForm/loginform.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { signIn } from "../../utilities/users-service";

function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(credentials);
      setUser(user);
    } catch {
      setError("Login Failed.. Please try again");
    }
  };

  return (
    <>
      <Header />
      <div className="main-login-div">
        <div className="sub-login-div">
          <div className="login-username-pwd-div">
            <h3>Welcome Back!! </h3>
            <div class="userwrapper">
              <div class="icon">
                <img
                  className="userimage "
                  src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"
                ></img>
              </div>
              <div>
                <input
                  className="userinput"
                  name="email"
                  value={credentials.email}
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="pwdwrapper">
              <div class="icon">
                <img
                  className="pwdimage "
                  src="https://as1.ftcdn.net/v2/jpg/02/22/71/68/1000_F_222716838_hNvaOJGAQmcqKQLT5eQpGGsyiLArv6IT.jpg"
                ></img>
              </div>
              <div>
                <input
                  className="userinput"
                  name="password"
                  value={credentials.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <input
                className="checkbox"
                id="check"
                type="checkbox"
                value={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <label
                for="check"
                className="check"
                style={{ cursor: "pointer" }}
              >
                Show Password
              </label>
            </div>
            <div className="login-button-div">
              <button className="loginbutton" onClick={handleLogin}>
                LOGIN
              </button>
              <Link to="/forgotpwd">
                <a>Forgot Password</a>
              </Link>
            </div>

            <div>
              <h3 className="error-message">{error}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
