import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'

const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const Movies = ({ movies }) => {
  return (
    <Grid>
      {movies.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default Movies
