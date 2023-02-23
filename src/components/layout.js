/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useLocation } from "@gatsbyjs/reach-router"
import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  const location = useLocation()
  console.log(!location.pathname === '/')
  return (
    <>
      <Header hasBg={location.pathname === '/'} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
