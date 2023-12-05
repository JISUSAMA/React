import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
//Redux를 사용하면 컴포넌트들이 props 없이 state 공유가 가능하다
function Cart() {
  let user1 = useSelector((state) => {
    return state;
  });
  console.log(user1);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
