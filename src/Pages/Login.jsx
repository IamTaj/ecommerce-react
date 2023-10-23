import React from 'react'



export default function Login() {
  return (
    <>
      <div className="container">
        <h3>
          Welcome to <span className='btn-wardrobe'>The WardrObe</span>{" "}
        </h3>

        <form className="form">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <center>
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  );
}
