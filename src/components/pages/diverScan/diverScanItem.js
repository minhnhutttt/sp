import * as React from "react"
import * as styles from "./diverScan.module.scss"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const DiverScanItem = ({ imageSrc, title, text }) => {
    return (
        <div className={styles.diverItem}>
            <div className={styles.diverItemWrap}>
                <div className={styles.diverItemImg}>
                    <div className={styles.diverItemImgSrc}>
                        <Img fluid={imageSrc} alt="" />
                    </div>
                </div>
                <div className={styles.diverItemTxt}>
                    {title}
                </div>
                <div className={styles.diverItemTxt}>
                    {text}
                </div>
            </div>
        </div>
    )
}
DiverScanItem.propTypes = {
    imageSrc: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string
}
DiverScanItem.defaultProps = {
    imageSrc: {},
    title: '',
    text: ''
}
export default DiverScanItem
