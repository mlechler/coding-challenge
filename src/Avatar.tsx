import React from 'react';
import './Avatar.css';

class Avatar extends React.Component<{ avatar: string }> {
    render() {
        const avatar: string = this.props.avatar;
        return (
            <img className="avatar" src={avatar}/>
        );
    }
}

export default Avatar;
