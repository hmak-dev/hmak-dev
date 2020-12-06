import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./index.styl"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
