import React from 'react';
import './CommentTitle.css';

class CommentTitle extends React.Component<{ title: string }> {
    render() {
        const commentTitle = this.props.title;
        return (
            <div className="comment-title">{commentTitle}</div>
        );
    }
}

export default CommentTitle;
