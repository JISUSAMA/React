import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
// or less ideally
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Button variant="secondary">버튼</Button>{" "}
    </div>
  );
}

export default App;
