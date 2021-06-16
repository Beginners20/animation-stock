import React from "react";
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"

const NewsList = ({data}) => {
  return (
    <div css={newsWrap}>
      <div css={newsDatum}>
        <div css={newsTitle}>{data.title}</div>
        <div css={newsDate}>{data.date}</div>
      </div>
      <p css={newsDescription}>
        {data.description}
      </p>
    </div>
  );
};

const newsWrap = css({
  width: "100%"
});
const newsDatum = css({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: f.vw(20)
})

const newsTitle = css({
  [f.pc()]: {
    fontSize: f.vw(18)
  }
})

const newsDate = css({
  [f.pc()]: {
    fontSize: f.vw(15)
  }
})

const newsDescription = css({
  [f.pc()]: {
    fontSize: f.vw(15)
  }
})

export default NewsList;