import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rocket from '../assets/images/work-process-item-01.png';

const Work = () => {
  return (
    <>
        <section className='work' id='work'>
            <Container>
                <Row>
                  <Col className='title'>
                    <h3>Work Process</h3>
                    <p className='mt-4'>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                  </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-12 col-md-4 col-lg-2 rocket'>
                        <img src={rocket} />
                        <h5>Get Ideas</h5>
                        <p>Godard pasbst parism fam cliche.</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-4 col-lg-2 rocket'>
                        <img src={rocket} />
                        <h5>Get Ideas</h5>
                        <p>Godard pasbst parism fam cliche.</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-4 col-lg-2 rocket'>
                        <img src={rocket} />
                        <h5>Get Ideas</h5>
                        <p>Godard pasbst parism fam cliche.</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-4 col-lg-2 rocket'>
                        <img src={rocket} />
                        <h5>Get Ideas</h5>
                        <p>Godard pasbst parism fam cliche.</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-4 col-lg-2 rocket'>
                        <img src={rocket} />
                        <h5>Get Ideas</h5>
                        <p>Godard pasbst parism fam cliche.</p>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-4 col-lg-2 rocket'>
                        <img src={rocket} />
                        <h5>Get Ideas</h5>
                        <p>Godard pasbst parism fam cliche.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Work