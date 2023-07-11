import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Cricket from './Cricket'
import ContactUs from './ContactUs'
import MyAccount from './MyAccount'

const CricketContainer = () => {
  return (
        <div className="App">
          <Header/>
          <BrowserRouter>
          <Routes>
            <Route path='/cricket' Component={Cricket}/>
            <Route path='/contactus' Component={ContactUs}/>
            <Route path='/myaccount' Component={MyAccount}/>
          </Routes>
          </BrowserRouter>
          {(window.matchMedia('(min-width:768px)')?.matches) && <Footer/>}

    </div>
  )
}

export default CricketContainer
