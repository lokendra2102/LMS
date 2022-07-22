import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [data,setData] = useState("")


  return (
    <BookContext.Provider value={{
      isLoggedIn : true,
      data : data
    }}>
        {children}
    </BookContext.Provider>
  )
}
