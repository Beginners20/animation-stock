import * as React from "react"
import PropTypes from "prop-types"

import {css, Global} from "@emotion/react"
import {f} from "~/emotionStyles/function"

import Header from "./header"
import Footer from "~/components/Organisms/footer"
import BackTop from "~/components/Molecules/backToTop"
import "~/assets/css/reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={[global]}
      />
      <Header/>
      <main>{children}</main>
      <div css={BackTopWrap}>
        <BackTop />
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const global = css({
  ".display-pc": {
    [f.pc()]: {
      display: "block"
    },
    [f.sp()]: {
      display: "none!important"
    }
  },
  ".display-sp": {
    [f.pc()]: {
      display: "none!important"
    },
    [f.sp()]: {
      display: "block"
    }
  },
  "img": {
    width: "100%",
    display: "block",
    lineHeight: 1
  }
})

const BackTopWrap = css({
  [f.pc()]: {
    position: "fixed",
    bottom: f.vw(77),
    right: f.vw(20),
    width: f.vw(40),
    height: f.vw(40)
  }
})
console.log(window.innerHeight - ((175 / 1336) * window.innerWidth))
export default Layout
