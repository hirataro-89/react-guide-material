import Layout2 from "../../components/layout/layout2"

export default function Page() {
  return (
    <div>
      <p>レイアウト2: ヘッダーがBOTTOMにある</p>
    </div>
  );
}

//Pageの関数にgetLayoutというプロパティを追加。Layout2が呼ばれたときだけLayout2を使用するようにするため
Page.getLayout = (page) => {
  return <Layout2>{page}</Layout2>
}