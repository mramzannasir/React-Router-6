import React, { Component } from 'react';





export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsurl } = this.props;
        return (
            <div className="my-3 grid grid-flow-col">
                <div>
                <img src={imageUrl} alt="..." />
                <div className="card-body">
                    <h5 className="text-lg font-medium">{title}...</h5>
                    <p className="my-5">{description}...</p>
                    <button><a className="p-2  bg-slate-700 text-white rounded-lg" href={newsurl} target='noopener'>Read More</a></button>
                    <hr className='mt-5' />
                </div>
                </div>
            </div>
        );
    }
}
export default NewsItem