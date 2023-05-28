

import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import Cricket from './Cricket';

function App() {
  
 
  return (
    <Provider store={store}>
    <Cricket/>
    </Provider>
  );
}

export default App;
