import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    const newNums = [...nums];
    const value = newNums.pop(); //一番最後の値を取得
    newNums.unshift(value); //取得した値を配列の先頭に
    setNums(newNums);
  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
