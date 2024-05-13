import { useParams , useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const api = "https://api.unsplash.com/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPhoto(){
  console.log(useParams());
  const { id } = useParams();
  const [photo , setPhoto] = useState({});
  const navigate = useNavigate();

  useEffect(()  => {
    (async()=>{
      const response = await axios.get(`${api}/${id}?client_id=${accessId}`);
      console.log('AlbumPhoto' , response);
      await setPhoto(response.data);
    })()
  },[id])

  return(
    <>
      <button type="button" onClick={()=>{
        navigate(-1)
      }}>回到上一頁</button>
      <p>這是單張圖片</p>
      { id }
      <p> {photo.description}</p>
      <img src={photo?.urls?.regular} className="img-fluid" alt="" />
    </>
  )
}