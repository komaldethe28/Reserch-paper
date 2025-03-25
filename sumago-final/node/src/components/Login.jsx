import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
 
} from "mdb-react-ui-kit";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // alert("Login successful");
      console.log("Login successful");
      navigate("/Home");
    } else {
      alert("Invalid Credentials");
      console.error("Error logging in");
    }
  };

  return (
    <div>

      
      <h2 className="Lgn">Faculty Paper Publication Data Collection</h2>

      <MDBContainer fluid className="p-3 my-4">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className=" d-flex align-items-center justify-content-center w-100">
              <div className="login">
                <h2 className="mb-3">Login Form</h2>
                <form className='needs-validation' onSubmit={(e) => { e.preventDefault();  HandleLogin(); }}>
                  <div className="form-group was-validated mb-2">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    ></input>
                    <div className="invalid-feedback">
                      please enter your email
                    </div>
                  </div>
                  <div className="form-group was-validated mb-2">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    ></input>
                    <div className="invalid-feedback">
                      please enter your password
                    </div>
                  </div>
                  <div className="form-group form-check mb-2">
                    <input type="checkbox" className="form-check-input"></input>
                    <label htmlFor="check" className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  {/* onClick={()=>{Navigate('/Home')} */}
                  <button
                    type="submit"
                    className="btn btn-success block w-100 mt-2"
                 
                  >
                    Sign in
                  </button>
                  {/* <MDBBtn className='mb-4' size='lg' onClick={handleLogin}>Sign In</MDBBtn> */}

                  <div className="text-center">
                    <p style={{ marginTop: "10px" }}>
                      Not a member? <Link to="/Newregister">SignUp</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
