import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import right from '../../assets/images/right-image.png'

const RightAbout = () => {
  return (
    <>
        <Container className="about mt-5">
            <Row className='d-flex align-items-center right_row'>
                <Col className="info col-sm-12 col-md-6">
                    <h3>Let’s discuss about you project</h3>
                    <p className='mt-5'>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. 
                        Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
                    </p>
                </Col>

                <Col className="info col-sm-12 col-md-6">
                    <img src={right} />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default RightAbout