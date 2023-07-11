import { Card } from 'react-bootstrap'

const Profile = () => {
  return (
        <Card style={{ flexDirection: 'row', height: '50vh' }}>
      <Card.Img variant="top" src="../cricket-player1.jpg" style={{ height: 350, width: 400 }} />
      <Card.Body>
        <Card.Title style={{ background: '#6495ed', padding: '5px 10px' }}>Player Info</Card.Title>
        <Card.Text>
          <div>
            <p>Display Name:</p>
            <p>Team360</p>
          </div>
          <div>
            <p>Owner Name:</p>
            <p>Venkatesh</p>
          </div>
          <div>
            <p>DOB:</p>
            <p>10/04/1994</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Profile
