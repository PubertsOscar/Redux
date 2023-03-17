import Counter2 from "./Counter2";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetPostsByIdQuery } from "../redux/postsSlice"

export default function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const {data, isLoading, isError} = useGetPostsByIdQuery(5)
  return (
    <div>
      {JSON.stringify(data)}
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch((incrementByAmount(20)))}>byamount</button>
      <Counter2 />
    </div>
  );
}
