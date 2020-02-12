import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <li className='image-item'>
                <h3>{this.props._image.title}</h3>
                <img src={this.props._image.url}></img>

            </li>
                
               
    )
}}
