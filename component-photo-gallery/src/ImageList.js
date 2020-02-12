import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data/images.js';




export default class ImageList extends Component {
    render() {
        return (
            <div id='image-list-div'>
                <ul>
                    {this.props.imageData.map(image => <ImageItem _image={image} />)}
                </ul>
            
            </div>
        )
    }
}