import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rate from '../assets/images/circle-dec.png'

const Count = () => {
  return (
    <>
        <section className='count' id='count'>
            <Container>
                <Row>
                    <Col className='col-12 col-sm-6 col-md-3 rate'>
                        <div className="rate_num">
                            <p>126</p>
                            <span>Projects</span>
                        </div>
                        <div className="img_rate">
                            <img src={rate} />
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-3 rate'>
                        <div className="rate_num">
                            <p>63</p>
                            <span>Happy Clients</span>
                        </div>
                        <div className="img_rate">
                            <img src={rate} />
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-3 rate'>
                        <div className="rate_num">
                            <p>126</p>
                            <span>Awards Wins</span>
                        </div>
                        <div className="img_rate">
                            <img src={rate} />
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-3 rate'>
                        <div className="rate_num">
                            <p>27</p>
                            <span>Countries</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Count