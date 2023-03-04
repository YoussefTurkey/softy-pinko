import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import right from '../../assets/images/right-image.png'

const RightAbout = () => {
  return (
    <>
        <Container className="about mt-5" data-aos="fade-left">
            <Row className='d-flex align-items-center right_row'>
                <Col className="info col-12 col-sm-12 col-md-6">
                    <h3>We can help you to grow your business</h3>
                    <p className='mt-5'>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, 
                        a bibendum lectus libero vitae urna. 
                        Sed id leo eu dolor luctus congue sed eget ipsum. 
                        Nunc nec luctus libero. Etiam quis dolor elit.
                    </p>
                </Col>

                <Col className="info col-12 col-sm-12 col-md-6">
                    <img src={right} />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default RightAbout