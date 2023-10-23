import React from 'react'
import { Link } from 'react-router-dom';
import "./Order.css"

export default function Order() {
  return (
    <>
      <div className="div-order">
        <img
          src="https://cdn2.iconfinder.com/data/icons/project-management-and-team-work/73/24-128.png"
          alt=""
          width={"200px"}
        />
        <h4 className="heading-order" style={{ color: "#f84d65" }}>
          Yay !
        </h4>
        <h5 className="heading-order" style={{ color: "#f84d65" }}>
          Your Order Has Been Placed Successfully
        </h5>
        <Link to={"/"}>
          <button className="btn btn-success">Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}
