import React, { Component } from 'react';
import images from './data/images.js';




export default class ImageList extends Component {
    render() {
        return (
            <div id='image-list-div'>
            <div id='search-div'>This is where search bar will be </div>
                {
                    images.map((image) => {
                        return <div className='an-image'>
                        <h3> {image.title} </h3>
                        
                        </div>
                })
            }
            </div>
        )
    }
}