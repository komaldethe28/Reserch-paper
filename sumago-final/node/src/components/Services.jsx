import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../11.jpg'
import img3 from '../cloud.jpg'
import img2 from '../night.jpg'
import img4 from '../sunrise.jpg'
const Services = (prop) => {
  return (
    <div>
      
       <Container>
      <Row>
        <Col md={3}><Card>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='mytitle'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>
<Col md={3}><Card>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title className='mytitle'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>
<Col md={3}><Card>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='mytitle'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>
<Col md={3}><Card>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title className='mytitle'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>
      </Row>
    </Container> 
  
  {/* <Card col={3}>
      <Card.Img variant="top" src={prop.imgd} />
      <Card.Body>
        <Card.Title className='mytitle'>{prop.title}</Card.Title>
        <Card.Text>
          {prop.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
    
    </div>
  )
}

export default Services
