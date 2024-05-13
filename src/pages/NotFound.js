
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export  function NotFound(){
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
    },2000)
  },[navigate])

  return(
    <>
      <p>找不到頁面</p>
    </>
  )
}