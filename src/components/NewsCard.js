import React, { Component } from 'react'

export default class NewsCard extends Component{
    render() {
        return (
            <div>
                <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}