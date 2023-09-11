import React, { useContext, useEffect, useState } from 'react'
// import AlphaNavLinks from './AlphaNavLinks'
import NavHead from './NavHead'
import NavLinks from './NavLinks'
import { BookContext } from '../../Context/App.context'

function Header({width}) {
  const { user, userSignOut } = useContext(BookContext)
  return (
    <>
        <NavHead width={width} user={user} userSignOut={userSignOut}/>
        <NavLinks user={user}/>
        {/* <AlphaNavLinks/> */}
    </>
  )
}

export default Header