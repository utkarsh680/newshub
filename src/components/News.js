import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsHub - Top Headlines</h2>
                
                <div className='row'>
                    <div className="col-md-4">
                    <NewsItem title="aao suru karte hai" description="my description" />
                    </div>
                    <div className="col-md-4">
                    <NewsItem title="aao suru karte hai" description="my description" />
                    </div>
                    <div className="col-md-4">
                    <NewsItem title="aao suru karte hai" description="my description" />
                    </div>
                </div>
                

            </div>
        )
    }
}

export default News
