import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { TiArrowSync } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
// import user, { findOne } from "../../../Backend/src/models/user";
function SignUp() {
  let navigate = useNavigate();
  const [FirstName, SetFirstname] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Repassword, SetRepassword] = useState("");
  const [Phone, Setphone] = useState("");
  const SignUpData = async (e) => {
    // console.log("form submited");
    e.preventDefault();
    const User = await fetch("http://localhost:9000/createUser", {
      body: JSON.stringify({
        username: `${FirstName} ${LastName}`,
        email: Email,
        password: Password,
        Phone: Phone,
      }),
      
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
    })

    
      .then((res) => {
        // console.log("hello");
        //if (res.success) {
        // res.redirect("/Login");
        // alert("Register Succesfully");
        //}
        
      })
      .then((res) => {
        const pattern = new RegExp("([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+");
        // const Emailpattern = new RegExp(
        //   "notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"
        // );
        const PasswordPattern = new RegExp(
          "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
        );
        if (!pattern.test(FirstName)) {
          SetFirstname("Invalid Name");
          // console.log("false");
        } else if (!pattern.test(LastName)) {
          SetLastName("Invalid Name");
          // console.log("false");
          // } else if (!Emailpattern.test(Email)) {
          //   SetEmail("Invalid Email");
          //   // console.log("false");
          // } else if (!PasswordPattern.test(Password)) {
          //   SetPassword("Invalid Email");
          //   console.log("false");
          // } else if (!Password.test(Repassword)) {
          //   SetRepassword("NOt confirm password");
        } else {
          navigate("/login");
        }
        
      });
    // console.log("true");
    // }
  };
  return (
    <div className="container flex needs-validation">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 p-5 text-center mt-5  mb-5 fw-bold  text-white bg-dark">
          <h3>Sign Up Here </h3>

          <form className="row">
            <div className=" col-6  form-outline text-start">
              <label
                className="form-label justify-content-start mt-5 text-start"
                htmlFor="form16"
              >
                First Name
              </label>
              <input
                name={FirstName}
                value={FirstName}
                onChange={(e) => {
                  SetFirstname(e.target.value);
                }}
                type="text"
                id="form11"
                className="input p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div className=" col-6  form-outline text-start">
              <label className="form-label  mt-5 text-start" htmlFor="form16">
                Last Name
              </label>
              <input
                value={LastName}
                onChange={(e) => {
                  SetLastName(e.target.value);
                }}
                type="text"
                id="form12"
                className="p-2 justify-content-center form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
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
                type="text"
                id="form13"
                className="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div className=" col-6  form-outline text-start">
              <label
                className="form-label justify-content-start  text-start"
                htmlFor="form16"
              >
                Password
              </label>
              <input
                value={Password}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
                type="password"
                id="form14"
                className="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div className=" col-6  form-outline text-start">
              <label
                className="form-label justify-content-start  text-start"
                htmlFor="form16"
              >
                Re-Enter Password
              </label>
              <input
                value={Repassword}
                onChange={(e) => {
                  SetRepassword(e.target.value);
                }}
                type="password"
                id="form15"
                className="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div className=" col-12  form-outline text-start">
              <label
                className="form-label justify-content-start  text-start"
                htmlFor="form16"
              >
                Phone Number
              </label>
              <input
                value={Phone}
                onChange={(e) => {
                  Setphone(e.target.value);
                }}
                type="text"
                id="form16"
                className="p-2 form-control mx-0 my-2"
                data-mdb-showcounter="true"
              />
            </div>
            <div className="dropdown-divider"></div>
            <a className="text-white">You also sign Up Socail Media</a>
            <div className=" col-12  form-outline text-center">
              <button className="btn btn-lg d-grid col-6 btn-primary btn-lg mt-4">
                <span className="flex justify-content-center align-items-center text-white">
                  <BsFacebook />
                  acebook
                </span>
              </button>
            </div>
            <div className=" col-12  form-outline text-center">
              <button className="btn btn-lg d-grid col-6 btn-light btn-lg mt-4">
                <span className="text-dark">
                  {" "}
                  <FcGoogle />
                  oogle
                </span>
              </button>
              <button className="btn btn-lg d-grid col-6 btn-danger btn-lg mt-4">
                <span className="text-white">
                  <BsInstagram /> Instagram
                </span>
              </button>
            </div>
            <div className=" col-12  form-outline text-start">
              <div className=" col-12  form-outline text-center">
                <button
                  onClick={(e) => {
                    SignUpData(e);
                  }}
                  // onClick={() => navigate("/Login")}
                  className="btn btn-lg d-grid col-6 mx-auto btn-outline-primary p-2 mx-3 btn-lg mt-5 mb-5 rounded-pill "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="dropdown-divider"></div>
          <a onClick={() => navigate("/Login")} className="text-white">
            Already Have A Account?Login Here?
          </a>
          <div className="dropdown-divider"></div>
          <a className="text-white">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
