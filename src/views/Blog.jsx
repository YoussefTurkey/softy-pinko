import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import entry01 from '../assets/images/blog-item-01.png'
import entry02 from '../assets/images/blog-item-02.png'
import entry03 from '../assets/images/blog-item-03.png'

const Blog = () => {
  return (
    <>
        <section className='blog mt-5 mb-5' id='blog'>
            <Container>
                <Row>
                    <Col className='title'>
                        <h3>Blog Entries</h3>
                        <p className='mt-4'>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='col-12 col-sm-12 col-md-6 col-lg-4 entry'>
                        <img src={entry01} />
                        
                        <div className="txt">
                            <h5><a href="">Vivamus ac vehicula dui</a></h5>
                            <p>Cras aliquet ligula dui, vitae fermentum velit tincidunt id. 
                                Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                            </p>
                        </div>

                        <Button>READ MORE</Button>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 col-lg-4 entry'>
                        <img src={entry02} />
                        
                        <div className="txt">
                            <h5><a href="">Phasellus convallis augue</a></h5>
                            <p>Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. 
                                Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                            </p>
                        </div>

                        <Button>READ MORE</Button>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 col-lg-4 entry'>
                        <img src={entry03} />
                        
                        <div className="txt">
                            <h5><a href="">Nam gravida purus non</a></h5>
                            <p>Maecenas eu erat vitae dui convallis consequat vel gravida nulla. 
                                Vestibulum finibus euismod odio, ut tempus enim varius eu.
                            </p>
                        </div>

                        <Button>READ MORE</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Blog