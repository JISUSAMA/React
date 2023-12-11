import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Store from "../store";
import { changeName } from "../store";
import { combineSlices } from "@reduxjs/toolkit";
import React from "react";
//Redux를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다
function CartGrup() {
  let CartData = useSelector((state) => state);
  let dispatch = useDispatch(); //state변경함수 사용하기 위해서 사용함
  return (
    <div>
      {CartData.UID} 장바구니 리스트
      <Table>
        <thead>
          <tr>
            <th> #</th>
            <th>상품명</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {CartData.Cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{a.name}</td>
                <td>{a.count}개</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
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
    </div>
  );
}
export default CartGrup;
