import * as React from "react"
import * as styles from "./ourStrengths.module.scss"
import Img from "gatsby-image"
import PropTypes from "prop-types"
const OurStrengthsItem = ({ imageSrc, text}) => (
    <div className={styles.strengthItem}>
        <div className={styles.strengthItemInner}>
            <div className={styles.strengthItemNumber}><Img fluid={imageSrc} alt="" /></div>
            <div className={styles.strengthItemText}>{text}</div>
        </div>
    </div>
)
OurStrengthsItem.propTypes = {
    imageSrc: PropTypes.object,
    text: PropTypes.string
}
OurStrengthsItem.defaultProps  = {
    imageSrc: {},
    text: ''
}
export default OurStrengthsItem
