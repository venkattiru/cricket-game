import { styled } from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { red, blue } from '@mui/material/colors'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'

export default function Footer () {
  const StyledFooter = styled.footer`
    position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: #e4e4ec;
    `
  return (
        <StyledFooter>
      <p style={{ display: 'flex', margin: '1em' }}><CopyrightIcon/> 2023. All rights reserved.</p>
      <p style={{ display: 'flex' }}>Made with <FavoriteIcon sx={{ color: red.A400 }}/> by Venkat Tiru.</p>
      <p style={{ display: 'flex', margin: '1em' }}>Follow on <LinkedInIcon sx={{ color: blue[500] }} onClick={() => window.open('https://www.linkedin.com/in/venkatesh-tiruveedhi/')}/> <GitHubIcon onClick={() => window.open('https://github.com/venkattiru')}/> </p>
      </StyledFooter>
  )
}
