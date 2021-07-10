import {useState} from "react"
import './App.css';
import Counter2 from "./Counter2";
export default function App()
 {
   const [counter, setCounter] = useState(1);
   const plusMinus = (number) => {
     setCounter(counter + number)
   }
   const [list,setList] = useState([1,2,3])
   const [open,setOpen] = useState(false)
   const toggle = () => {
     setOpen(!open)
   }
  return (
    <div >
      <h1> Use Effect</h1>
        <button onClick={() => plusMinus(-1)}> -1</button>
        {counter}
        <button onClick={() => plusMinus(+1)}> +1</button>
        <hr/>
        <button onClick={toggle} > open counter 2</button>
        {open && <Counter2/>}
        <hr/>
    </div>
  );
}



