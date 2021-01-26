import { Link } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

import NotFoundImage from '../not-found-image.jpg'

const MovieWrapper = styled.div`
  overflow: hidden;
  transition: all 0.1s;
  max-width: 300px;

  img {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`

const Movie = ({ data }) => (
  <Flex justify="center">
    <MovieWrapper>
      <Link to={`/${data.id}`}>
        <img
          src={
            data.poster_path
              ? `http://image.tmdb.org/t/p/w500${data.poster_path}`
              : NotFoundImage
          }
        />
      </Link>
    </MovieWrapper>
  </Flex>
)

export default Movie
