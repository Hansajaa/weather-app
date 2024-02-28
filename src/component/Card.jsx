import {useState} from 'react'
import "./Card.css";

function Card(props) {
  
    const [city, setCity] = useState("Colombo");

//   useEffect(() => {
//     fetch(` http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`)
//       .then((response) => response.json)
//       .then((data) => {
//         console.log(data);
//       });
//   }, [city]);

//   const apiKey = "5ffcc797bd1c4bc4b3730517242502";

    

  return (
    <div className="container mb-5">
      <div
        className="weather-card"
        style={{ width: "20rem", height: "25rem", borderRadius: "30px" }}
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
                <img src="../../public/day/299.png" alt="" width={120} />
              </div>
            </div>

            <div className="row">
              <h5 className="card-title text-center" style={{ color: "white" }}>
                Partly cloudy
              </h5>
            </div>

            <div className="row mt-3">
              <h1
                className="card-text text-center"
                style={{ color: "white", fontSize: "80px" }}
              >
                25 &#8451;
              </h1>
            </div>

            <hr style={{ color: "white" }}></hr>

            <div className="row">
              <div className="col-3">
                <img src="../../public/location-icon.png" alt="location-icon" />
              </div>
              <div className="col">
                <p>Battaramulla South, Western</p>
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


export function setLocation(value) {
    console.log(value);
}