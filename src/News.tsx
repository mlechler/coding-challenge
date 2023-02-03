import React from 'react';
import { SampleData, SampleDataComment } from '../interfaces/sample-data';
import './News.css';
import HeroImage from './HeroImage';
import Comment from './Comment';
import NewsBody from './NewsBody';
import NewsTitle from './NewsTitle';
import Author from './Author';
import Interaction from './Interaction';
import CommentTitle from './CommentTitle';

class News extends React.Component<{ data: SampleData }> {
    render() {
        const news = this.props.data;
        return (
            <div>
                <section>
                    <HeroImage image={news.images[0]}/>
                    <div className="news-content">
                        <NewsTitle title={news.title}/>
                        <Author author={news.author}/>
                        <NewsBody body={news.body}/>
                        <Interaction statistic={news.statistics}/>
                    </div>
                </section>
                <section className="comment-section">
                    <CommentTitle
                        title={`${news.comments.length} ${news.comments.length === 1 ? 'Kommentar' : 'Kommentare'}`}/>
                    {news.comments.map((comment: SampleDataComment) =>
                        <Comment key={comment.commentId} comment={comment}/>,
                    )}
                </section>
            </div>
        );
    }
}

export default News;
