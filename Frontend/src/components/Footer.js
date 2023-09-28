import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#FECBCA"}}>
      <Container >
        <Row>
          <Col className='text-center py-3'>
            Bidhyarthisewa &copy; 2023
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
