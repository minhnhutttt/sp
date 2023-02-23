import * as React from "react"
import Banner from "../components/banner"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import DiverScan from "../components/pages/diverScan"


const AboutPage = ({ data }) => {
    return (
        <Layout>
            <Banner imageSrc={data.file.childImageSharp.fluid.src} text="DIVER Scan" />
            <DiverScan />
        </Layout>
    )
}
export const query = graphql`
  query {
      file(relativePath: { eq: "feature-diver.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`
export const Head = () => <Seo title="About" />

export default AboutPage
