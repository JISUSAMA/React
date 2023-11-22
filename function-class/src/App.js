/*eslint-disable*/
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "유명한 커피 맛집";

  let [Title, setTitle] = useState("쇼핑몰");
  let [Blog1, setBlog1] = useState([
    "최저가 마우스",
    "당근 직거래",
    "일본 여행 패스",
  ]);

  let [ModalState, setModalState] = useState(0);
  let [inputValue, setInputValue] = useState("기본값");

  Blog1.map(function (a, i) {});
  let [Hart, setHart] = useState([0, 0, 0]);
  let [Date, setDate] = useState(["2023-11-13", "2023-11-12", "2023-11-11"]);
  let [Detail, setDetail] = useState(false);
  const updateDataElement = (newValue) => {
    const newArray = [...Blog1];
    newArray[0] = newValue;
    setBlog1(newArray);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4
          id={post}
          style={{
            color: "red",
          }}
        >
          {Title}
        </h4>
      </div>
      <h5>{post}</h5>
      {Blog1.map(function (a, i) {
        return (
          <div className="grammar-list" key={i}>
            <h2
              onClick={() => {
                setDetail(true);
                setModalState(i);
              }}
            >
              {Blog1[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation(); //상위로 퍼지는 이벤트 버블링을 막을 수 있음
                  let newHart = [...Hart];
                  newHart[i] = newHart[i] + 1;
                  setHart(newHart);
                }}
              >
                {" "}
                ❤ {Hart[i]}
              </span>
            </h2>
            <p>{Date[i]}</p>
            <button
              onClick={() => {
                let copy = [...Blog1];
                copy.splice(i, 1);
                setBlog1(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let newArray = [...Blog1];
          newArray.unshift(inputValue);
          setBlog1(newArray);
          let newDate = [...Date];
          newDate.unshift("2023-11-21");
          setDate(newDate);
          let newHart = [...Hart];
          newHart.unshift(0);
          setHart(newHart);
        }}
      >
        글발행
      </button>
      {Detail ? (
        <Detail_Modal
          제목값={ModalState}
          글제목변경={setBlog1}
          color={"skyblue"}
          modal1={Blog1}
          date={Date}
        />
      ) : null}
      <Detail_Modal2 Blog1={Blog1} />
    </div>
  );
}

function Detail_Modal(props) {
  return (
    <div className="detail-modal" style={{ backgroundColor: props.color }}>
      {" "}
      <h3>{props.modal1[props.제목값]}</h3>
      <p>날짜 : {props.date[props.제목값]}</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자코트", "당근 직거래", "일본 여행 패스"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}
//class 문법으로 컴포넌트 생성하기
//내부에는 constructor, super, render를 작성해줌
class Detail_Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "별찌루",
      gander: "W",
      age: "28",
    };
  }
  render() {
    return (
      //html 작성하는 곳
      <div>
        안녕 나는 {this.state.name}
        {/* class 형식 state 변경하는 방법 
        기존 state에서 변경사항만 변경해줌
        */}
        <button
          onClick={() => {
            this.setState({ name: "Xisu" });
          }}
        >
          이름 변경
        </button>
        <br />첫 글제목은 {this.props.Blog1[0]}
      </div>
    );
  }
}
export default App;
