import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles:[],
            loading: true,
            page:1
        }
       
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category&apiKey=cfa7ffe3855542638258bb6c87591da2";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>NewsHub - Top Headlines</h1>
               
                <div className='row'>
                {this.state.articles.map((element) =>  {
                   return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0, 40):""} description= {element.description?element.description.slice(0, 70):""} imageurl ={element.urlToImage} newsUrl ={element.url} />
                    </div>

                })}
                    
                </div>
                <div className='container d-flex justify-content-between my-3'>
                <button type="button" class="btn btn-outline-dark">previous</button>
                <button type="button" class="btn btn-outline-dark">next</button>

                </div>
            </div>
        )
    }
}

export default News
