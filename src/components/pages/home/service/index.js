import * as React from "react"
import * as styles from "./service.module.scss"
import ServiceItem from "./serviceItem"
import { graphql, useStaticQuery } from "gatsby"

const Service = () => {
    const data = useStaticQuery(graphql`
        query ServiceQuery {
        allServiceJson {
            edges {
            node {
                id
                text
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
        <div className={styles.service}>
            <div className={styles.serviceWrap}>
                <h3 className={styles.serviceTtl}>Service</h3>
                <div className={styles.serviceContent}>
                    {data.allServiceJson.edges.map((item, index) => {
                        return (
                            <ServiceItem key={index} imageSrc={item.node.image.childImageSharp.fluid} text={item.node.text} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service
