import * as React from "react"

import Layout from "../components/layout"
import MainVisual from "../components/mainVisual"
import Home from "../components/pages/home"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <MainVisual />
    <Home />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
