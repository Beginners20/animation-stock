import React from 'react'
import Layout from "~/components/Organisms/layout"
import NewsList from "~/components/Molecules/newsList2"
import Data from "~/assets/data/news.json"
import {css} from "@emotion/react"
import {f} from "~/emotionStyles/function"


class News2 extends React.Component {
  constructor(props) {
    super(props);
    this.newsListDom = []
  }
  createNewsList() {
    for (let i = 0; i < Data.length; i++) {
      this.newsListDom.push(<div css={newsContents} key={i}><NewsList data={Data[i]}/></div>)
    }
  }
  render() {
    this.createNewsList()
    return(
      <Layout>
        <div css={inner}>
          <div css={wrap}>
            {this.newsListDom}
          </div>
        </div>
      </Layout>
    )
  }
}

const wrap = css({
  [f.pc()]: {
    width: f.vw(415),
    margin: "0 auto"
  }
})

const inner = css({
  [f.pc()]: {
    marginTop: f.vw(70)
  }
})

const newsContents = css({
  [f.pc()]: {
    "& + &": {
      marginTop: f.vw(40)
    }
  }
})

export default News2