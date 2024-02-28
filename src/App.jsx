import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>

      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
