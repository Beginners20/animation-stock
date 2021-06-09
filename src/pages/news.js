import * as React from "react"
import Layout from "../components/Organisms/layout"
import NewsList from "../components/Molecules/newsList"
import Data from '../assets/data/news.json'

class News extends React.Component{
  constructor(props){
    super(props);
    this.newsListDom = []
  }
  createNewsList(){
    for(let i = 0; i < Data.length ; i++){
      this.newsListDom.push(<div key={i}><NewsList data = {Data[i]}/></div>)
    }
  }
  render(){
    this.createNewsList()
    return(
      <Layout>
        {this.newsListDom}
      </Layout>
    )
  }
}

export default News