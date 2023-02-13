import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
       let  {title, description} = this.props;
        return (
            <div>
                <div className="card" style={{width:"18rem"}}>
                    <img className="card-img-top" src="https://live-production.wcms.abc-cdn.net.au/4273843cf270710bb72e589d6c8581b3?impolicy=wcms_crop_resize&cropH=1458&cropW=2592&xPos=0&yPos=243&width=862&height=485" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
