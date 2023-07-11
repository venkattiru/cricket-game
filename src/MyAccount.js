import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { styled } from 'styled-components'
import Profile from './Profile'
import Stats from './Stats'

const MyAccount = () => {
  const StyledDiv = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    background-image: url(../cric-ground.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.8);
    > .account-tab {
      backdrop-filter: brightness(0.5);
      justify-content: center;
    font-size: 18px;
    font-weight: 500;
    li {
      padding:10px;
    button {
      background:repeating-radial-gradient(black, transparent 100px);
      border-radius:25px;
      width: 6em;
      color: #f2f2f2;
      &.active {
        background: #f2f2f2;
      }
    }  
    }
    }
    `
  const [tab, setTab] = useState('profile')
  return (
        <StyledDiv>
            <Tabs id='myaccount-id' activeKey={tab} onSelect={(k) => setTab(k)} className='account-tab'>
                <Tab eventKey='profile' title='Profile' style={{ padding: 10 }}>
                    <Profile/>
                </Tab>
                <Tab eventKey='stats' title='Stats' style={{ padding: 10 }}>
                    <Stats/>
                </Tab>
            </Tabs>
            </StyledDiv>
  )
}

export default MyAccount
