import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        this is a news component
        <NewsItem titile = "aao suru karte hai" description = "my description"/>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />

      </div>
    )
  }
}

export default News
