import { useState } from 'react';

const Example = () => {
  const [ countA, setCountA ] = useState(0);
  const [ countB, setCountB ] = useState(5);
  const [ countC, setCountC ] = useState(13);
  return (
    <>
      <p>ボタンを{countA}回押しました</p>
      <button onClick={() => {
        setCountA(countA + 1);
      }}>countA</button>
      <p>ボタンを{countB}回押しました</p>
      <button onClick={() => {
        setCountB(countB + 1);
      }}>countB</button>
      <p>ボタンを{countC}回押しました</p>
      <button onClick={() => {
        setCountC(countC + 1);
      }}>countC</button>
    </>
  )
};

export default Example;
