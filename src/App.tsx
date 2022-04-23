import { Provider } from 'react-redux';
import './index.css'
import Gif from './pages/Gif';
import { store } from './redux';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
