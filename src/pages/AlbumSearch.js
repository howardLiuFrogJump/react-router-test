import { useState , useEffect } from "react"
import { Link , useSearchParams } from "react-router-dom";
import axios from 'axios';

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumSearch(){
  const [list , setList] = useState([]);
  const [search , setSearch ] = useState('');
  const [searchParams , setSearchParams ] = useSearchParams();

  // 練習用
  // useEffect(()  => {
  //   console.log('searchParams' , searchParams.get('query')); // 取出
  //   setSearchParams({ query : 'building'}); // 寫入
  // },[]);

  useEffect(()  => {
    if(search !== ''){
      (async()=>{
        const response = await axios.get(`${api}?client_id=${accessId}&query=${search}`);
        const { results } = response.data;
        setList(results);
      })()
    }
  },[search])

  useEffect(()  => {
    setSearch(searchParams.get('query'));
  },[searchParams])

  return(
  <> 
  這是搜尋頁面 {search}
    <input type="text"  
    className="form-control" 
    defaultValue={search}
    onKeyUp={(e)=>{
      if(e.code==="Enter"){
        setSearchParams({ query : e.target.value}); // 寫入
      }
    }}
    />
       {list.map((item) => {
          return(
            <li key={item.id}>
              <Link to={`/album/${item.id}`}> {item.id} </Link>
            </li>
          )
        })}
  </>
  )
}