/* eslint-disable jsx-a11y/anchor-is-valid */
import { borderRadius } from "@mui/system";
import React, { useParams, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import prod from "../JSON/Product.json";
import "./homepage.css";
export default function HomePage(props) {
  const [products, setProduct] = useState(prod);
    const {addToCart}=props

  return (
    <>
    {/* <div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> */}
      <div className="home">
        
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide carousel-slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg"
                class="d-block w-100"
                alt="..."
                height={"400px"}
                width="100%"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3239FnIkHIXHVWAcaEACSLsJLyfyc5HYxIw&usqp=CAU"
                class="d-block w-100"
                alt="..."
                width="100%"
                height={"400px"}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.pinimg.com/564x/b1/6c/10/b16c10c379919a5ab0421ebd3d4ba0ed.jpg"
                class="d-block w-100"
                alt="..."
                width="100%"
                height={"400px"}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="content">
        <div className="main-div">
          {prod.map((items) => {
            return (
              <>
                <div className="items">
                  <div className="product">
                    <div className="photo">
                      <img src={items.image} alt="" width={"140px"} />
                    </div>
                    <div className="product-details">
                      <div className="title">{items.title}</div>
                      <div className="price"> ₹{items.price}</div>
                    </div>
                    <div className="buttons-homepage">
                      <div className="viewitem">
                        <Link to={`/Singlepage/?${items?.id}`}>
                          <button
                            type="button"
                            class="btn btn-primary"
                            // onClick={(event) => handelClick(event, items)}
                          >
                            View Item
                          </button>
                        </Link>
                      </div>
                      <div className="addtocart">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => addToCart(items)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
