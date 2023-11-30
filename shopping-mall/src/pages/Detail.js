/*eslint-disable*/
import { useEffect, useState } from "react";
import { Button, Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  // useEffect(() => {
  //   //컴포넌트의 Lifecycle
  //   //mount, update 시 코드 실행 해주는 useEffect
  //   //html 렌더링 후에 동작한다
  //   //어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하기
  //   console.log("count " + count);
  // });

  let [TimeSale, setTimeSale] = useState(3);
  let [styleChange, setStyle] = useState("block");

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
      console.log(1);
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
        <button>주문하기</button>
        <OrderBtn bg={"skyblue"} fs={"20px"}>
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
        </OrderBtn>
      </>
    </>
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

export default Detail;
