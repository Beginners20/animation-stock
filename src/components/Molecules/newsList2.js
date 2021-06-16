import React from "react"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"

const NewsList2 = ({data}) => {
  return (
    <div css={newsWrap}>
      <div css={newsDatum}>
        <div>{data.title}</div>
        <div>{data.date}</div>
      </div>
      <p>
        {data.description}
      </p>
    </div>
  )
}
const newsWrap = css({
  width: "100%"
})

const newsDatum = css({
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
})


export default NewsList2