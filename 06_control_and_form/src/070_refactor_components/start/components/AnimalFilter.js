const AnimalFilter = ({filterState}) => {
  // 分割代入で配列から値を取得
  const [filterVal, setFilterVal] = filterState;
  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  )
}
export default AnimalFilter;