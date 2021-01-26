import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const StyledFooter = styled.div`
  background: #1c1c1c;
  padding: 30px 0;
  text-align: center;
  color: #fff;
`

const Footer = () => (
  <StyledFooter>
    <Container>Created By Roshan Acharya</Container>
  </StyledFooter>
)

export default Footer
