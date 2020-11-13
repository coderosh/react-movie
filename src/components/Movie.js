import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";

const MovieWrapper = styled.div`
  overflow: hidden;
  transition: all 0.1s;

  img {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Movie = ({ data }) => (
  <MovieWrapper>
    <Link to={`/${data.id}`}>
      <img src="http://image.tmdb.org/t/p/w500/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg" />
    </Link>
  </MovieWrapper>
);

export default Movie;
