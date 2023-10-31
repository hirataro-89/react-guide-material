import { useContext } from "react";
import { MyContext } from "../Example";
const OtherChild = () => {
  const [, setValue] = useContext(MyContext);

  const clickHandler = (e) => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
