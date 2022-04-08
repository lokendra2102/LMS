import React,{useState,useEffect} from 'react'
import HomeCard from './Cards/HomeCard'
import CartHome from './Cart/CartHome'
import Footer from './Footer/Footer'

import Header from './NavBar/Header'

function Main() {
  const [width, setWidth] = useState('Lokendra_S')
  const [w,setW] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451){
          setWidth(width[0])
      }else{
          setWidth('Lokendra_S')
      }
      console.log(w)
    }
      
    window.addEventListener("resize", handleResize)
    handleResize()
    
    return () => { 
        window.removeEventListener("resize", handleResize)
    }
  }, [w])
  return (
      <>
        <Header width={width}/>
        {/* <HomeCard width={width}/> */}
        <CartHome/>
        <Footer/>
      </>
  )
}

export default Main