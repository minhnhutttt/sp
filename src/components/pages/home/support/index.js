import * as React from "react"
import * as styles from "./support.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Support = () => {
    const data = useStaticQuery(graphql`
        query SupportQuery {
        allSupportJson {
            edges {
            node {
                id
                image {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
        }
  `)
    return (
        <div className={styles.support}>
            <div className={styles.supportWrap}>
                <h5 className={styles.supportTtl}>Technologies We Support</h5>
                <p className={styles.supportTxt}>We primarily support the following technologies</p>
                <div className={styles.supportItems}>
                    {data.allSupportJson.edges.map((item, index) => {
                        return (
                            <div className={styles.supportItem} key={index}>
                                <Img fluid={item.node.image.childImageSharp.fluid} layout="fixed" alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Support
