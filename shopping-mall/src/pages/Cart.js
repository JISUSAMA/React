import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Store from "../store.js";
import { combineSlices } from "@reduxjs/toolkit";
//Redux를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다
function Cart() {
  let CartData = useSelector((state) => state.Store.Cart);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th> #</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {CartData.Cart.map((a, i) => {
            <tr>
              <td>{CartData.Cart[i] + 1}</td>
              <td>{CartData.Cart[i].name}</td>
              <td>{CartData.Cart[i].count}개</td>
            </tr>;
          })}
          <CartList
            CartData={CartData}
            length={CartData.Cart.length}
            list_n={0}
          ></CartList>

          {/* <tr>
            <td>1</td>
            <td>{CartData.Cart[0].name}</td>
            <td>{CartData.Cart[0].count}개</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{CartData.Cart[1].name}</td>
            <td>{CartData.Cart[1].count}개</td>
          </tr> */}
          {/* <CartList
            CartData={CartData}
            length={CartData.Cart.length}
            list_n={0}
          ></CartList> */}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
function CartList(props) {
  console.log("들어오는거낙?");
  return (
    <tr>
      <td>{props.list_n + 1}</td>
      <td>{props.CartData.Cart[props.list_n].name}</td>
      <td>{props.CartData.Cart[props.list_n].count}개</td>
    </tr>
  );
}
