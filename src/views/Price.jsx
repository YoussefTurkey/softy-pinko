import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Price = () => {
  return (
    <>
        <section className='price mt-5' id='price'>
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>Pricing Plans</h3>
                        <p className='mt-4'>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-12 col-md-6 col-lg-4 list'>
                        <p className="name">Starter</p>
                        
                        <div className="num">
                            <p><span>$</span> 14.50</p>
                            <p><small>monthly</small></p>
                        </div>

                        <div className="details">
                            <p>60 GB space</p>
                            <p>600 GB transfer</p>
                            <p>Pro Design Panel</p>
                            <p><del>15-minute support</del></p>
                            <p><del>Unlimited Emails</del></p>
                            <p><del>24/7 Security</del></p>
                        </div>

                        <Button>PURCHASE NOW</Button>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 col-lg-4 list'>
                        <p className="name">Premium</p>
                        
                        <div className="num2">
                            <p><span>$</span> 21.50</p>
                            <p><small>monthly</small></p>
                        </div>

                        <div className="details">
                            <p>120 GB space</p>
                            <p>1200 GB transfer</p>
                            <p>Pro Design Panel</p>
                            <p>15-minute support</p>
                            <p><del>Unlimited Emails</del></p>
                            <p><del>24/7 Security</del></p>
                        </div>

                        <Button>PURCHASE NOW</Button>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 col-lg-4 list'>
                        <p className="name">Advanced</p>
                        
                        <div className="num">
                            <p><span>$</span> 42.00</p>
                            <p><small>monthly</small></p>
                        </div>

                        <div className="details">
                            <p>250 GB space</p>
                            <p>5000 GB transfer</p>
                            <p>Pro Design Panel</p>
                            <p>15-minute support</p>
                            <p>Unlimited Emails</p>
                            <p>24/7 Security</p>
                        </div>

                        <Button>PURCHASE NOW</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Price