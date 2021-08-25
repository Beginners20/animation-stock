import * as React from "react"
import PropTypes from "prop-types"

import {css, Global} from "@emotion/react"
import {f} from "~/emotionStyles/function"

import Header from "./header"
import Footer from "~/components/Organisms/footer"
import "~/assets/css/reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={[global]}
      />
      <Header/>
      <main css={mainStyle}>{children}</main>
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

const mainStyle = css({
  padding: `${f.vw(30)} ${f.vw(60)}`
})

export default Layout
