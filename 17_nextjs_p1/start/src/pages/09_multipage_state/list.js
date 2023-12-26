import List from "../../components/list"
import { useAppContext } from "../../context/AppContext"


export default function PageList() {
  const [list, ] = useAppContext();
  return <List list={list} />
}
