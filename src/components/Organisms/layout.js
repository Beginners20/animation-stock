import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {css, Global} from "@emotion/react"
import {func} from "../../emotionStyles/function"

import Header from "./header"
import "@/assets/css/reset.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={[global]}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const global = css({
  ".display-pc": {
    [func.bp("pc")]: {
      display: "block"
    },
    [func.bp("sp")]: {
      display: "none!important"
    }
  },
  ".display-sp": {
    [func.bp("pc")]: {
      display: "none!important"
    },
    [func.bp("ep")]: {
      display: "block"
    }
  },
  "img": {
    width: "100%",
    display: "block",
    lineHeight: 1
  }
})

export default Layout
