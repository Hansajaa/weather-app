import "./App.css";
import Navbar from "./component/Navbar";
import SearchBar from "./component/SearchBar";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar/>
      </div>
      
      <div className="row">
          <SearchBar></SearchBar>
      </div>

    </div>
  );
}

export default App;
