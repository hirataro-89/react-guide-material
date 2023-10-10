import { useState } from "react";

const Example = () => {
  const [count, setConnt] = useState(0);
  const countUp = () => {
    setConnt(count + 1);
    setConnt(prevstate => {
      return prevstate + 1;
    })
  }
  const countDown = () => {
    setConnt(count - 1);
  }
  return (
    <>
      <p>現在のカウント数:{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
};

export default Example;
