import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {imgUrl,title, description,newsurl} = this.props;        
        return (
            <div>
            <div className="card mt-3" >
                <img src={imgUrl?imgUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/14D40/production/_128721358_p0f4thbw.jpg"} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} target="_blank" ref="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}
