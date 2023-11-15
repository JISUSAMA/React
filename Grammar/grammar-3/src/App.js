// /*eslint-disable*/ 문장 아래에 오는 경고 메세지를 지워준다
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

  //state는 등호로 변경되지 않음
  let [Hart, setHart] = useState(0);
  let [Date, setDate] = useState(["2023-11-13", "2023-11-13", "2023-11-13"]);

  function like_Onclick() {
    setHart += 1;
  }
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
          {/* onClick={} 이벤트 핸들러 */}
          {/* <span onClick={like_Onclick}> 좋아요❤ </span> {Hart} */}
          <span
            onClick={() => {
              setHart(Hart + 1);
            }}
          >
            {" "}
            좋아요❤{" "}
          </span>{" "}
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
    </div>
  );
}

export default App;
