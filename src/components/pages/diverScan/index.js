import * as React from "react"
import * as styles from "./diverScan.module.scss"
import DiverScanItem from "./diverScanItem"
import Button from "../../button"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
const DiverScan = () => {
    const data = useStaticQuery(graphql`
        query DiverQuery {
            allDiverJson {
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
        <div className={styles.diver}>
            <div className={styles.diverHead}>
                <div className={styles.diverHeadWrap}>
                    <h4 className={styles.diverHeadTtl}>Brand new blockchain</h4>
                    <p className={styles.diverHeadTxt}>
                        We are pleased to announce the release of our scanning service on the new "Diver" blockchain. This service analyzes transaction data on the Diver blockchain with high accuracy to clearly understand market trends and transaction patterns.<br />
                        <br />
                        The service is available in multiple languages, allowing customers to use the service in the language they are most comfortable with. In addition, analysis results can be displayed using visualization tools such as graphs and charts, allowing users to intuitively understand the data.<br />
                        <br />
                        Furthermore, API connectivity is supported, enabling integration with other applications and services. In addition, it has a high level of security, providing a service that takes your privacy and security into consideration.
                    </p>
                </div>
            </div>
            <div className={styles.diverContent}>
                <div className={styles.diverItems}>
                    {data.allDiverJson.edges.map((item, index) => {
                        console.log(item)
                        return (
                            <DiverScanItem key={index} imageSrc={item.node.image.childImageSharp.fluid} title={item.node.title} text={item.node.description} />
                        )
                    })}
                </div>
            </div>
            <div className={styles.banner}>
                <div className={styles.bannerWrap}>
                    <div className={styles.bannerLogo}>
                        <StaticImage src="../../../images/diver-scan.png" alt="Diver Scan" />
                    </div>
                    <div className={styles.bannerTxt}>
                        <p className={styles.bannerTxt01}>DIVER Scan</p>
                        <p className={styles.bannerTxt02}>We have developed a blockchain scanning service for DIVER Network.</p>
                    </div>
                    <div>
                        <Button text="Website" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiverScan