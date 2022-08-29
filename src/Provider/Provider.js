import { createContext, useState } from "react";

export const ListContext = createContext();
export const ListProviders = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((count) => count + 1);
  };
  const decreaseCount = () => {
    setCount((count) => count - 1);
  };
  return (
    <ListContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {children}
    </ListContext.Provider>
  );
};
