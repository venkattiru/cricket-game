import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { blue } from '@mui/material/colors'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailIcon from '@mui/icons-material/Mail'

export default function ContactUs () {
  const handlemail = () => {
    navigator.clipboard.writeText('venkat.tiruveedhi@gmail.com')
  }
  return (
        <Container>
          <Row>
            <Col md={4}>
              <Image src="../cricket-black512.png" roundedCircle data-aos="left-show" data-aos-duration="1000"/>
            </Col>
            <Col md={8} style={{ textAlign: 'center', paddingTop: '25vh' }}>
              <Card data-aos='zoom-in'data-aos-duration="1500">
                <Card.Title>Contact Us</Card.Title>
                <Card.Body>
                <p>Provide feedback/queries/suggestions from any platform</p>
                <LinkedInIcon sx={{ color: blue[500], margin: '0 10px' }} fontSize='large' onClick={() => window.open('https://www.linkedin.com/in/venkatesh-tiruveedhi/')}/>
                <GitHubIcon fontSize='large' sx={{ margin: '0 10px' }} onClick={() => window.open('https://github.com/venkattiru')}/>
                <MailIcon fontSize='large' titleAccess='click to copy mailId' onClick={handlemail}/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Container>
  )
}
