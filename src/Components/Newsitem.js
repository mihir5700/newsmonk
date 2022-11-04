import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, author, imageUrl, url} = this.props;
    return (
      <div className='news-card m-3 my-4'
        style={{backgroundImage: `url(${imageUrl})`}}
      >
        <div className="news-content">
          <div className="content">
            <h4>{title}</h4>
            <small className='my-2 mx-2'><i>{author}</i></small>
            <p className='m-2'>
              {description}
            </p>
          </div>
          <button type="submit"  className='button-website m-3'>
            <a href={url} target="_blank" rel="noreferrer">
              <strong>Read More</strong>
            </a>
          </button>
        </div>
      </div>
    )
  }
}
