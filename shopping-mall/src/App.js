import logo from "./logo.svg";
import "./App.css";
// import 무화과케잌 from "./main-bg.jpg";

import cake1 from "./IMG/cake1.jpg";
import cake2 from "./IMG/cake2.jpg";
import cake3 from "./IMG/cake3.jpg";

import { Button, Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import { cakePrice, cakeName } from "./data.js";
import { cakeData } from "./data.js";
function App() {
  // let [cakeName, setCakeName] = useState([
  //   "크림치즈",
  //   "초코파운드",
  //   "딸기조각",
  // ]);
  // let [cakePrice, setCakePrice] = useState([6500, 4500, 5500]);

  let [cakeIMG, setCakeIMG] = useState([cake1, cake2, cake3]);
  let [cakeForm] = useState(cakeData);
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">별찌루</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#visit">Visit</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Row>
        {cakeForm.map(function (a, i) {
          return (
            <>
              {/* <Col>
                <img src={cakeIMG[i]} />
                <h4>[ {cakeName[i]} ]</h4>
                <p>{cakePrice[i]}원</p>
              </Col> */}
              <Col>
                <img src={cakeIMG[i]} width="100%" />
                <h4>[ {cakeForm[i].cakeName} ]</h4>
                <p>{cakeForm[i].cakePrice}원</p>
              </Col>
              <CakeForm_f
                id={i}
                img={cakeIMG[i]}
                data={cakeForm[i]}
              ></CakeForm_f>
            </>
          );
        })}
        <Col>
          {/* "html 에서 public 폴더 이미지 사용하는 방법 /이미지 경로" */}
          {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} /> */}
        </Col>
      </Row>
    </div>
  );
}

function CakeForm_f(props) {
  return (
    <Col>
      <img
        // src={`./IMG/cake${props.id}.jpg`}
        // src={`./IMG-public/cake${props.id}.jpg`}
        src={props.IMG}
        width="100%"
        alt={`cake${props.id}`}
      />
      <h4>{props.data.cakeName}</h4>
      <p>{props.data.cakePrice}원</p>
    </Col>
  );
}
export default App;
