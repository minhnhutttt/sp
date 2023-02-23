import * as React from "react"
import Banner from "../components/banner"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import PrivacyPolicy from "../components/pages/terms/privacyPolicy"


const PrivacypolicyPage = ({ data }) => {
    return (
        <Layout>
            <Banner imageSrc={data.file.childImageSharp.fluid.src} text="Privacy policy" />
            <PrivacyPolicy />
        </Layout>
    )
}
export const query = graphql`
  query {
      file(relativePath: { eq: "feature-privacy-policy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`
export const Head = () => <Seo title="Privacy policy" />

export default PrivacypolicyPage
