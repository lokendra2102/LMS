import React from 'react'
import AlphaNavLinks from './AlphaNavLinks'
import NavHead from './NavHead'
import NavLinks from './NavLinks'

function Header() {
  return (
    <>
        <NavHead/>
        <NavLinks/>
        <AlphaNavLinks/>
    </>
  )
}

export default Header