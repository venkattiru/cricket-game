import { styled } from 'styled-components'
import Settings from './Settings'

export default function Header () {
  const StyledHeader = styled.h2`
  background:#24247c;
  text-align: center;
    color: coral;
    margin: 0;
    padding: 10px;
  `

  const StyledCricImg = styled.img`
    top: 8px;
    position: absolute;
    left: 10px;
  `
  return (
        <header>
        <StyledCricImg src='../cricket-white32.png' alt='cricket logo' onClick={() => { window.location.href = '/cricket' } }/>
        <StyledHeader>Cricket</StyledHeader>
        <Settings/>
        </header>
  )
}
