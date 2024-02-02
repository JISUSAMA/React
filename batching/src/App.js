import logo from './logo.svg';
import './App.css';
import {useState , useTransition, useDeferredValue } from 'react'

let a = new Array(10000).fill(0)
function App() {
  let [name, setName] = useState('')
  let [isPending, startTransition] = useTransition()

 let state = useDeferredValue(name)
  return (
    <div>
      { <input onChange={ (e)=>{ 
        //코드의 실행을 나중에 처리 해줌
        startTransition(()=>{
         setName(e.target.value) 
        })}}/>}

      {
        isPending ? '로딩중' : 
        a.map(()=>{
          return <div>{state}</div>
        })
      }
    </div>
  )
}

export default App;
