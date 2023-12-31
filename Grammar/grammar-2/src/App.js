import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let post = "유명한 커피 맛집";

  // return()안에는 병렬로 태그 2개 이상 기입이 안됨
  //자료를 잠깐 보관하고 싶을때 state 를 사용함
  //useState() 가 되지 않으면 import { useState } from "react"; 를 선언해주면 됨
  let [Title, setTitle] = useState("쇼핑몰");
  let [Blog1, setBlog1] = useState([
    "최저가 마우스",
    "당근 직거래",
    "일본 여행 패스",
  ]);
  let [Date, setDate] = useState(["2023-11-13", "2023-11-13", "2023-11-13"]);
  //Destructuring 문법 ,
  //a = 최저가 마우스 / b = state 변경을 도와주는 함수
  //state 함수는 state 를 쓰던 html 안에 값이 변경이 되면 자동으로 변경이 되면서 자동 재 렌더링이 된다
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{ color: "red" }}>
          {Title}
        </h4>
      </div>
      <h5>{post}</h5>
      <div className="grammar-list">
        <h4>{Blog1[0]}</h4>
        <p>{Date[0]}</p>
      </div>
      <div className="grammar-list">
        <h4>{Blog1[1]}</h4>
        <p>{Date[1]}</p>
      </div>
      <div className="grammar-list">
        <h4>{Blog1[2]}</h4>
        <p>{Date[2]}</p>
      </div>
    </div>
  );
}

export default App;
