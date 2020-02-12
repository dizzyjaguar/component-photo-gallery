import React from 'react';
import Header from './Header.js'
import ImageList from './ImageList.js'
import images from './data/images.js'


import './App.css';

//NEXT I need to work on the the ImageItem.js and create a component that will live inside the ImageList component, I think that will be done in App.js

function App() {
  return (
    <div>

      <Header> </Header>
    
      <ImageList imageData={images} />
    
    </div>
  );
}

export default App;
