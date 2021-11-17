import Header from '@components/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.less';
import Routers from './router';


function App() {
  // console.log(routers);
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
          <Routers/>
      </div>
    </BrowserRouter>
  );
}

export default App;
