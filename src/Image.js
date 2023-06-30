import { useEffect, useState } from 'react'
import { imgList } from './utils/common'
import { styled } from 'styled-components'

const Image = ({ num }) => {
  const [imgs, setImgs] = useState([])

  const StyledImage = styled.img`
    width: 300px;
     
    @media only screen  and (min-width:1024px) {
        height: 400px; 
    }
    @media only screen and (max-width:1024px) {
        height:50vh;
    }
    max-width: 100%;
`

  const StyledDiv = styled.div`
    @media only screen and (min-width:1024px) {
        flex-basis: 16rem;
    }
    flex-grow:1;
    `

  useEffect(() => {
    const images = imgList()
    setImgs(images)
  }, [])
  return (
    <StyledDiv>
        <StyledImage data-aos='fade-right' data-aos-offset="300" data-aos-easing="ease-in-sine" src={imgs[num]} alt='cricketer'/>
    </StyledDiv>
  )
}

export default Image
