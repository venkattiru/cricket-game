import './App.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { CommentaryContext } from './context/CommentaryContext'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CricketContainer from './CricketContainer'
import { setupIonicReact } from '@ionic/react'

function App () {
  const [commentary, setCommentary] = useState(true)

  useEffect(() => {
    Aos.init()
    setupIonicReact()
  }, [])

  return (
    <Provider store={store}>
      <CommentaryContext.Provider value={{ commentary, setCommentary }}>
    <CricketContainer/>
    </CommentaryContext.Provider>
    </Provider>
  )
}

export default App
