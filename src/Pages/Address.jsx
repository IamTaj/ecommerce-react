import React,{useState} from 'react'

export default function Address() {

    const [data, setData] = useState(
    { 
      plotno:"", 
      street:"",
      landmark:"",
      city:"",
      state:"",
      pincode:"",
      country:""
    })
    const [ErrMsg, setErrMsg] = useState(false);


    const handleChange = (event) => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
     let Err="";
      switch(name){
        case "plotno":
          if(!/^[0-9\b]+$/.test(value)){
           setErrMsg("Please enter the plot number in numerics");
          }else {
            setErrMsg("")
          }
          break;
          case "street":
            if(value?.match(/^[a-zA-Z ]*$/)){
              setErrMsg("")
            }
            else{
              setErrMsg("Please provide a valid street name")
            }
            break;
          case "landmark":
            if(value?.match(/^[a-zA-Z\s]+$/g)){
              setErrMsg("")
            }
            else{
              setErrMsg("Please enter the landmark in alphabets only")
            }
            break;

            case "city":
              if(value?.match(/^[a-zA-Z]*$/)){
              setErrMsg("")
              }
              else{
                setErrMsg("Please provide a valid city name");
              }
            break;

            case "state":
              if(value?.match(/^[a-zA-Z ]*$/)){
                setErrMsg("")
              }
              else{
                setErrMsg("Please provide a valid state name")
              }
              break;

              case "pincode":
                if(value?.match(/^[0-9]{5}$/)){
                  setErrMsg("")
                }
                else{
                  setErrMsg("Please enter the pincode in numerics and it must be 6 digits")
                }
                break;

              case "country":
                if(value?.match(/^[a-zA-Z ]*$/)){
                  setErrMsg("")
                }
                else{
                  setErrMsg("Please provide a valid country name")
                }
                break;
          default:
            setErrMsg("");    
      }
      setData({...data,[name]:value,[`${name}Err`]:ErrMsg})
    };
    const handleSubmit = (event) => {
      event.preventDefault();
        console.log(data)
      };
  return (
    <>
      <div className="container">
        <div className="form-address" >
          <div className="address">
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
                <label for="formGroupExampleInput2" className="form-label">
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
                <label for="formGroupExampleInput2" className="form-label">
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
                <label for="formGroupExampleInput2" className="form-label">
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
                <label for="formGroupExampleInput2" className="form-label">
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
                <label for="formGroupExampleInput2" className="form-label">
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
                <label for="formGroupExampleInput2" className="form-label">
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
              <button type="submit" id="submit" className="btn btn-secondary">
                Set Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
