import React from 'react'
import "./footer.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Footer() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "350px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="upper">
          <div className="div1-footer">
            <ul>
              <h5>ONLINE SHOPPING</h5>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Gift Cards</li>
            </ul>
            <ul>
              <h5>USEFUL LINKS</h5>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Site Maps</li>
              <li>Corparate Information</li>
            </ul>
          </div>
          <div className="div2-footer">
            <ul>
              <h5>CUSTOMER POLICIES</h5>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="div3-footer">
            <h5>EXPERIENCE TAJ APP ON MOBILE</h5>
            <div className="div3-upper">
              <img
                src="https://e7.pngegg.com/pngimages/114/363/png-clipart-google-play-app-store-apple-apple-text-rectangle.png"
                alt="no found"
                width={"100px"}
              />
            </div>
            <div className="div3-lower">
              <h6>KEEP IN TOUCH</h6>
              <div className="logo">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-64.png"
                  alt="facebook"
                  width={"35px"}
                  className="logo"
                />
                <img
                  src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-64.png"
                  alt="instagram"
                  width={"35px"}
                  className="logo"
                />
                <img
                  src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/512/twitter-square-64.png"
                  alt="twitter"
                  width={"35px"}
                  className="logo"
                />
                <img
                  src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-64.png"
                  alt="youtube"
                  width={"35px"}
                  className="logo"
                />
              </div>
            </div>
          </div>
          <div className="div4-footer">
            <h5>Registered Office Address</h5>
            <p>
              Buildings Alyssa,
              <br />
              Begonia and Clover situated in Embassy Tech Village,
              <br />
              Outer Ring Road,
              <br />
              Devarabeesanahalli Village,
              <br />
              Varthur Hobli,
              <br />
              Bengaluru – 560103, India
            </p>
            <h5>Have any Queries?</h5>
            <div className="queries">
              <TextField 
              className='textfield'
                id="filled-multiline-static"
                label="Queries"
                multiline
                rows={4}
                placeholder="----Feel free to ask----"
                variant="filled"
              />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
