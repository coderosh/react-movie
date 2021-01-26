import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { FaGithub } from 'react-icons/fa'

import Container from './Container'
import Flex from './Flex'

const Navbar = styled.div`
  height: 60px;
  background: #1c1c1c;
`

const Logo = styled.p`
  font-size: 20px;
  font-family: cursive;
  font-weight: 600;
`

function Header() {
  return (
    <Navbar>
      <Container as={Flex}>
        <Link to="/">
          <Logo>React Movie</Logo>
        </Link>
        <a target="_blank" href="https://github.com/coderosh/react_movie">
          <FaGithub size="25px" color="#fff" />
        </a>
      </Container>
    </Navbar>
  )
}

export default Header
