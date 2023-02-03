import React from 'react';
import './Comment.css';
import { SampleDataComment } from '../interfaces/sample-data';
import Author from './Author';

class Comment extends React.Component<{ comment: SampleDataComment }> {
    render() {
        const comment: SampleDataComment = this.props.comment;
        return (
            <div>
                <Author author={comment.author} date={comment.creationDate}/>
                <div className="comment" dangerouslySetInnerHTML={{__html: comment.text}}/>
            </div>
        );
    }
}

export default Comment;
