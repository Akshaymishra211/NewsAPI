import React, {Component} from 'react'
import NewsCard from './NewsCard'

export default class News extends Component{
    render(){
        return (
            <div className='container'>
                I'm inside News.
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        )
    }
}