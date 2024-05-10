import { useOutletContext } from "react-router-dom"

export default function AlbumIndex(){
  const list = useOutletContext();
  console.log('AlbumIndex:')
  return(
    <div>相簿的首頁唷
      {list.map((item) => {
      return(
        <li key={item.id}>{item.id}</li>
      )
      })}

    </div>
  )
}