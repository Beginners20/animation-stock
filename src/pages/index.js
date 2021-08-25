import * as React from "react"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"
import Layout from "../components/Organisms/layout"
import Seo from "../components/seo"

//Components
import { LinkButton, BasicButton, RouteButton } from "~/components/Atoms/Buttons"

const IndexPage = () => {
  // スタイル
  const baseButton = css({
    width: f.vw(200),
    textAlign: "center",
    fontSize: f.vw(30)
  })
  const header = css({
    margin: `${f.vw(30)} 0 ${f.vw(10)} 0`
  })
  // 関数
  const pushAlert = () => {
    alert("CLICK!")
  }
return (
    <Layout>
      <Seo title="Home" />
      <h2 css={header}>Basic Button</h2>
      <div css={baseButton}>
        <BasicButton
          bgColor={"#fff"}
          textColor={"#000"}
          click={pushAlert}
        >
          Basic
        </BasicButton>
      </div>
      <h2 css={header}>Link Button</h2>
      <div css={baseButton}>
        <LinkButton>
          LINK
        </LinkButton>
      </div>
      <h2 css={header}>Route Button</h2>
      <div css={baseButton}>
        <RouteButton
          textColor={"#dcc7aa"}
          href={"/page-2"}
        >
          Route
        </RouteButton>
      </div>
    </Layout>
  );
}

export default IndexPage
