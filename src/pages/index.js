import * as React from "react"
import { Link } from "gatsby"
import {css} from "@emotion/react"
import Layout from "../components/Organisms/layout"
import Seo from "../components/seo"

import astronaut from  "@/assets/images/gatsby-astronaut.png"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 css={head}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p className={"display-sp"}>Now go build something great.</p>
    <div css={image} className={"display-pc"}>
      <img src={astronaut} alt="hoge" />
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

const head = css({
  color: "#ff0000",
  "&:after": {
    content: '""'
  }
})

const image = css({
  width: "300px",
})

export default IndexPage
