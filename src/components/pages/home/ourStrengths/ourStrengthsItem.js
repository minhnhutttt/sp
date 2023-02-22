import * as React from "react"
import * as styles from "./ourStrengths.module.scss"
import Img from "gatsby-image"
import PropTypes from "prop-types"
const OurStrengthsItem = ({image, text}) => (
    <div className={styles.strengthItem}>
        <div className={styles.strengthItemInner}>
            <div className={styles.strengthItemNumber}><Img fluid={image} alt="" /></div>
            <div className={styles.strengthItemText}>{text}</div>
        </div>
    </div>
)
OurStrengthsItem.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
}
OurStrengthsItem.defaultProps  = {
    image: "",
    text: ''
}
export default OurStrengthsItem
