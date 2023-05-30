

import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import Cricket from './Cricket';
import { CommentaryContext } from './context/CommentaryContext';
import { useState } from 'react';

function App() {
  const [commentary, setCommentary] = useState(true);
 
  return (
    <Provider store={store}>
      <CommentaryContext.Provider value={{commentary,setCommentary}}>
    <Cricket/>
    </CommentaryContext.Provider>
    </Provider>
  );
}

export default App;
