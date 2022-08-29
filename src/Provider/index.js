import { useContext } from "react";
import { ListContext } from "./Provider";
//using Hooks
export const Lists = () => {
  const { count, increaseCount, decreaseCount } = useContext(ListContext);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  );
};

// Using Consumer
// export const Lists = () => (
//   <ListContext.Consumer>
//     {({ count, increaseCount, decreaseCount }) => {
//       return (
//         <>
//           <p>Count: {count}</p>
//           <button onClick={increaseCount}>+</button>
//           <button onClick={decreaseCount}>-</button>
//         </>
//       );
//     }}
//   </ListContext.Consumer>
// );
