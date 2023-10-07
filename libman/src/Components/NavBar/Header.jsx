import React, { useContext } from 'react'
// import AlphaNavLinks from './AlphaNavLinks'
import NavHead from './NavHead'
import NavLinks from './NavLinks'
import { BookContext } from '../../Context/App.context'

function Header({width, winWidth, updateMembership}) {
  const { user, userSignOut } = useContext(BookContext)
  return (
    <>
        <NavHead width={width} user={user} userSignOut={userSignOut} winWidth={winWidth} updateMembership={updateMembership} />
        <NavLinks user={user} updateMembership={updateMembership}/>
        {/* <AlphaNavLinks/> */}
    </>
  )
}

export default Header