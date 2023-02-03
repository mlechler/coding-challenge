import React from 'react';
import './Author.css';
import { SampleDataAuthor } from '../interfaces/sample-data';
import Avatar from './Avatar';

class Author extends React.Component<{ author: SampleDataAuthor, date?: string }> {
    formatDate(date: string): string {
        return new Date(date).toLocaleDateString('de', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    render() {
        const author = this.props.author;
        const date = this.props.date;
        return (
            <div className="author">
                <Avatar avatar={author.avatar}/>
                <div className="author-name-container">
                    <div className="author-name">{author.name}</div>
                    {!!date && <div className="creation-date">{this.formatDate(date)}</div>}
                </div>
            </div>
        );
    }
}

export default Author;
