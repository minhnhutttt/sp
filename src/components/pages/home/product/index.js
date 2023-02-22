import * as React from "react"
import Button from "../../../button"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./product.module.scss"

const Product = () => (
    <div className={styles.product}>
        <div className={styles.productWrap}>
            <div className={styles.productLogo}>
                <StaticImage src="../../../../images/diver-scan.png" alt="Diver Scan" />
            </div>
            <div className={styles.productTxt}>
                <p className={styles.productTxt01}>Product</p>
                <p className={styles.productTxt02}>We have developed a blockchain scanning service for DIVER Network.</p>
            </div>
            <div className={styles.productBtn}>
                <Button text="DIVER Scan" />
            </div>
        </div>
    </div>
)
 
export default Product
