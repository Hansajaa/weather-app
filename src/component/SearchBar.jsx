import { React } from "react";
import Card, { setLocation } from "./Card";
import "./SearchBar.css";

function SearchBar() {
  function parseLocation(value) {
    setLocation(value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="input-group">
          <div className="form-outline">
            <input style={{borderRadius:'40px'}} type="search" placeholder="Search City..." id="form1" className="form-control" />
          </div>
          <button style={{borderRadius:'40px',marginLeft:'20%'}} type="button" className="btn btn-primary search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <Card></Card>
      </div>
    </div>
  );
}

export default SearchBar;
