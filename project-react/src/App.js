/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  let [Blog1, setBlog1] = useState([
    "최저가 마우스",
    "당근 직거래",
    "일본 여행 패스",
  ]);

  const NextPageUpdate = (statName, arr1, arr2, arr3) => {
    const newArray = [...statName];
    newArray[0] = arr1;
    newArray[1] = arr2;
    newArray[2] = arr3;

    if (statName == "Blog1") {
      setBlog1(newArray);
    } else if (statName == "Date") {
      setDate(newArray);
    }
  };

  let [Date, setDate] = useState(["2023-11-13", "2023-11-14", "2023-11-15"]);
  return (
    <div className="App">
      <h1>쇼핑몰</h1>
      <button
        onClick={() => {
          NextPageUpdate(
            "Blog1",
            "주술회전 굿즈",
            "아이폰 15",
            "로지텍 마우스"
          );
          NextPageUpdate("Date", "2023-11-17", "2023-11-18", "2023-11-19");
        }}
      >
        다음 페이지
      </button>
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
