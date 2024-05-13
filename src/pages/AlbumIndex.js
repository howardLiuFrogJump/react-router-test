import { useOutletContext } from "react-router-dom"

import List from "../components/list";

export default function AlbumIndex(){
  const list = useOutletContext();
  return(
    <div>相簿的首頁唷
      <List list={list}/>

    </div>
  )
}