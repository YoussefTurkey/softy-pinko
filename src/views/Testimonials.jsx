import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testi from '../assets/images/testimonial-icon.png'

const Testimonials = () => {
  return (
    <> 
        <section className='testi mt-5 mb-5' id='testi'>
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>What do they say?</h3>
                        <p className='mt-4'>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-6 col-md-4 testimonial'>
                        <img src={testi} />
                        <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                        <div className="desc">
                            <h5>Catherine Soft</h5>
                            <p>Managing Director</p>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 testimonial'>
                        <img src={testi} />
                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                        <div className="desc">
                            <h5>Kelvin Wood</h5>
                            <p>Digital Marketer</p>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 testimonial'>
                        <img src={testi} />
                        <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                        <div className="desc">
                            <h5>David Martin</h5>
                            <p>Website Manager</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Testimonials