import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

function Login() {
  const [Email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");
  let navigate = useNavigate();

  const LoginData = async (e) => {
    // console.log("form submited");
    e.preventDefault();
    const User = await fetch("http://localhost:9000/createUser", {
      body: JSON.stringify({
        email: Email,
        password: password,
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      
    })
    
    
    .then((res) => {
      navigate("/");
    })
    
  };

  return (
    <>
      <div className="container flex">
        <div className="row justify-content-center">
          <div className="col-8 col-lg-5 p-5 text-center mt-5  mb-5 fw-bold  text-white bg-dark">
            <h3>Login Here </h3>

            <form method="GET" className="row">
              <div className=" col-12  form-outline text-start">
                <label
                  className="form-label justify-content-start  text-start"
                  htmlFor="form16"
                >
                  Email *
                </label>
                <input
                  value={Email}
                  onChange={(e) => {
                    SetEmail(e.target.value);
                  }}
                  name="Email"
                  type="email"
                  id="form"
                  className="p-2 form-control mx-0 my-2"
                  data-mdb-showcounter="true"
                />
              </div>
              <div className=" col-12  form-outline text-start">
                <label
                  className="form-label justify-content-start  text-start"
                  htmlFor="form16"
                  id="password"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => {
                    Setpassword(e.target.value);
                  }}
                  name="Password"
                  type="password"
                  id="form16"
                  className="p-2 form-control mx-0 my-2"
                  data-mdb-showcounter="true"
                  type="password"
                />
              </div>

              <div className=" col-12  form-outline text-center">
                <button
                  onClick={(e) => {
                    LoginData(e);
                  }}
                  className="btn btn-lg d-grid col-6 mx-auto btn-outline-primary p-2 mx-3 btn-lg mt-4 mb-4 rounded-pill"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="dropdown-divider"></div>
            <a onClick={() => navigate("/SignUp")} className="   text-white">
              Not Have A Account?Sign Up
            </a>
            <div className="dropdown-divider"></div>
            <a className="text-white">Forgot password?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
