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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
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
  "body": {
    fontFamily: "Roboto, 'Noto Sans JP', sanserif",
    fontWeight: "400",
    position: "relative",
    minHeight: "100vh"
  },
  ".display-pc": {
    [f.bp("pc")]: {
      display: "block"
    },
    [f.bp("sp")]: {
      display: "none!important"
    }
  },
  ".display-sp": {
    [f.bp("sp")]: {
      display: "none!important"
    },
    [f.bp("sp")]: {
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
  [f.bp("pc")]: {
    position: "fixed",
    bottom: f.vw(77),
    right: f.vw(20),
    width: f.vw(40),
    height: f.vw(40)
  }
})

export default Layout
