import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"
import PropTypes from "prop-types"

const Header = ({hasBg}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${styles.header} ${!hasBg ? styles.active : ''} ${isScrolled ? styles.active : ''}`} >
      <div className={styles.headerWrap}>
        <Link to={"/"} className={styles.headerLogo}>
          <StaticImage src="../../images/logo.png" alt="SKY PROTOCOL" />
        </Link>
        <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`${styles.hamburgerLines} ${isOpen ? styles.active : '' }`}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </button>
        <div className={`${styles.headerInner} ${isOpen ? styles.active : '' }`}>
          <ul className={styles.headerMenu}>
            <li>
              <Link to={"/service"}>
                <span>Service</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>Product</span>
              </Link>
            </li>
            <li>
              <Link to={"/terms-of-service"}>
                <span>Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  hasBg: PropTypes.bool,
}
Header.defaultProps = {
  hasBg: false,
}
export default Header
