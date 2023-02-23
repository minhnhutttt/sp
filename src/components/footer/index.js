import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./footer.module.scss"

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerWrap}>
            <div className={styles.footerLogo}>
                <Link to={"/"}>
                    <StaticImage src="../../images/logo-footer.png" alt="SKY PROTOCOL" />
                </Link>
            </div>
            <div className={styles.footerItems}>
                <div className={styles.footerItem}>
                    <p className={styles.footerItemTtl}>About</p>
                    <p className={styles.footerItemTxt}>
                    We continue to provide solutions that meet the needs of our clients by constantly leveraging cutting-edge technology to maximize the potential offered by blockchain technology.
                    </p>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.footerItemTtl}>Address</p>
                    <p className={styles.footerItemTxt}>
                    sample:341 Blueberry Dr, Monona, WI 53713
                    </p>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.footerItemTtl}>Service</p>
                    <p className={styles.footerItemTxt}>
                        Blockchain scanning service <br />
                        Blockchain platform development<br />
                        Blockchain Consulting<br />
                        Blockchain application development<br />
                        Blockchain security services<br />
                        Blockchain training
                    </p>
                </div>
                <div className={styles.footerItem}>
                    <div className={styles.footerItemTtl}><StaticImage src="../../images/ic-mail.png" alt="" />Contact</div>
                    <p className={styles.footerItemTxt}>
                    Privacy policy
                    </p>
                </div>
            </div>
            <div className={styles.footerCopyright}>Copyright © 2023 Sky protocol All rights reserved.</div>
        </div>
    </footer>
)

export default Footer
