import { useState, useEffect } from "react";
import "./Card.css";

function Card(props) {
  
  let city = props.value;

  const [data, setdata] = useState(null);

  const apiKey = "5ffcc797bd1c4bc4b3730517242502";

  useEffect(() => {
    try{
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`)
      .then((response) => response.json())
      .then((data) => {
          setdata(data);
          console.log(data);
      });
    }catch(err){
        city='colombo';
    }
  }, [city]);


  return (
    <div className="container mb-5">
      <div
        className="weather-card"
        style={{ width: "25rem", height: "33rem", borderRadius: "30px" }}
      >
        <div className="card-body">
          <div className="container">
            <div className="row">
              <h4 className="heading mt-2" style={{ color: "white" }}>
                <b>Now</b>
              </h4>
            </div>

            <div className="row">
              <div className="text-center mt-3">
                <img src={data?.current.condition.icon} alt="" width={120} />
              </div>
            </div>

            <div className="row">
              <h5 className="card-title text-center" style={{ color: "white" }}>
                {data?.current.condition.text}
              </h5>
            </div>

            <div className="row mt-3">
              <h1
                className="card-text text-center"
                style={{ color: "white", fontSize: "80px" }}
              >
                {data?.current.temp_c} &#8451;
              </h1>

              <h1
                className="card-text text-center"
                style={{ color: "white", fontSize: "80px" }}
              >
                {data?.current.temp_f} &#8457;
              </h1>
            </div>

            <hr style={{ color: "white" }}></hr>

            <div className="row">
              <div className="col-3">
                <img src="public/location-icon.png" alt="location-icon" />
              </div>
              <div className="col">
                <p>{data?.location.name}, {data?.location.region}, {data?.location.country}</p>
              </div>
            </div>

            {/* <div className="row mt-3">
                <div className="col">
                <img src="../../public/date-icon.png" alt="date-icon" style={{width:'20%'}}></img>
                </div>
                <div className="col">
                <p>2024-02-27</p>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
