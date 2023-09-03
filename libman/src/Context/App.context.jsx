import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [data,setData] = useState("")

  //Login
  //Signup
  //Signout
  //Add-Membership
  //Remove-Membership
  //Cart
  //Buy-Course
  //Get-Courses

  return (
    <BookContext.Provider value={{
      isLoggedIn : true,
      data : data
    }}>
        {children}
    </BookContext.Provider>
  )
}
