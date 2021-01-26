import React from 'react'
import styled from 'styled-components'
import { FaImdb, FaMoneyCheckAlt, FaTicketAlt } from 'react-icons/fa'

import Flex from '../components/Flex'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import Container from '../components/Container'
import useMovieQuery from '../hooks/useMovieQuery'

import NotFoundImage from '../not-found-image.jpg'

const MovieBackground = styled.div`
  background: url(${(props) => props.image}) center center / cover;
  background-attachment: fixed;
  height: 500px;
  min-height: calc(100vh - 140px);
  width: 100%;
`

const MovieInfo = styled.div`
  height: 80px;
  background: #111;
  color: #fff;

  span {
    padding-left: 5px;
  }

  @media (max-width: 500px) {
    svg {
      display: none;
    }
  }
`

const MovieDetail = styled.div`
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  height: 80%;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  color: #ccc;

  img {
    height: 100%;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    img {
      display: none;
    }
  }

  .details {
    padding-left: 20px;
    max-height: 100%;
    overflow-y: auto;
  }

  .details .title {
    font-weight: 600;
    font-size: 30px;
  }

  .title-h {
    padding-bottom: 5px;
    font-weight: 600;
  }

  .p-h {
    font-weight: 300;
  }
`

const Detail = (props) => {
  const { data, isLoading, isError } = useMovieQuery(props.id)

  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>Try refreshing your browser.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div style={{ background: '#333' }}>
        <Flex justify="center" style={{ minHeight: '100vh' }}>
          <Spinner color="#ccc" />
        </Flex>
      </div>
    )
  }

  console.log(data)

  return (
    <Layout>
      <MovieBackground
        image={`http://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
      >
        <Container as={Flex}>
          <MovieDetail as={Flex} justify="flex-start">
            <img
              src={
                data.poster_path
                  ? `http://image.tmdb.org/t/p/w500${data.poster_path}`
                  : NotFoundImage
              }
            />
            <div className="details">
              <h2 className="title">{data.original_title}</h2>
              <br />
              <h3 className="title-h">PLOT</h3>
              <p className="p-h">{data.overview}</p>
              <br />
              <h3 className="title-h">STATUS</h3>
              <p className="p-h">{data.status}</p>
            </div>
          </MovieDetail>
        </Container>
      </MovieBackground>
      <MovieInfo>
        <Container as={Flex}>
          <Flex>
            <FaImdb size="35px" />
            <span>IMDB: {data.vote_average}</span>
          </Flex>
          <Flex>
            <FaMoneyCheckAlt size="35px" />
            <span>Budget: {`$${data.budget}`}</span>
          </Flex>
          <Flex>
            <FaTicketAlt size="35px" />
            <span>Revenue: {`$${data.revenue}`}</span>
          </Flex>
        </Container>
      </MovieInfo>
    </Layout>
  )
}

export default Detail
