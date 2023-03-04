import React from 'react'
import Container from 'react-bootstrap/Container';
import You11 from '../assets/images/text-logo.png'

const Footer = () => {
  return (
    <>
        <footer className="footer" id="footer">
            <Container>
                <div className="icons">
                    <i className='bx bxl-html5' ></i>
                    <i className='bx bxl-sass' ></i>
                    <i className='bx bxl-react' ></i>
                    <i className='bx bxl-javascript' ></i>
                    <i className='bx bxs-file-json' ></i>
                </div>
                <hr />
                <p>COPYRIGHT © 2023 SOFTY PINKO COMPANY - DESIGN: <img src={You11} /></p>
            </Container>
        </footer>
    </>
  )
}

export default Footer