import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import MyNavbar from './MyNavbar';
import video from '../media/hero.mp4'


const Hero = () => {
  return (
    <>
                <video src={video} autoPlay muted playsinline loop />
                <MyNavbar />
                <Container className='container'>
                    <h1>Your data is secure with us</h1>
                    <h1>
                        We provide the best security systems for clients all over the world
                    </h1>
                    <>
                        <a href='singup'>
                            <Button>Get Started</Button>
                        </a>
                        <Button>Find More</Button>
                    </>
                </Container>
        </>
  )
}

export default Hero;