import React, { useState } from "react";
import productInfo from "../JSON/Product.json";
import "./viewcart.css";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

export default function Viewcart({remove, items}) {


  
  // var finalProduct = {};
  //     items.map((e)=>{

  //      items.forEach(element =>{
  //       finalProduct[element] = (finalProduct[element] || 0)+1;
  //      });

  //     })}
  // console.log("Final products", finalProduct);
  // console.log("final Items",items)
  
  let totalproducts = items.length;
  const [ErrMsg, setErrMsg] = useState(false);
  const [data, setData] = useState({
    plotno: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    CardNumber: "",
    cvv: "",
    Val: "",
    Expiry: "",
    CardHolderName: "",
  });
  let totalBil = 0;
  {
    items.map((e) => {
      
      for (let i = 0; i < totalproducts; i++) {
        totalBil = totalBil + e.price;
      }
      console.log("Total Bill", totalBil);
    });
  }

  // console.log("Total products",totalproducts)

  /**Form Validation of Shipping Address */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((formData) => ({ ...formData, [name]: value }));
    let Err = "";
    switch (name) {
      case "plotno":
        if (!/^[0-9\b]+$/.test(value)) {
          setErrMsg("Please enter the plot number in numerics");
        } else {
          setErrMsg("");
        }
        break;
      case "street":
        if (value?.match(/^[a-zA-Z ]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid street name");
        }
        break;
      case "landmark":
        if (value?.match(/^[a-zA-Z\s]+$/g)) {
          setErrMsg("");
        } else {
          setErrMsg("Please enter the landmark in alphabets only");
        }
        break;

      case "city":
        if (value?.match(/^[a-zA-Z]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid city name");
        }
        break;

      case "state":
        if (value?.match(/^[a-zA-Z ]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid state name");
        }
        break;

      case "pincode":
        if (value?.match(/^[0-9]{5}$/)) {
          setErrMsg("");
        } else {
          setErrMsg(
            "Please enter the pincode in numerics and it must be 6 digits"
          );
        }
        break;

      case "country":
        if (value?.match(/^[a-zA-Z ]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid country name");
        }
        break;
      default:
        setErrMsg("");
    }
    setData({ ...data, [name]: value, [`${name}Err`]: ErrMsg });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  /**Form Validation ends */
if(items.length===0){
  return (
    <div className="empty-cart">
      <div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/micro-illustrations-set-3/256/Trolley-128.png"
          alt=""
          width="200px"
        />
        <h3>Your Cart is empty !</h3>
        <div>
          <p>Looks like you have not added anythings in your cart. <br />
          Go ahead & explore top products
          </p>
          <Link to='/'>
          <button className="btn btn-warning">Explore</button></Link>
        </div>
      </div>
    </div>
  );
}

  return (
    <>
      {/* {selectedId.id} */}
      <h3 className="h3-heading">CheckOut</h3>
      <div className="main-div-cart">
        <div className="right">
          <ol className="list">
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li>SHOPPING BAG ({totalproducts} ITEMS)</li>
            </button>
            <br />
            <div class="collapse" id="collapseExample1">
              <div class="card">
                <div className="div1-cart">
                  {items.map((products) => {
                    return (
                      <>
                        <div className="div1-1-cart">
                          <div className="div1-product-cart">
                            <div className="div1-1-photo-cart">
                              <img
                                className="product-photo-cart"
                                src={products.image}
                                alt=""
                              />
                            </div>
                            <div className="div1-1-description-cart">
                              <p className="id-cart">
                                Product Id:{products.id}
                              </p>
                              <p className="title-cart">{products.title}</p>
                              <p className="category-cart">
                                {products.category.toUpperCase()}
                              </p>
                              <p>
                                <span className="price1-cart">
                                  ₹{products.price}
                                </span>
                                &nbsp; &nbsp;
                                <s>
                                  <span className="price2-cart">
                                    ₹{products.price * 2}
                                  </span>
                                </s>
                                &nbsp; &nbsp;
                                <span className="discount">50% OFF</span>
                              </p>
                              <br />
                            </div>
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li> SHIPPING DETAILS</li>
            </button>
            <br />

            {/*Address Form Start */}
            <div class="collapse" id="collapseExample2">
              <div
                class="card card-body"
                style={{ backgroundColor: "#cbcbcb" }}
              >
                <div className="shipping-form">
                  <h2>ADDRESS FORM</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="formGroupExampleInput" className="form-label">
                        Plot No
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="plotno"
                        name="plotno"
                        placeholder="Plotno"
                        value={data.plotno}
                        onChange={handleChange}
                      />
                      <p className="error"> {data.plotnoErr} </p>
                    </div>

                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        Street
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="street"
                        name="street"
                        placeholder="Street"
                        onChange={handleChange}
                      />
                      <p className="error"> {data.streetErr} </p>
                    </div>

                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        LandMark
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="landmark"
                        name="landmark"
                        placeholder="LandMark"
                        onChange={handleChange}
                      />
                      <p className="error"> {data.landmarkErr} </p>
                    </div>

                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                      />
                      <p className="error"> {data.cityErr} </p>
                    </div>
                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                      />
                      <p className="error"> {data.stateErr} </p>
                    </div>
                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        placeholder="Pincode"
                        onChange={handleChange}
                      />
                      <p className="error"> {data.pincodeErr} </p>
                    </div>
                    <div className="mb-3">
                      <label
                        for="formGroupExampleInput2"
                        className="form-label"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        placeholder="Country"
                        onChange={handleChange}
                      />
                      <p className="error"> {data.countryErr} </p>
                    </div>
                    <center>
                      <button
                        type="submit"
                        id="submit"
                        className="btn btn-dark"
                      >
                        Set Address
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
            {/*Address Form End */}

            {/*Card Details Form */}
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li> PAYMENT OPTION</li>
            </button>
            <br />
            <div class="collapse" id="collapseExample">
              <div class="payment-card">
                <h4>Select a payment method</h4>
                <br />
                <p>TAJ PAY</p>
                <div className="payment1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    &nbsp;
                    <p>
                      <h5>UPI/Netbanking</h5>
                      <span>Get started with TAJ pay UPI</span>
                    </p>
                  </label>
                </div>
                <p>MORE WAYS TO PAY</p>
                <div className="payment1">
                  <input
                    class="form-check-input"
                    type="radio"
                    data-bs-toggle="collapse"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    data-bs-target="#collapseExample1"
                  />{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp; <h5>Pay with Debit/Credit/ATM Cards</h5>
                  <p>
                    You can save your cards as per new RBI guidelines{" "}
                    <a className="cart-link" href="#">
                      Learn More ˅
                    </a>
                  </p>
                  <div class="collapse" id="collapseExample1">
                    <div class="payment-card">
                      <Link className="cart-link" to="/CardDetails">
                        Enter Card Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="payment1">
                  <input
                    class="form-check-input"
                    type="radio"
                    data-bs-toggle="collapse"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    data-bs-target="#collapseExample2"
                  />{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp; <h5>EMI</h5>
                  <div class="collapse" id="collapseExample2">
                    <div class="payment-card">
                      <select className="emi">
                        <option value="none">Select EMI options</option>
                        <option value="card">Bajaj Finserv</option>
                        <option value="card">AXIS Bank Credit Card EMI</option>
                        <option value="card">HDFC Bank Credit Card EMI</option>
                        <option value="card">SBI Bank Credit Card EMI</option>
                        <option value="card">INDUSIND Credit Card EMI</option>
                      </select>
                      <p className="notice-cart">
                        EMI available across top banks. Bajaj Finserv EMI
                        available on select products only{" "}
                        <a className="cart-link" href="#">
                          Details
                        </a>
                      </p>
                      <p>
                        TAJ Pay Later option is not available for this order.{" "}
                        <a className="cart-link" href="#">
                          Why?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="payment1">
                  <input
                    class="form-check-input"
                    type="radio"
                    data-bs-toggle="collapse"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    data-bs-target="#collapseExample3"
                  />{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp; <h5>Cash On Delivery/Pay On Delivery</h5>
                  <p>
                    Scan & Pay using TAJ app. Cash, UPI, Cards also accepted.{" "}
                    <a className="cart-link" href="#">
                      Know More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ol>
        </div>
        <div className="left">
          <div className="left1">
            <div className="div-left-1">
              <h4>Order Summary ({totalproducts} items)</h4>
              <div className="order-value">
                <div>
                  <p>Order Value</p>
                </div>
                <div>
                  <p>{totalBil * 2}</p>
                </div>
              </div>
              <div className="order-value">
                <div>
                  <p>Product Discounts</p>
                </div>
                <div>
                  <p>{totalBil}</p>
                </div>
              </div>
              <hr></hr>
              <div className="order-value">
                <div>
                  <p>Order Total</p>
                </div>
                <div>{totalBil}</div>
              </div>
            </div>
          </div>
          <div className="left2">
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/technology-mix/200/Technology_Mix_-_Final-17-64.png"
                alt=""
                width="60px"
              />
            </div>
            <div>
              <h5 className="coupons-heading">Apply Coupons</h5>
              <input className="coupon-input" type="text" />
            </div>
          </div>
          <div className="left3">
            <div className="order">
              <Link to={"/Order"}>
                <button className="btn btn-secondary">Confirm Order</button>
              </Link>
            </div>
          </div>
          {/* <div className="offer">
            <div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/shopping-115/32/sale-64.png"
                alt=""
              />
            </div>
            <div>
              <p>Apply Coupons</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
