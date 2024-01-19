import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";

// const fetchData = async () => {
//   const response = await axios.get(
//     "https://codingapple1.github.io/userdata.json"
//   );
//   return response.data;
// };

const MyComponent = () => {
  const { data, error, isError } = useQuery({
    queryKey: ["myQueryKey"],
    queryFn: async () => {
      const res = await axios.get(
        "https://codingapple1.github.io/userdata.json"
      );
      return res.data;
    },
  });
  if (isError) {
    console.error("요청 실패:", error);
    // 에러 처리 로직 작성
  } else if (data) {
    return (
      <div>
        <h2>{data.name}</h2>
        <h3>{data.email}</h3>
      </div>
    );
  }
};
function App() {
  //   let result =  useQuery('useReactQuery',()=>{
  //  return axios.get('https://codingapple1.github.io/userdata.json')
  //  .then((a)=>{ return a.data});
  // })

  // const {data,isLoading} = useQuery('post',fetchPosts);
  //const { data: posts, isInitialLoading } = useQuery(['posts'], () => axios.get("https://codingapple1.github.io/userdata.json"));

  const { data, error, isError } = useQuery({
    queryKey:['myQueryKey2']
  ,queryFn:()=>
   {return axios.get('https://codingapple1.github.io/userdata.json').then((res=>res.data))}
   ,});


  return (
    <div className="App">
    {<MyComponent></MyComponent>}
    </div>
  );
}

export default App;
