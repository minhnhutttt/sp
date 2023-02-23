import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./about.module.scss"

const About = () => (
    <div className={styles.about}>
        <div className={styles.aboutHead}>
            <p className={styles.aboutHeadTtl}>
                We are constantly working to utilize cutting-edge <br />
                technology to meet the needs of our clients.
            </p>
            <p className={styles.aboutHeadTxt}>We are a company working to develop new services using blockchain technology and are based in the UK (◯◯◯).</p>
        </div>
        <div className={styles.aboutContent}>
            <div className={styles.aboutBlock}>
                <div className={styles.aboutBlockImg}>
                    <StaticImage src="../../../images/img-about-01.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
                <div className={styles.aboutBlockMain}>
                    <div className={styles.aboutBlockArticle}>
                        <p className={styles.aboutBlockArticleTtl}>Vision</p>
                        <p className={styles.aboutBlockArticleTxt01}>Our vision is to promote blockchain technology by providing services and business solutions that leverage cutting-edge technology to our clients around the world.</p>
                    </div>
                    <div className={styles.aboutBlockArticle}>
                        <p className={styles.aboutBlockArticleTtl}>Mission</p>
                        <p className={styles.aboutBlockArticleTxt01}>Our mission is to leverage blockchain technology to help our clients easily obtain the most useful information for their operations.</p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutBlock}>
                <div className={`${styles.aboutBlockMain} ${styles.isLeft}`}>
                    <div className={styles.aboutBlockArticle}>
                        <p className={styles.aboutBlockArticleTtl}>Our culture is characterized by</p>
                        <p className={styles.aboutBlockArticleTxt02}>Creativity</p>
                        <p className={styles.aboutBlockArticleTxt01}>We are always looking for new ideas and methods to develop innovative services.</p>
                        <p className={styles.aboutBlockArticleTxt02}>Collaborative</p>
                        <p className={styles.aboutBlockArticleTxt01}>We value teamwork and encourage working together to grow together.</p>
                        <p className={styles.aboutBlockArticleTxt02}>Fairness</p>
                        <p className={styles.aboutBlockArticleTxt01}>We are committed to fairness and equity, and value honesty in our dealings with our clients.</p>
                        <p className={styles.aboutBlockArticleTxt02}>Learning Minded</p>
                        <p className={styles.aboutBlockArticleTxt01}>We value the constant incorporation of new technology and knowledge, and we emphasize continuous growth through constant learning.</p>
                        <p className={styles.aboutBlockArticleTxt02}>Customer Oriented</p>
                        <p className={styles.aboutBlockArticleTxt01}>We put our customers' needs first and aim to provide the best possible service to them.</p>
                    </div>
                </div>
                <div className={styles.aboutBlockImg}>
                    <StaticImage src="../../../images/img-about-02.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
            </div>
        </div>
    </div>
)

export default About
