import React, { Component } from 'react';
import images from './data/images.js';




export default class ImageList extends Component {
    render() {
        return (
            <div id='image-list-div'>
                <ul>
                    {this.props.imageData.map(horned => <ImageItem horned={horned} />)}
                </ul>
            
            </div>
        )
    }
}