import * as React from "react"
import * as styles from "./service.module.scss"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const ServiceItem = ({ imageSrc, title, text }) => {
    return (
        <div className={styles.serviceItem}>
            <div className={styles.serviceItemImg}>
                <Img fluid={imageSrc} alt="" />
            </div>
            <div className={styles.serviceItemMain}>
                <p className={styles.serviceItemTtl}>
                    {title}
                </p>
                <p className={styles.serviceItemTxt}>
                    {text}
                </p>
            </div>
        </div>
    )
}
ServiceItem.propTypes = {
    imageSrc: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string
}
ServiceItem.defaultProps = {
    imageSrc: {},
    title: '',
    text: ''
}
export default ServiceItem
