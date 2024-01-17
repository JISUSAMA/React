
/*eslint-disable*/
import { useContext, useEffect, useState } from "react";
import {addItem} from '../store';

import {
  Button,
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//let Context1 = createContext() 사용하기
//Context API 특징, state 변경시 , 쓸데없는 것 까지 재렌더링됨
//변경되면, {재고} 안쓰는 놈들도 무조건 렌더링됨
//그래서 ContextAPI 보다 외부 라이브러리를 사용함

import { Context1 } from "./../App.js";
import { useDispatch } from "react-redux";
import context from "react-bootstrap/esm/AccordionContext.js";


// // 컴포넌트의 Lifecycle
// class Detail2 extends React.Component {
//   // mount : 페이지에 장착
//   componentDidMount() {}
//   // update : 페이지 업데이트
//   componentDidUpdate() {}
//   // unmount: 페이지 제거
//   componentWillUnmount() {}
// }
let OrderBtn = styled.button`
  background-color: ${(props) => (props.bg == "orange" ? "orange" : props.bg)};
  color: ${(props) => (props.bg == "orange" ? "white" : "orange")};
`;
let OrderBtn2 = styled.button(OrderBtn);
function Detail(props) {
  //Context 사용하려면 useContext(Context)
  let { 재고, cakeForm } = useContext(Context1); //오브젝트 형식으로 들어가 있음

  // useEffect(() => {
  //   //컴포넌트의 Lifecycle
  //   //mount, update 시 코드 실행 해주는 useEffect
  //   //html 렌더링 후에 동작한다
  //   //어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하기
  //   console.log("count " + count);
  // });

  let [TimeSale, setTimeSale] = useState(3);
  let [styleChange, setStyle] = useState("block");
let dispatch = useDispatch();

  //실행할 코드
  //useEffect(()=>{}) 1. 재렌더링 마다 코드 실행하고 싶을 경우,
  //useEffect(()=>{},[]) 2. mount시 1회, 코드 실행 하고 싶을 경우,
  //useEffect(()=>{return()=>{}},[]) 3. unmount시 1회, 코드 실행 하고 싶을 경우,
  //4. useEffect 실행 전에 뭔가 실행하려면 return()={}
  //5. 특정 state 변경시에만 실행하렴녀 [state명]

  useEffect(() => {
    let Count = TimeSale;
    setTimeout(() => {
      console.log(styleChange);
      setStyle("none");
    }, Count * 1000);
    let timer = setTimeout(() => {
      setTimeSale(TimeSale - 1);
    }, 1000);
    return () => {
      //useEffect 동작 전에 실행되는 코드를 작성
      clearTimeout(timer); //타이머 제거함수 //mount 시 실행이 안되고 unmount 시 실행이 된다.
    };
  }, []);
  let [inputNum, setInputNum] = useState(0);
  useEffect(() => {
    //값이 숫자가 인지 아닌지 확인 (isNaN) = Not a Number'의 약자
    if (isNaN(inputNum)) {
      let deleteStr = inputNum;
      let deleteStr_slice = deleteStr.slice(0, -1);

      setInputNum(deleteStr_slice);
      alert(inputNum + "숫자만 입력해주세요" + deleteStr);
      console.log("inputNum1" + inputNum);
    }
  }, [inputNum]);
  //useEffect에서 [] 안에는 실행조건을 넣어 줄 수 있다. []해당하는 값의 state가 변할 때 실행이 된다.
  // 1번만 실행하고 싶으면 [] 만 작성해주면 한번만 값이 들어온다

  let [count, setCount] = useState(0);
  //현재 url에 입력한 숫자를 알수있는 useParams()
  let { id } = useParams();
  // console.log("id " + id);
  let [tabBtn, setTabBtn] = useState(0);

    
  useEffect(()=>{
    let 꺼냄  =localStorage.getItem('watched');
꺼냄 = JSON.parse(꺼냄)
꺼냄.push(props.cakeForm[id].id);
꺼냄 = new Set(꺼냄)
꺼냄 = Array.from(꺼냄)
localStorage.setItem('watched',JSON.stringify(꺼냄));
},[])

  return (
    <>
      <h2>상세페이지</h2>
      <div
        className="alert alert-warning"
        style={{ display: `${styleChange}` }}
      >
        {TimeSale}초 후 창닫힘
      </div>
      <img src={props.cakeIMG} width="100%" />
      <h4>[ {props.cakeForm[id].cakeName} ]</h4>
      <p>{props.cakeForm[id].cakePrice}원</p>
      <input
        onChange={(e) => {
          setInputNum(e.target.value);
        }}
      />
      <>
        <button onClick={()=>{dispatch(
          addItem( { id: 2, name: "Red Yordan", count: 1 }))}}>주문하기</button>
        {/* <OrderBtn bg={"skyblue"} fs={"20px"}>
          주문하기
        </OrderBtn>
        <OrderBtn
          onClick={() => {
            setCount(count + 1);
          }}
          bg={"orange"}
          fs={"20px"}
        >
          주문하기
        </OrderBtn> */}
      </>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabBtn(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabBtn(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabBtn(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {재고}
      <Content_tab cakeForm={props.cakeForm} 탭={tabBtn} />
    </>
  );
}
//props 전송은 부모 -> 자식만 가능하다
//이 방법이 싫으면 Context API(리액트 기본 문법을 이용)
//Redux 등 외부라이브러리 를 사용하면 Props 전송없이 state가 공유가 가능하다
//성능이 별로, 컴포넌트 재활용이 힘듬

function Content_tab({ 탭, cakeForm }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>{재고}</div>,
          <div>{cakeForm[0].cakeName}</div>,
          <div>내용 2</div>,
        ][탭]
      }
    </div>
  );
  {
    /* if(props.탭==0){
    return <div>내용 0</div>
  }
 if(props.탭==1){
    return <div>내용 1</div>
  }
 if(props.탭==2){
    return <div>내용 2</div>
  } */
  }

  //방법 1.
  // return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.탭]
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

export default Detail;
