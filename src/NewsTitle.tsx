import React from 'react';
import './NewsTitle.css';

class NewsTitle extends React.Component<{ title: string }> {
    render() {
        const newsTitle = this.props.title;
        return (
            <div className="news-title">{newsTitle}</div>
        );
    }
}

export default NewsTitle;
