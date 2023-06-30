import './App.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Cricket from './Cricket'
import { CommentaryContext } from './context/CommentaryContext'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App () {
  const [commentary, setCommentary] = useState(true)

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <Provider store={store}>
      <CommentaryContext.Provider value={{ commentary, setCommentary }}>
    <Cricket/>
    </CommentaryContext.Provider>
    </Provider>
  )
}

export default App
