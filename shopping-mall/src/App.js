/*eslint-disable*/
import React, { createContext } from 'react';
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
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

//Context API 사용하기
//state 보관함과 같은 역할을 한다
//<Context>로 원하는 컴포넌트를 감싸줌
export let Context1 = createContext()

function App() {
  // let [cakeName, setCakeName] = useState([
  //   "크림치즈",
  //   "초코파운드",
  //   "딸기조각",
  // ]);
  // let [cakePrice, setCakePrice] = useState([6500, 4500, 5500]);

  let [cakeIMG, setCakeIMG] = useState([cake1, cake2, cake3]);
  let [cakeForm,setCakeForm] = useState(cakeData);
  let navigate = useNavigate();
  let AjaxData = [];

  //Context API 사용하기
  let [재고] = useState([10,20,30])
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

                        <Link to={"/detail/" + cakeForm[i].id} element={<Detail cakeForm={cakeForm}></Detail>}>상세페이지</Link>
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
          element={
            <Context1.Provider value={{재고, cakeForm}}>
              {/* Context1안에있는 모든 컴포넌트는 재고,cakeForm을 사용 할 수 있다 */}
      <Detail cakeForm={cakeForm}></Detail>
            </Context1.Provider>
        }
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
      {/* AJAX 서버에 데이터를 요청 했을 때 원하는 정보를 제공해주는프로그램이라고 생각하면 된다.
      요청 할때 어떤 방법(GET, POST)으로 어떤 정보(URL) 를 받아서 제공을 해주는 것이다 
      ajax를 사용하기 위해서 , axios 라이브러리를 설치 npm install axios
      
      요청 결과는 axios.get('url').then((data)=>{data})
      여기서 data 는 결과 값
*/}
      {/* <button
        onClick={() => {
          // 로딩중 UI띄우기
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              AjaxData = result.data;
              console.log(AjaxData);
              let copy =[...cakeForm, ...AjaxData] ;
              setCakeForm(copy);
                 // 로딩중 UI 숨기기
            })
            .catch(() => {
              // 로딩중 UI띄우기
              console.log("요청실패");
            });
            //서버로 데이터 전송하는 POST 요청
            axios.post('/safdfas', {name: 'kim'})
            //동시에 여러개의 ajax 요청을 하려면
            Promise.all([axios.get('/url1'),axios.get('/url2')]).then(()=>{})
          //서버는 문자만 주고 받을 수 있으나
          ///"따옴표" 를 사용하면 array, object 도 전송이 가능함 // .json 파일은 가능함
          
          //js 기본문법 중 하나. Get요청 가능
          //fetch를 사용하려면 .then(결과=>결과.json()) / .then(data=>{}) 
          //json 파일을 array/object 변환과정이 필요하다
          fetch("https://codingapple1.github.io/shop/data2.json")
          .then(결과=>결과.json())
        }}
      >
        버튼
      </button> */}
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
