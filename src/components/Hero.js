import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Hero = () => {
  return (
    <Container>
			<video src="./media/hero.mp4" autoPlay muted playsinline loop />
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
		</Container>
  )
}

export default Hero;