import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container mb-5 ">
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color:"white"}}>
              <img src="../../public/logo.png" height={50} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#" style={{color:"white"}}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color:"white"}}>
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color:"white"}}>
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color:"white"}}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
