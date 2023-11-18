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
      <button
        onClick={() => {
          updateDataElement("여자 코트");
        }}
      >
        게시글 변경하기
      </button>

      {/*
      이런한 하나의 클래스 덩어리를 묶어주기 위해서 <Modal></Modal> 이라는 태그를 사용한다. 
      <div className="detail-modal">
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세 내용</p>
      </div> */}
      {/* 컴포넌트 축약하는 방법 */}
<Detail_Modal></Detail_Modal>
{/* 위에와 같은 의미를 가지는 태그 */}
<Detail_Modal/> 
<Detail_Modal2/>
    </div>

  );
}
// 컴포넌트 만드는 방법
// 1. function 만들어준다.
// 2. return() 안에 html 담아준다
// 3. <함수명></함수명> 태그를 사용해준다.

//<></> 의미 없는 <div>태그 대신에 사용이 가능하다

// 컴포넌트를 만드는 이유
// 1. 반복적인 html을 축약할 때 사용
// 2. 큰페이지들을 하나의 컴포넌트로 만들때
// 3. 자주 변경이 되는 것들
// 4. state를 가져올 때 외부에 쓰여진 컴포넌트는 사용할 수 없다

function Detail_Modal(){
return (
  <>  
  <div className="detail-modal">
  <h3>제목</h3>
  <p>날짜</p>
  <p>상세 내용</p>
  </div>
  <div></div>
  </>

)
}
let Detail_Modal2=()=>{
  return (
    <>  
    <div className="detail-modal">
    <h3>제목</h3>
    <p>날짜</p>
    <p>상세 내용</p>
    </div>
    <div></div>
    </>
  
  )
}
export default App;
