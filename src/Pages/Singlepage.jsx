import React, { useState } from "react";
import productInfo from "../JSON/Product.json";
import "./singlepage.css";
import { Link } from "react-router-dom";
import { Rating, Typography } from "@mui/material";



export default function Singlepage({addToCart,items}) {
  const params = global.window.location.search.slice(1);
  const selectedId = productInfo.find((item) => item?.id == params);
  console.log(selectedId, "selectedId");
  
  const [data, setData] = useState({pincode: "",});
  const [Msg, setMsg] = useState(false);
  
  
  
  

  const pinCheck = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]:value});
    switch(name){
      case "pincode":
         if(value?.match(/^[0-9]{5}$/)){
                  setMsg("Yes we are available for delivery in this location")
                }
                else{
                  setMsg("Please enter the pincode in numerics and it must be 6 digits")
                }
                break;
        default:
          setMsg("");
    }
    setData({ ...data, [name]: value, [`${name}Msg`]: Msg });
  };

  
   
  return (
    <>
      
      <div className="pdp">
        <div className="div1-pdp">
          <div>
            <a className="link" href="/">
              Home
            </a>{" "}
            /{" "}
            <a className="link" href="/">
              Products
            </a>{" "}
            /{selectedId.title}
          </div>
          <br />

          <img className="product-photo" src={selectedId.image} alt="" />
        </div>
        <div className="div2-pdp">
          <div className="div2-1-pdp">
            <h3>{selectedId.title}</h3>
            <br />
            <h6>
              <span className="cprice"> ₹{selectedId.price} </span>
              &nbsp; &nbsp;
              <s>
                <span className="mprice">₹{selectedId.price + 100} </span>
              </s>
              <span className="text-assurance">
                <img
                  className="assurance"
                  src="https://cdn2.iconfinder.com/data/icons/business-804/24/assurance-guarantee-certified-secure-badge-64.png"
                  alt=""
                />
                Assurance
              </span>
            </h6>
          </div>
          <div className="div2-main">
            <div className="div2-2-pdp">
              <div className="rating-div">
                <div className="rating-div1">Rating :</div>
                <div className="rating-div2">
                  <Rating
                    name="read-only"
                    value={selectedId.rating.rate}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="reviews">Reviews: {selectedId.rating.count}</div>
          </div>
          <div className="div2-3-pdp">
            <h5> Description: </h5>
            <p className="description-pdp">{selectedId.description}</p>
          </div>
          <div className="div2-4-pdp">
            <h5>Available offers:</h5>
            {selectedId.offer.map((e) => (
              <ul>
                <li>{e.o1}</li>
                <li>{e.o2}</li>
                <li>{e.o3}</li>
                <li>{e.o4}</li>
                <li>{e.o5}</li>
                <li>{e.o6}</li>
              </ul>
            ))}
          </div>
          <div className="div2-5-pdp">
            <div className="label-pdp">
              <label for="formGroupExampleInput2" className="form-label">
                Pincode
              </label>
            </div>
            <div className="input-pdp">
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                placeholder="Pincode"
                onChange={pinCheck}
              />
              <p className="msg"> {data.pincodeMsg} </p>
            </div>
          </div>
          <div className="div2-6-pdp">
            <button
              className="btn btn-success"
              onClick={() => {
                addToCart(selectedId);
              }}
            >
              Add To Cart
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to={"/Viewcart"}>
              <button
                className="btn btn-warning"
                onClick={() => {
                  addToCart(selectedId);
                }}
              >
                Buy Now
              </button>
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/">
              <button className="btn btn-secondary">View More Items</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
