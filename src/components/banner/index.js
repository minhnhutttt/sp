import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "./banner.module.scss"

const Banner = ({ imageSrc, text }) => (
    <div className={styles.banner}>
        <div className={styles.bannerImg}
            style={{
                backgroundImage: `url(${imageSrc})`,
            }}
        >
        </div>
        <div className={styles.bannerWrap}>
            <div className={styles.bannerText}>
                {text}
            </div>
        </div>
    </div>
)

Banner.propTypes = {
    imageSrc: PropTypes.string,
    text: PropTypes.string
}
Banner.defaultProps = {
    imageSrc: '',
    text: ''
}
export default Banner
