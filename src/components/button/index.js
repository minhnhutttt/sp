import { Link } from "gatsby"
import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "./button.module.scss"

const Button = ({link, text}) => (
    <div  className={styles.button}>
        <Link to={link}>
            <span>{text}</span>
        </Link>
    </div>
)

Button.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string
}
Button.defaultProps  = {
    link: "#",
    text: '/'
}
export default Button
