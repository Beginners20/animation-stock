import React from "react"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"

import Arrow from "~/assets/images/icn_back_to_top.svg"

const BackTop = () => {
  function scroller() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
  }
  return(
    <div css={backWrap} onClick={() => {scroller()}}>
      <div css={backArrow}>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

const backWrap = css({
  [f.bp("pc")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#dcc7aa",
    borderRadius: "50%",
    cursor: "pointer"
  }
})

const backArrow = css({
  [f.bp("pc")]: {
    width: f.vw(22)
  }
})

export default BackTop;