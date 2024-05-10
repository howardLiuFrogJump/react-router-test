import { Outlet } from "react-router-dom"

import axios from 'axios';
import { useEffect, useState } from "react";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumLayout(){
  const [list , setList] = useState([]);
  useEffect(()  => {
    (async()=>{
      const response = await axios.get(`${api}?client_id=${accessId}&query=animal`);
      const { results } = response.data;
      console.log(results);
      setList(results);
    })()
  },[])

  return(
    <div className="row">
      <div className="col-4">
        左側選單
        {list.map((item) => {
          return(
            <li key={item.id}>{item.id}</li>
          )
        })}
      </div>
      <div className="col-8">
        <Outlet context={list}/>
      </div>
    </div>
  )
}