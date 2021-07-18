import React, {useState, useEffect} from 'react';
import reviews from './data';
import Review from './Review';

import './index.css';

function App() {
  return (
    <div clasName='container'>
      <div className='title'>
        <h2>Our reviews</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </div>
  )
}

export default App;
