import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// //useState와 같은 속성
// let user = createSlice({
//   //name에는 state의 이름, initialState 에는 값을 넣어줌
//   name: "UID",
//   initialState: {name : 'park' ,age:20},
//   reducers: {
//     changeName(state) {
//       //return  {name : 'jisu' ,age:20};
//       //array/object의 경우 return 을 사용하지 않고 직접수정해도 state 변경됨 
//       state.name ='jisu';
//     },
//     changeAge(state,a){
//       state.age+= a.payload;
//     }
//   },
// });


let Cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },

  ],
  reducers:{
    changeCart(state,a){
      state[a.payload].count += 1;
    },
    addItem(state,a){
      state.push(a.payload);
    }
  }
});

//Redux 는 컴포넌트 간 state 공유를 쉽게 하기 위해서 사용함
export default configureStore({
  reducer: {
    //사용하기 위해서 여기에 등록을 해주어야함
    UID: user.reducer,
    Cart: Cart.reducer,
  },
});
export let {changeCart,addItem} = Cart.actions;