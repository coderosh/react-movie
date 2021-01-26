import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'

const HeroImage = styled.div`
  height: 600px;
  min-height: calc(100vh - 60px);
  background: ${(props) =>
    `linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.8)), url(${props.image}) center center /cover`};
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }
`

const HeroContent = styled.div`
  position: absolute;
  color: #fff;
  bottom: 40px;
  width: 500px;
`

const Hero = (props) => (
  <HeroImage image={props.image}>
    <Container>
      <HeroContent>
        <h1>{props.title}</h1>
        <br />
        <p>{props.children}</p>
      </HeroContent>
    </Container>
  </HeroImage>
)

export default Hero
