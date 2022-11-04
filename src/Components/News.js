import React, { Component } from 'react'
import Cardloader from './Cardloader';
import Categories from './Categories';
import Footbar from './Footbar';
import Newsitem from './Newsitem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8cf1241a990f468aa48206df0ec6eafb&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }


    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8cf1241a990f468aa48206df0ec6eafb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("Next clicked")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8cf1241a990f468aa48206df0ec6eafb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })

    }



    render(props) {
        return (
            <>
                <div className="news-component d-flex">
                    <Categories />
                    <div className='news-container'>
                        <div className="container d-flex justify-content-between mx-5 my-4 px-5">
                            <button disabled={this.state.page <= 1} type="submit" className='page-button' onClick={this.handlePrevClick}>
                                <strong>&larr; Previous</strong>
                            </button>

                            {this.state.loading && <Cardloader />}

                            <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} type="submit" className='page-button page-button-next mx-5' id='page-button-next' onClick={this.handleNextClick}>
                                <strong>Next &rarr;</strong>
                            </button>
                        </div>

                        <div className="my-3 d-flex flex-wrap justify-content-center">
                            {this.state.articles.map((element) => {
                                return <Newsitem key={element.url} title={element.title} imageUrl={element.urlToImage} url={element.url} description={element.description} author={element.author} />
                            })}
                        </div>

                        <Footbar/>
                    </div>
                </div>
                
            </>
        )
    }
}
