import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>Talk To Us</h3>
                        <p className='mt-4'>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='desc col-12 col-sm-12 col-md-4'>
                        <h3>Blog Entries</h3>
                        <p className='mt-4'>110-220 Quisque diam odio, 
                            maximus ac consectetur eu, 10260 auctor non lorem
                        </p>
                        <p className='mt-4'>You are NOT allowed to re-distribute Softy Pinko 
                            template on any template collection websites. Thank you.
                        </p>
                    </Col>
                    <Col className='form col-12 col-sm-12 col-md-8'>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" placeholder='Your Message' />
                                </Form.Group>
                            </Row>
                            <Button>Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact