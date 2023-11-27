/*eslint-disable*/
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
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Detail from "./pages/Detail.js";

function App() {
  // let [cakeName, setCakeName] = useState([
  //   "크림치즈",
  //   "초코파운드",
  //   "딸기조각",
  // ]);
  // let [cakePrice, setCakePrice] = useState([6500, 4500, 5500]);

  let [cakeIMG, setCakeIMG] = useState([cake1, cake2, cake3]);
  let [cakeForm] = useState(cakeData);
  let navigate = useNavigate();
  //Link는 다른 페이지나 리스소에 대한 참조를 생성하는데 사용하지만 한 화면에서 다른화면으로 이동하는데 사용한다 페이지 이동을 도와주는 함수
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">별찌루</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="/Visit">Visit</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Profile");
              }}
            >
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Main Page</h2>
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
                        <img src={cakeIMG[cakeForm[i].id]} width="100%" />
                        <h4>[ {cakeForm[cakeForm[i].id].cakeName} ]</h4>
                        <p>{cakeForm[cakeForm[i].id].cakePrice}원</p>
                        {/* <Link to="/detail">상세페이지</Link> */}

                        <Link to={"/detail/" + cakeForm[i].id}>상세페이지</Link>
                      </Col>
                      {/* <CakeForm_f
                id={i}
                img={cakeIMG[i]}
                data={cakeForm[i]}
              ></CakeForm_f> */}
                    </>
                  );
                })}
                <Col>
                  {/* "html 에서 public 폴더 이미지 사용하는 방법 /이미지 경로" */}
                  {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} /> */}
                </Col>
              </Row>
            </>
          }
        />
        <Route path="/Home" element={<h2>Home Page</h2>} />
        <Route path="/Cart" element={<h2>Cart Page</h2>} />
        <Route path="/Visit" element={<h2>Visit Page</h2>} />
        {/* Nested Routues 방법1 */}
        {/* <Route path="/Profile" element={<Profile_page />} />
        <Route path="/Profile/adress" element={<Profile_page />} />
        <Route path="/Profile/blog" element={<Profile_page />} /> */}
        {/*Nested Routues 방법2 :  
        nesetd Route 접속을 했을 경우,Profile에서 구성요소 nesetd들의 페이지 element 들을 보여줄수 있다.
        */}
        <Route path="/Profile" element={<Profile_page />}>
          <Route
            path="adress"
            element={
              <>
                <p>현재 페이지의 주소는 Profile/adress 입니다.</p>
              </>
            }
          />
          <Route
            path="blog"
            element={
              <>
                <p>현재 페이지의 주소는 Profile/blog 입니다.</p>
              </>
            }
          />
        </Route>
        {/* /주소/:id(URL 파라미터) 는 뒤에 어떤 주소가 와도 사용이 가능하다. 페이지를 여러개 만들고 싶을 때 사용하는 방법, 하나의 컴포넌트로 여러개의 페이지를 만드는 것이 가능하다.*/}
        <Route path="/detail" element={<Detail cakeForm={cakeForm} />} />
        <Route
          path="/detail/:id"
          element={<Detail cakeForm={cakeForm}></Detail>}
        />

        {/* 404 페이지창 */}
        <Route path="*" element={<p>존재 하지 않는 페이지 입니다</p>} />
        <Route path="/event" element={<Event_page />}>
          <Route
            path="one"
            element={
              <>
                <p>이벤트 1페이지</p>
              </>
            }
          />
          <Route
            path="two"
            element={
              <>
                <p>이벤트 2페이지</p>
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
//Nested Routues 는 여러 유사한 페이지가 필요 할때 주로 사용한다
function Profile_page() {
  return (
    <>
      <h2>PROFILE</h2>
      {/* Nested Routues 를 보여줄 곳을 outlet으로 사용함 */}
      <Outlet></Outlet>
    </>
  );
}
function Event_page() {
  return (
    <>
      <h1>이벤트 페이지</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
