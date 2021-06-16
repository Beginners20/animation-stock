import React from 'react';
import {css} from "@emotion/react";
import {f} from "~/emotionStyles/function"

import Layout from "../components/Organisms/layout"
import NewsList from "../components/Molecules/newsList"

import NewsData from "~/assets/data/news.json"

class News extends React.Component {
  constructor(props) {
    super(props);
    this.newsDom = [];
  }
  setList() {
    for(const datum of NewsData) {
      this.newsDom.push(<div css={news} key={datum.date}><NewsList data={datum}/> </div>)
    }
    this.newsDom.reverse()
  }
  render() {
    this.setList()
    return (
      <Layout>
        <div css={newsWrap}>
          {this.newsDom}
        </div>
      </Layout>
    );
  };
}

const newsWrap = css({
  [f.pc()]: {
    width: f.vw(415),
    margin: `${f.vw(70)} auto 0 auto`
  }
})

const news = css({
  "& + &": {
    marginTop: f.vw(40)
  }
})
export default News;