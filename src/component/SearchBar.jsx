import {React, useEffect, useState} from "react";

function SearchBar() {

    

    const [city,setCity] = useState("Colombo")

    function setLocation(value){
        setCity(value);
    }

    const apiKey="5ffcc797bd1c4bc4b3730517242502"

    useEffect(()=>{
        fetch(` http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`)
        .then(response => response.json)
        .then(data => console.log(data))
    },[city])


  return (
    <div className="container">
      <div className="row">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Location
          </label>
          <input
            type="email"
            class="form-control"
            id="txtLocation"
            placeholder="eg : Colombo"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <button className="btn btn-primary w-100" onClick={()=>{
                setLocation(document.getElementById("txtLocation").value)
          }}>Search</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <div class="card" style={{ width: "18rem;" }}>
            <div className="row">
              <div className="col">
                <img
                  src={`//cdn.weatherapi.com/weather/64x64/day/176.png`}
                  style={{ width: "50%" }}
                  class="card-img-top"
                  alt="wheather icon"
                />
              </div>
              <div className="col">
                <p className="card-text"></p>
              </div>
            </div>
            <div class="card-body">
            <p class="card-text">23</p>
              <h5 class="card-title">Battaramulla</h5>
              <p class="card-text">Western</p>
              <p class="card-text">Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SearchBar;
