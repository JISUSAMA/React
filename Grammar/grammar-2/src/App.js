import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{ color: "red" }}>
          블로그
        </h4>
      </div>
      <div className="grammar-list">
        <h4>글 제목</h4>
        <p>2023-11-13</p>
      </div>
      <h5>{post}</h5>
    </div>
  );
}

export default App;
