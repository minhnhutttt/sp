import * as React from "react"
import * as styles from "./service.module.scss"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const ServiceItem = ({imageSrc, text}) => {
    return (
        <div className={styles.serviceItem}>
            <div className={styles.serviceItemWrap}>
                <div className={styles.serviceItemImg}>
                    <div className={styles.serviceItemImgSrc}>
                        <Img fluid={imageSrc} alt="" />
                    </div>
                </div>
                <div className={styles.serviceItemTxt}>
                    { text }
                </div>
            </div>
        </div>
    )
}
ServiceItem.propTypes = {
    imageSrc: PropTypes.object,
    text: PropTypes.string
}
ServiceItem.defaultProps  = {
    imageSrc: {},
    text: ''
}
export default ServiceItem
