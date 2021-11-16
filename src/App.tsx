import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.less';
import Header from './components/Header';
import routers from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* {routers} */}
        <Header/>
      </div>
    </BrowserRouter>
  );
}

export default App;
