import { useResize } from "./useResize";

export const ChangeWindowSize = () => {
  const [dimension] = useResize();
  return (
    <div>
      <p>Width: {dimension.width}</p>
      <p>Height: {dimension.height}</p>
    </div>
  );
};
