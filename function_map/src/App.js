/*eslint-disable*/

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

  Blog1.map(function (a, i) {});
  let [Hart, setHart] = useState([0, 0, 0]);
  let [Date, setDate] = useState(["2023-11-13", "2023-11-13", "2023-11-13"]);
  let [Detail, setDetail] = useState(false);
  const updateDataElement = (newValue) => {
    const newArray = [...Blog1];
    newArray[0] = newValue;
    setBlog1(newArray);
  };
  //map 사용법
  //array의 갯수 만큼 함수 안의 코드를 실행해준다
  //함수의 파라미터는 array 안에있던 자료이다.
  // return -- array 로 담아준다.
  [1, 2, 3].map(function (a) {
    return "456789"; //array 형식으로 담김
    // console.log(a);
  });
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{ color: "red" }}>
          {Title}
        </h4>
      </div>
      <h5>{post}</h5>
      {/* {[0, 1, 2].map(function (a) {
        return (
          <div className="grammar-list">
            <h2>{Blog1[a]}</h2>
            <p>{Date[a]}</p>
          </div>
        );
      })} */}

      {Blog1.map(function (a, i) {
        return (
          <div className="grammar-list" key={i}>
            <h2>
              {Blog1[i]}
              <span
                onClick={() => {
                  let newHart = [...Hart];
                  newHart[i] = newHart[i] + 1;
                  setHart(newHart);
                  console.log(newHart);
                }}
              >
                {" "}
                좋아요❤ {Hart[i]}
              </span>
            </h2>
            <p>{Date[i]}</p>
          </div>
        );
      })}
    </div>
  );
}
function Detail_Modal() {
  return (
    <>
      <div className="detail-modal">
        <h3>제목</h3>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
      <div></div>
    </>
  );
}

export default App;
