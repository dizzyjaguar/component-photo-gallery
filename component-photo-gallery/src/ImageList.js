import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data/images.js';




export default class ImageList extends Component {
    state = { selected: null };

    render() {
        console.log(images)
        const imageNodes = images
            .filter(image => {
            if (!this.state.selected) return true;
            console.log(this.state.selected)
            return image.keyword === this.state.selected;
        })
        const _imageNodes = imageNodes.map(image => <ImageItem _image={image} />);
        console.log(imageNodes)
    
        const handleChange = e => {
            this.setState({ selected: e.target.value })
        };

        return (
            <div className='main-body-div'>
                <div className='options'>
                    <select className='image-keyword-fliter' onChange={handleChange}>
                        <option value="narwhal">narwhal</option>
                        <option value="rhino">rhino</option>
                        <option value="unicorn">unicorn</option>
                        <option value="unilego">unilego</option>
                    </select>
                </div>

                <div id='image-list-div'>
                    <ul>
                        {_imageNodes}
                    </ul>
                </div>
            </div>
        )
    }
}