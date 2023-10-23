import React, { useState } from 'react'
import "./carddetails.css"

export default function CardDetails() {

    const [temp, setTemp] = useState({
      tmpCardNo: "",
      tmpCVV: "",
      tmpVal: "",
      tmpExpiry: "",
      tmpCHN: "",
    });

    const CardNo = (x) => {
      setTemp({
        ...temp,
        tmpCardNo: x.target.value,
      });
    };
    const CVV = (x) => {
      setTemp({
        ...temp,
        tmpCVV: x.target.value,
      });
    };
    const Val = (x) => {
      setTemp({
        ...temp,
        tmpVal: x.target.value,
      });
    };
    const Exp = (x) => {
      setTemp({
        ...temp,
        tmpExpiry: x.target.value,
      });
    };
    const CHN = (x) => {
      setTemp({
        ...temp,
        tmpCHN: x.target.value,
      });
    };

  return (
    <>
      <center>
        <h4>PLEASE ENTER YOUR CARD DETAILS</h4>
      </center>
      <div className="container">
        <form className="form-carddetails">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              minLength={16}
              maxLength={16}
              className="form-control"
              id="cardnumber"
              placeholder="XXXX XXXX XXXX XXXX"
              name="cardnumber"
              pattern="[0-9]{16}"
              onChange={CardNo}
              required
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              CVV
            </label>
            <input
              type="text"
              maxLength={3}
              className="form-control"
              id="cvv"
              placeholder="CVV"
              onChange={CVV}
              pattern="[0-9]{3}*"
              required
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Valid From
            </label>
            <input
              type="month"
              className="form-control"
              id="expiry-mm"
              placeholder="MM/YY"
              onChange={Val}
              min="2017-02"
              required
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Expiry
            </label>
            <input
              type="month"
              className="form-control"
              id="expiry-mm"
              placeholder="MM/YY"
              onChange={Exp}
              min="2021-02"
              required
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Card Holder Name
            </label>
            <input
              type="text"
              className="form-control"
              id="chn"
              placeholder="Card Holder Name"
              onChange={CHN}
              pattern="[a-zA-Z ]+$"
              required
            />
          </div>
          <center>
            <button type="submit" id="submit" className="btn btn-warning">
              Add Card
            </button>
          </center>
        </form>
      </div>
    </>
  );
}
