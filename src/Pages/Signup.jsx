import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [ErrMsg, SetErrMsg] = useState(false);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // if (
    //   name === "firstname" &&
    //   value?.match(/^[a-zA-Z]*$/) &&
    //   value?.length <= 10
    // ) {
    //   setData({
    //     ...data,
    //     [name]: value.replace(/[`~!$%^@*()_|+\=?;:/#.&,'"<>\{\}\[\]\\]/gi, ""),
    //   });
    // }
    // if (
    //   name === "lastname" &&
    //   value?.match(/^[a-zA-Z]*$/) &&
    //   value?.length <= 10
    // ) {
    //   setData({
    //     ...data,
    //     [name]: value.replace(/[`~!$%^@*()_|+\=?;:/#.&,'"<>\{\}\[\]\\]/gi, ""),
    //   });
    // }
    // if (
    //   name === "firstname" &&
    //   value?.match(/^[a-zA-Z]*$/) &&
    //   value?.length <= 10
    // ) {
    //   setData({
    //     ...data,
    //     [name]: value.replace(/[`~!$%^@*()_|+\=?;:/#.&,'"<>\{\}\[\]\\]/gi, ""),
    //   });
    // }
    setData({ ...data, [name]: value });
    switch (name) {
      case "firstname":
        if (name === "firstname" && value?.match(/^[a-zA-Z]*$/)) {
          SetErrMsg("");
        } else {
          SetErrMsg("Please enter a valid First Name");
        }
        break;
      case "lastname":
        if (value?.match(/^[a-zA-Z]*$/)) {
          SetErrMsg("");
        } else {
          SetErrMsg("Please enter a valid Last Name");
        }
        break;
      case "email":
        if (
          value?.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
        ) {
          SetErrMsg("");
        } else {
          SetErrMsg("Please enter a valid Email address");
        }
        break;
      case "password":
        if (
          value?.match(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
          )
        ) {
          SetErrMsg("");
        } else {
          SetErrMsg("Please enter a strong password");
        }
        break;
      case "mobilenumber":
        if (value?.match(/^[0-9]{10}$/)) {
          SetErrMsg("");
        } else {
          SetErrMsg("Please enter a valid 10 digits mobile number");
        }
        break;
      default:
        SetErrMsg("");
    }
    setData({
      ...data,
      [name]: value.replace(".", ""),
      [`${name}Err`]: ErrMsg,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <br />
        <center>
          <h2> Sign Up </h2>
        </center>
        <form className="form">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              name="firstname"
              placeholder="FirstName"
              value={data.firstname}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <p className="error"> {data.firstnameErr} </p>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              name="lastname"
              placeholder="LastName"
              value={data.lastname}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <p className="error"> {data.lastnameErr} </p>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <p className="error"> {data.emailErr} </p>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            <p className="error"> {data.passwordErr} </p>
          </div>

          <div class="mb-3">
            <label for="exampleInputtext" class="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              class="form-control"
              id="mobilenumber"
              name="mobilenumber"
              placeholder="Mobile Number"
              value={data.mobilenumber}
              onChange={handleChange}
            />
            <p className="error"> {data.mobilenumberErr} </p>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="checkbox1" for="exampleCheck1">
              I'd like to receive marketing and policy communications from TAJ
            </label>
          </div>
          <div></div>
          <center>
            <button
              type="submit"
              class="btn btn-secondary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </center>
        </form>

        <div className="container1">
          <center>
            <p>Already have an account?</p>
            <button type="button" class="btn btn-secondary">
              <Link className="link-login" to="/Login">
                Login
              </Link>
            </button>
          </center>
        </div>
      </div>
    </>
  );
}
