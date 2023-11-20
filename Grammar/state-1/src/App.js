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

  let [Hart, setHart] = useState(0);
  let [Date, setDate] = useState(["2023-11-13", "2023-11-13", "2023-11-13"]);

  const updateDataElement = (newValue) => {
    const newArray = [...Blog1];
    newArray[0] = newValue;
    setBlog1(newArray);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{ color: "red" }}>
          {Title}
        </h4>
      </div>
      <h5>{post}</h5>
      <div className="grammar-list">
        <h4>
          {Blog1[0]}
          <span
            onClick={() => {
              setHart(Hart + 1);
            }}
          >
            좋아요❤{" "}
          </span>
          {Hart}
        </h4>
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
      <span
        onClick={() => {
          // 방법 1.
          // updateDataElement("여자 코트");

          //방법 2.
          //array/object 를 다룰때는 원본을 보존 하는 것이 좋다
          //state 변경함수는, 기존state 와 신규 state 같으면 변경이 되지 않는다
          //array/object 변수에는 포인트(화살표)의 위치만 저장 되어있다

          //변경이 되지 않는다
          //Blog1은 array를 가지고 있어서 array 안에는 배열이 아닌 포인터의 위치 값만 가지고 있기 때문에 복사한 변수의 값을 변경한다고 해도 포인터의 위치 값이 변경되는 것이 아니기 때문에 state 함수의 특징으로 인해서 값이 재랜더링 되지 않는다
          let copy1 = Blog1;
          copy1[0] = "여자코트";
          setBlog1(copy1);
          console.log((copy1 = Blog1)); //true

          let copy2 = [...Blog1];
          copy2[0] = "여자코트"; //원본은 보존됨
          setBlog1(copy2);
        }}
      >
        게시글 변경하기
      </span>
    </div>
  );
}

export default App;
