import React, { Component } from 'react'
import Cardloader from './Cardloader';
import Categories from './Categories';
import Footbar from './Footbar';
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps ={
        country: "in",
        pageSize: 6,
        category: "general"
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cf1241a990f468aa48206df0ec6eafb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cf1241a990f468aa48206df0ec6eafb&page=1&pageSize=${this.props.pageSize}`;
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
        await this.setState({
            page: this.state.page - 1
        })
        this.updateNews();

    }

    handleNextClick = async () => {
        await this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    render(props) {
        return (
            <>
                <div className="news-component d-flex flex-column">
                    <Categories />
                    <div className='news-container'>
                        <div className="container d-flex justify-content-between ml-5 my-4 px-5">
                            <button disabled={this.state.page <= 1} type="submit" className='page-button' onClick={this.handlePrevClick}>
                                <strong>&larr; Previous</strong>
                            </button>

                            {this.state.loading && <Cardloader />}

                            <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} type="submit" className='page-button page-button-next ' id='page-button-next' onClick={this.handleNextClick}>
                                <strong>Next &rarr;</strong>
                            </button>
                        </div>

                        <div className="my-3 d-flex flex-wrap justify-content-center">
                            {this.state.articles.map((element) => {
                                return <Newsitem key={element.url} title={element.title} imageUrl={element.urlToImage} url={element.url} description={element.description} author={element.author} date={element.publishedAt} />
                            })}
                        </div>

                    </div>
                    <Footbar/>
                </div>
                
            </>
        )
    }
}
