import logo from './logo.svg';
import './App.css';

function App() {
  let post ='유명한 커피 맛집';
  //html 형식으로 작성하는 경우
  //document.querySelector('h5').innerHTML=post;
  return (
    <div className="App">
      {/* 레이아웃 만들기
       리액트는 html 대신 JSX 라는 것을 사용한다  
       JSX 문법 1:class를 작성할 때, className 이라고 작성해야한다
       JSX 문법 2:변수를 넣을 땐{ 중괄호 } = 데이터 바인딩
       JSX 문법 3:style 넣을 땐 style={{스타일명: '값'},{스타일명: '값'}}
      - 를 사용하면 -(뺄셈)으로 인식한다 그래서 font-size 가 아닌 fontSize로 사용한다
      */}

      <div className='black-nav'>
        <h4 id={post} style={{color :'red'}} >블로그</h4>
      </div>
      <h5>{post}</h5>
    </div>
  );
}

export default App;
