import React from 'react';
import './NewsBody.css';
import { SampleDataBody } from '../interfaces/sample-data';

class NewsBody extends React.Component<{ body: SampleDataBody }> {
    render() {
        const newsBody = this.props.body;
        return (
            <div className="news-body" dangerouslySetInnerHTML={{__html: newsBody.text}}/>
        );
    }
}

export default NewsBody;
