import React from 'react';
import './Interaction.css';
import { SampleDataStatistic } from '../interfaces/sample-data';

class Interaction extends React.Component<{ statistic: SampleDataStatistic }> {
    render() {
        const statistic: SampleDataStatistic = this.props.statistic;
        return (
            <div className="interaction-container">
                <div className="interaction-like">
                    <div className="material-symbols-outlined">thumb_up</div>
                    <div>{statistic.likes}</div>
                </div>
                <div className="interaction-view">
                    <div className="material-symbols-outlined">visibility</div>
                    <div> {statistic.views}</div>
                </div>
            </div>
        );
    }
}

export default Interaction;
