import { Button, Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let OrderBtn = styled.button`
  background-color: ${(props) => (props.bg == "orange" ? "orange" : props.bg)};
  color: ${(props) => (props.bg == "orange" ? "white" : "orange")};
`;
let OrderBtn2 = styled.button(OrderBtn);
function Detail(props) {
  //현재 url에 입력한 숫자를 알수있는 useParams()
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <h2>상세페이지</h2>
      <img src={props.cakeIMG} width="100%" />
      <h4>[ {props.cakeForm[id].cakeName} ]</h4>
      <p>{props.cakeForm[id].cakePrice}원</p>
      <button>주문하기</button>
      <OrderBtn bg={"skyblue"} fs={"20px"}>
        주문하기
      </OrderBtn>
      <OrderBtn bg={"orange"} fs={"20px"}>
        주문하기
      </OrderBtn>
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
