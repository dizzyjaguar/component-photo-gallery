import React from 'react';
import Header from './Header.js'
import ImageList from './ImageList.js'
import images from './data/images.js'
import './App.css';


function App() {
  return (
    <div>

      <Header> </Header>
      
      {/* creating key value pairs/properties */}
      <ImageList imageData={images} />
    
    </div>
  );
}

export default App;
