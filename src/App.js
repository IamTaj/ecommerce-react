import "./App.css";
import NavBar from "./Pages/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Address from "./Pages/Address";
import Footer from "./Pages/Footer";
import Singlepage from "./Pages/Singlepage";
import Viewcart from "./Pages/Viewcart";
import { useState, useEffect } from "react";
import CardDetails from "./Pages/CardDetails";
import { CartProvider } from "react-use-cart";
import Order from "./Pages/Order";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (items) => {
    setCart([...cart, items]);
    console.log("Cart updated", cart);
  };
  // const remove = (event, items) => {
  //   console.log(items)
  //   setCart([...cart, cart.splice(1,1)]);
  // };

  let totalproducts = cart.length;
  // useEffect(() => {
  //   localStorage.setItem("dataKey", JSON.stringify(cart));
  //   console.log(localStorage.setItem("dataKey", JSON.stringify(cart)));
  // }, [cart]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Address" element={<Address />}></Route>
          <Route path="/CardDetails" element={<CardDetails />}></Route>
          <Route
            path="/Singlepage"
            element={<Singlepage addToCart={addToCart} />}
          ></Route>
          <Route
            exact
            path="/Viewcart"
            // element={<Viewcart items={cart} />}
            element={<Viewcart items={cart} />}
          ></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
