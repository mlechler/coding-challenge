import React from 'react';
import './HeroImage.css';
import { SampleDataImage } from '../interfaces/sample-data';

class HeroImage extends React.Component<{ image: SampleDataImage }> {
    render() {
        const heroImage: SampleDataImage = this.props.image;
        return (
            <div className="hero-image">
                {!!heroImage && <img src={heroImage.url} alt={heroImage.name}/>}
            </div>
        );
    }
}

export default HeroImage;
