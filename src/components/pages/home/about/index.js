import * as React from "react"
import Button from "../../../button"
import * as styles from "./about.module.scss"

const About = () => (
    <div className={styles.about}>
        <div className={styles.aboutWrap}>
            <div className={styles.aboutInner}>
                <div>
                    <p className={styles.aboutContentTtl}>About</p>
                    <p className={styles.aboutContentTxt}>
                        We continue to leverage cutting-edge technology to maximize the potential of blockchain technology and provide solutions tailored to our clients' needs. 
                    </p>
                </div>
                <div className={styles.aboutBtn}>
                    <Button link="/about" text="About" />
                </div>
            </div>
        </div>
    </div>
)

export default About
