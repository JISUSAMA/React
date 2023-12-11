import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState와 같은 속성
let user = createSlice({
  //name에는 state의 이름, initialState 에는 값을 넣어줌
  name: "UID",
  initialState: "PARK",
  reducers: {
    changeName(state) {
      return "JISU" + state;
    },
  },
});
//state 변경 함수들이 남는다 , 만든 함수 export 해주는 방법
export let { changeName } = user.actions;
let Cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
});

//Redux 는 컴포넌트 간 state 공유를 쉽게 하기 위해서 사용함
export default configureStore({
  reducer: {
    //사용하기 위해서 여기에 등록을 해주어야함
    UID: user.reducer,
    Cart: Cart.reducer,
  },
});
