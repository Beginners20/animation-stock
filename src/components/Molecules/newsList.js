import React from "react"
import {css} from "@emotion/react"

const NewsList = ({data}) =>{
  return(
    <div>
      <div css ={newsWrap}>
        <div css = {newsDatum}>
          <div>{data.title}</div>
          <div>{data.date}</div>
        </div>
        <p>{data.description}</p>
        </div>
      </div>
  )
}
const newsWrap = css({
  width:'100%'
})
const newsDatum = css({
  display:'flex',
  justifyContent:'space-between'
})

export default NewsList