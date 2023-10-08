/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = ({ color = 'green', num = 123, fn, bool, obj  }) => {

  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h3> Hello {num}</h3>
      <h3>{fn('props')}</h3>
      <h3>{ bool ? 'true' : 'false' }</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  )
}

export default Child;
