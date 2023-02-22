import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={styles.header}>
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
              <Link to={"/"}>
                <span>Service</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>Product</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
