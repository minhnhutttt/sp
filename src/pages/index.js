import * as React from "react"

import Layout from "../components/layout"
import MainVisual from "../components/mainVisual"
import About from "../components/pages/home/about"
import OurStrengths from "../components/pages/home/ourStrengths"
import Product from "../components/pages/home/product"
import Service from "../components/pages/home/service"
import Support from "../components/pages/home/support"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <MainVisual />
    <About />
    <Service />
    <Product />
    <OurStrengths />
    <Support />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
