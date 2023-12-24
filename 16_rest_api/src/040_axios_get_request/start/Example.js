import {useEffect} from 'react';
import axios from 'axios';

const Example = () => {
  useEffect(() => {
    // パターン1 asyncとawaitを使用する
    // ただ、useEffectの直下でasyncは使用できないので、
    // 1つそれ用の関数を定義する必要がある。
    const getTodo = async () => {
      const res = await axios.get('http://localhost:3003/todo');
      console.log(res.data);
    }
    getTodo();
    // パターン2 .thenでつなげる
    // axios.get('http://localhost:3003/todo').then((res) => {
    //   console.log(res.data);
    // });
  })
};

export default Example;
