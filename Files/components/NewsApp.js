import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class NewsApp extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'technology',
    }

        static _PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    

    constructor() {
        super();
        this.state = {
            articles: [],
            Loading: false,
            page: 1

        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7af2434e5fb74b6e8ab2179e4e7a3e22&page=1&pageSize=${this.props.pageSize}`;

        this.setState({ Loading: true });
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            Loading: false
        })
    }
    handleclickpre = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7af2434e5fb74b6e8ab2179e4e7a3e22&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ Loading: true });
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            Loading: false
        })

    }
    handleclicknext = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7af2434e5fb74b6e8ab2179e4e7a3e22&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ Loading: true });
            let data = await fetch(url)
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                Loading: false
            })
        }
    }
    render() {
        return (
            <>
                <div className="my-3">

                    <h2 className='text-2xl text-zinc-800 font-semibold text-center ' >Hot News</h2>
                    {this.state.Loading && <Spinner />}
                    <div className="grid grid-cols-4 gap-4 px-8">
                        {!this.state.Loading && this.state.articles.map((element) => {
                            return <div key={element.url}>
                                {/* if image is not exist then use !imgurl?"https":imgUrl */}
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="flex justify-between px-8 my-4">
                        <button disabled={this.state.page <= 1} className='hover:bg-slate-700  transition duration-200 p-2 bg-slate-600 rounded-xl text-white' onClick={this.handleclickpre} >&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='hover:bg-slate-700  transition duration-200 p-2 bg-slate-600 rounded-xl text-white' onClick={this.handleclicknext}  >Next &rarr;</button>
                    </div>
                </div>
            </>
        );
    }
}
