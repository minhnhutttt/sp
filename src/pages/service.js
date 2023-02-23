import * as React from "react"
import Banner from "../components/banner"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Service from "../components/pages/service"


const ServicePage = ({ data }) => {
    return (
        <Layout>
            <Banner imageSrc={data.file.childImageSharp.fluid.src} text="SERVICE" />
            <Service />
        </Layout>
    )
}
export const query = graphql`
  query {
      file(relativePath: { eq: "feature-service.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`
export const Head = () => <Seo title="Service" />

export default ServicePage
