import { useRef } from "react";

import Form from "react-bootstrap/Form";

import { verifyUser } from "../../data/users";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const clearFields = () => {
    userRef.current.value = "";
    passRef.current.value = "";
    userRef.current.focus();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Form.Label htmlFor="username">
          <span className="bi bi-person badge bg-dark">&nbsp;Username</span>
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="user"
          style={{ textAlign: "center" }}
          ref={userRef}
        />
        <Form.Label htmlFor="password">
          <span className="bi bi-lock badge bg-dark">&nbsp;Password</span>
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="pass"
          style={{ textAlign: "center" }}
          ref={passRef}
        />
      </div>
      <button
        className="clear-button btn btn-danger mt-3 ms-2"
        onClick={clearFields}
      >
        <span className="clear-text">Clear</span>
      </button>

      <button
        className="login-button btn btn-primary mt-3 ms-2"
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          userRef.current.value = "";
          passRef.current.value = "";
          const userInfo = verifyUser(user, pass);
          if (userInfo === null) {
            alert("Wrong username or password");
            userRef.current.focus();
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        <span className="login-text">Login</span>
      </button>
    </div>
  );
}

export default Login;
