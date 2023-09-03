import React, { useContext } from 'react'
// import AlphaNavLinks from './AlphaNavLinks'
import NavHead from './NavHead'
import NavLinks from './NavLinks'
import { BookContext } from '../../Context/App.context'

function Header({width}) {
  const { user } = useContext(BookContext)
  return (
    <>
        <NavHead width={width} user={user}/>
        <NavLinks user={user}/>
        {/* <AlphaNavLinks/> */}
    </>
  )
}

export default Header