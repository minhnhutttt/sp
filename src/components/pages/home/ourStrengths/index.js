import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./ourStrengths.module.scss"
import OurStrengthsItem from "./ourStrengthsItem"
import { graphql, useStaticQuery } from "gatsby"

const OurStrengths = () => {
    const data = useStaticQuery(graphql`
        query StrengthQuery {
        allStrengthsJson {
            edges {
            node {
                id
                description
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
        <div className={styles.strength}>
            <div className={styles.strengthWrap}>
                <div className={styles.strengthImg}>
                    <StaticImage src="../../../../images/img-strength.png" alt="Our Strengths" />
                </div>
                <div className={styles.strengthContent}>
                    <h5 className={styles.strengthTtl}>Our Strengths</h5>
                    <div className={styles.strengthContentList}>
                        {data.allStrengthsJson.edges.map((item, index) => {
                        return (
                            <OurStrengthsItem key={index} image={item.node.image.childImageSharp.fluid} text={item.node.description} />
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStrengths
