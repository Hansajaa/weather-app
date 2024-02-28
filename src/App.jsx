import "./App.css";
import Navbar from "./component/Navbar";
import SearchBar from "./component/SearchBar";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4"></div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <SearchBar></SearchBar>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4"></div>
      </div>

      {/* <div className="row mt-5">
        <div className="col-lg-4 col-md-4 col-sm-4"></div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <Card></Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4"></div>
      </div> */}
    </div>
  );
}

export default App;
