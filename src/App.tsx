import { Provider } from 'react-redux';
import './index.css'
import Gif from './pages/Gif';
import { store } from './redux';


function App() {
  return (
    <Provider store={store}>
      <Gif/>
    </Provider>
  );
}

export default App;
