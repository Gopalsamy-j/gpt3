import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './containers/navbar/Navbar'
import Footer from './containers/footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout