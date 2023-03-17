import { useDispatch  } from "react-redux"
import { increment, decrement} from "../redux/counterSlice"
export default function Counter2() {
const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter 2</h1>
      <button onClick={()=>dispatch(increment())} >Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
    </div>
  );
}
