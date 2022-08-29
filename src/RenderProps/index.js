import { useEffect, useState } from "react";

export const RenderProps = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        name: "ankit",
        age: "20",
      },
      {
        name: "aman",
        age: "21",
      },
    ]);
  }, []);

  return children({ data });
};
