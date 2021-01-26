import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 15px 50px;
  background: #1c1c1c;
  color: #ccc;
  border-radius: 25px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background: #2c2c2c;
  }

  &:active {
    background: #111;
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`

const FetchMoreButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default FetchMoreButton
