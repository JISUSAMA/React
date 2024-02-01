import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Store, { addItem } from "../store";
import user, { changeName , changeAge } from "../store/userSlice";
import {changeCart} from '../store';
import { combineSlices } from "@reduxjs/toolkit";
import React, { memo, useMemo, useState } from "react";


const Child = memo(function Child(){
  console.log('다시불러와지나')
  return <div>child</div>
})

function Total(){
  let result =0;
  for(let i =0; i<10; i++){
    result +=i;
  //  console.log(result);
  } 
  return result;
}
//Redux를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다
function CartGrup() {
  let CartData = useSelector((state) => state);
  let dispatch = useDispatch(); //state변경함수 사용하기 위해서 사용함

   let [count, setCount] = useState(0);
let total = useMemo(()=>{return Total()})
console.log(total)
  return (
    <div>
      <Child></Child>
      <button onClick={()=>{setCount(count +1)}}>+</button>
      <h4>{CartData.UID.name} {CartData.UID.age}의 장바구니 리스트</h4>
      <button onClick={()=>{dispatch(changeAge(10))}}>나이 + 1</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            
          CartData.Cart.map((a, i) => {
            console.log(a);
            return (
              <tr key={i}>
                <td>{CartData.Cart[i].id}</td>
                <td>{CartData.Cart[i].name}</td>
                <td>{CartData.Cart[i].count}개</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCart(CartData.Cart[i].id));
                    }}
                  >
                    변경
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

      </Table>
      <button onClick={()=>{dispatch(addItem({ id: 2, name: "Red Yordan", count: 1 }))}} >물품 추가</button>
    </div>
  );
}
export default CartGrup;
