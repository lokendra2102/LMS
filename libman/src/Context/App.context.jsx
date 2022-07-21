import axios from 'axios'
import React,{ useState,useEffect,createContext } from 'react'

export const BookContext = createContext()

export const AppContext = ({children}) => {

  const [data,setData] = useState("")

  const userSignIn = async(user,pass) => {
    await axios.post("http://localhost:8082/api1/auth/signin",{
      "username":user,
      "password":pass
    },{
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Credentials':true,
      "credentials": 'include'
    }).then(data=>{
      setData('yes')
      console.log(data)
    }).catch(e=>{
      // setData(e.message)
      console.log(e)
    })
  }

  useEffect(async()=>{
    await axios.get("http://localhost:8082/api1/test/user",{
      "Access-Control-Allow-Origin": "*"
    }).then(d=>{
      console.log(d)
    }).catch(e=>{
      console.log(e.message)
    })
  },[data])

  return (
    <BookContext.Provider value={{
      isLoggedIn : true,
      userSignIn : userSignIn,
      data : data
    }}>
        {children}
    </BookContext.Provider>
  )
}
