import {useState} from "react"
import './App.css';
export default function Counter2()
{
    const [counter, setCounter] = useState(1);
    const plusMinus = (number) => {
        setCounter(counter + number)
    }

    return (
        <div >
            <h2> Counter 2 </h2>
            <button onClick={() => plusMinus(-1)}> -1</button>
            {counter}
            <button onClick={() => plusMinus(+1)}> +1</button>

        </div>
    );
}