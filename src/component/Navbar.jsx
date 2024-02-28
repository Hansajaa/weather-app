import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container mb-5 justify-content-center navbar-collapse">
        <nav class="navbar navbar-expand-lg bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color:"white"}}>
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#" style={{color:"white"}}>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{color:"white"}}>
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{color:"white"}}>
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true" style={{color:"white"}}>
                    Disabled
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
