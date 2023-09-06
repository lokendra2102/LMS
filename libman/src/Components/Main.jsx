import React,{useState,useEffect, useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import HomeCard from './Cards/HomeCard'
import CartHome from './Cart/CartHome'
import Footer from './Footer/Footer'
import Header from './NavBar/Header'
import BookContent from './SingleBook/BookContent'
import Notes from './Notes/Notes'
import { BookContext } from '../Context/App.context'
import Activitycontent1 from './SingleBook/ActivityContent1'
import Activitycontent2 from './SingleBook/ActivityContent2'
import Activitycontent3 from './SingleBook/ActivityContent3'
import Activitycontent4 from './SingleBook/ActivityContent4'
import Activitycontent5 from './SingleBook/ActivityContent5'
import Activitycontent6 from './SingleBook/ActivityContent6'


import { categories } from '../util/content'
import { categoryContent, path } from '../util/path'
import Mcq from './Mcq/Mcq'
import DemoNote from './Notes/Pages/DemoNote'
import Valiadtion1 from './Notes/Pages/Valiadtion1'

function Main() {
  const location = useLocation();
  const { user, paths, setPath, category, setCategories } = useContext(BookContext);
  
  const username = user && user !== "null" ? JSON.parse(user).username : null
  const [width, setWidth] = useState(username)
  const [w,setW] = useState(window.innerWidth)


  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth)
      if (w < 451){
        setWidth(width[0])
      }else{
        setWidth(username)
      }
    }
      
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [w])

  useEffect(() => {
    const loc = location.pathname.split("/");
    if(loc.includes("notes")){
      setPath(loc.splice(-2))
    }else{
      const ls = loc.pop();
      setPath(path(ls))
      const searchParams = new URLSearchParams(location.search)
      if(ls === ''){
          const cont = categoryContent('', false, categories)
          setCategories(cont)
      }else if(searchParams.size !== 0){
          const cont = categoryContent(searchParams.get("category"), true, categories)
          setCategories(cont)
      }
    }
  }, [location]);

  return (
      <>
        {/* <Router> */}
          <Header width={width}/>
          <Routes>
            <Route index path='/' element={<HomeCard width={width}/>} />
            <Route path='/about' element={<HomeCard width={width}/>} />
            <Route path='/contact' element={<HomeCard width={width}/>} />
            <Route path='/mock-drives' element={<HomeCard width={width}/>} />
            <Route path="notes">
              {/* <Route path="csa/:id" element={<Notes user={user} />} /> */}
              <Route path='csa/demo' element={<DemoNote user={user} path={paths}/>} />
              <Route path='csa/valiadtion1' element={<Valiadtion1 user={user} path={paths} />} />
              <Route path="cssa/:id" element={<Notes user={user} />} />
            </Route>
            <Route path='/user/:id/favourite' element={<HomeCard width={width}/>} />
            <Route path='/notes/mcq' element={<Mcq user={user}/>} />
            <Route path='/user/:id/cart' element={<CartHome />} />
            
            <Route path='/category' element={<HomeCard user={user} width={width}/>} />
            {/* <Route path='/category/:projectId' element={<BookContent/>} /> */}
            <Route path='/category/mobile-otp' element={<BookContent/>} />
            <Route path='/category/using_the_activity_to_store_the_records' element={<Activitycontent1/>} />
            <Route path='/category/activity_validation' element={<Activitycontent2/>} />
            <Route path='/category/update_details' element={<Activitycontent3/>} />
            
            <Route path='/category/call_the_activity_by_the_another_activity' element={<Activitycontent4/>} />
            <Route path='/category/copy_the_data_from_one_data_page_to_another_data_page' element={<Activitycontent5/>} />
            <Route path='/category/update_the_stock_details_in_the_same_table_by_using_the_activity' element={<Activitycontent6/>} />
          </Routes>
          <Footer/>
        {/* </Router> */}
      </>
  )
}

export default Main