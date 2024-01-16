import { createSlice } from "@reduxjs/toolkit";

//useState와 같은 속성
let user = createSlice({
    //name에는 state의 이름, initialState 에는 값을 넣어줌
    name: "UID",
    initialState: {name : 'park' ,age:20},
    reducers: {
      changeName(state) {
        //return  {name : 'jisu' ,age:20};
        //array/object의 경우 return 을 사용하지 않고 직접수정해도 state 변경됨 
        state.name ='jisu';
      },
      changeAge(state,a){
        state.age+= a.payload;
        
      }
     
    },
  });
    //state 변경 함수들이 남는다 , 만든 함수 export 해주는 방법
export let { changeName, changeAge } = user.actions;

  export default user;
