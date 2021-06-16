import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"

const Header = ({ siteTitle }) => (
  <header css={header}>
    <Link to={"/"}>
      <h1 css={title}>Animation Stock</h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


const header = css({
  [f.pc()]: {
    display: "flex",
    alignItems: "center",
    height: f.vw(100),
    width: "100%",
    paddingLeft: f.vw(20),
    backgroundColor: "#fff",
    boxShadow: " 0px 0px 27px 0px rgba(3, 0, 0, 0.13)"
  }
})

const title = css({
  [f.pc()]: {
    fontSize: f.vw(34),
    color: "#f7882f"
  }
})
export default Header
