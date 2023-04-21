import React from 'react';
import './App.css';
import Banner from './composants/Banner.jsx';
import ApartBoard from './composants/ApartBoard.jsx';

function App(props) {
   console.log (props);
 return (
   <div>
      <Banner />
      <ApartBoard />
   </div>
 );
}

export default App;
