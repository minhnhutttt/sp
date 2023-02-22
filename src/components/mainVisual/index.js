import * as React from "react"
import * as styles from "./mainVisual.module.scss"

const MainVisual = () => (
    <div className={styles.mv}>
        <div className={styles.mvWrap}>
            <div className={styles.mvTtl}>
                A look behind the blockchain, <br />
                making high-precision analysis easy for everyone
            </div>
            <div className={styles.mvTxt}>
                We are working on developing new services using blockchain technology. The scanning service we offer can analyze the blockchain with high precision. We are constantly working to utilize cutting-edge technology to meet the needs of our clients.
            </div>
        </div>
    </div>
)

export default MainVisual
