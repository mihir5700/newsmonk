import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let { title, description, author, imageUrl, url, date} = this.props;
    let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    let newsDate = new Date(date)
    return (
      <div className='news-card m-3 my-4' style={{ backgroundImage: `url(${imageUrl})`}}>
        <div className="news-content">
          <div className="content">
            <h4>{title}</h4>
            <small className='my-2 mx-2'><i>{!author ? "Anonymous Author" : author}</i></small>
            <p className='m-2'>
              {description}
            </p>
            <small className='my-2 mx-2'><i>{newsDate.toLocaleString("en-US",options)}</i></small>
          </div>
          <a href={url} target="_blank" rel="noreferrer" className='button-website m-3'>
            <strong>Read More</strong>
          </a>
        </div>
      </div>
    )
  }
}
