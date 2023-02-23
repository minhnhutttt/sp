import * as React from "react"
import * as styles from "./service.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import ServiceItem from "./serviceItem"
const Service = () => {
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allServicesJson {
                edges {
                    node {
                        id
                        title
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
        <div className={styles.service}>
            <div className={styles.serviceHead}>
                <p className={styles.serviceHeadTtl}>
                Blockchain Scanning Service
                </p>
                <p className={styles.serviceHeadTxt}>We provide services that analyze transactions on the blockchain with high precision and provide a clear understanding of market trends and transaction patterns.</p>
            </div>
            
            <div>
                <div className={styles.serviceContent}>
                {data.allServicesJson.edges.map((item, index) => {
                        return (
                            <ServiceItem key={index} imageSrc={item.node.image.childImageSharp.fluid} title={item.node.title} text={item.node.description} />
                        )
                    })}
                </div>        
            </div>    
            
        </div>
    )
}

export default Service
