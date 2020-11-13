import React from "react";
import styled from "styled-components";
import { FaImdb, FaMoneyCheckAlt, FaTicketAlt } from "react-icons/fa";

import Container from "../components/Container";
import Flex from "../components/Flex";
import Layout from "../components/Layout";

const MovieBackground = styled.div`
  background: url(${(props) => props.image}) center center / cover;
  background-attachment: fixed;
  height: 500px;
  min-height: calc(100vh - 140px);
  width: 100%;
`;

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
`;

const MovieDetail = styled.div`
  background: rgba(0, 0, 0, 0.97);
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

  .details {
    padding-left: 20px;
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
`;

const Detail = () => {
  const url = "http://image.tmdb.org/t/p/w1280/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg";
  return (
    <Layout>
      <MovieBackground image={url}>
        <Container as={Flex}>
          <MovieDetail as={Flex} justify="flex-start">
            <img src="http://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />
            <div className="details">
              <h2 className="title">Mulan</h2>
              <br />
              <h3 className="title-h">PLOT</h3>
              <p className="p-h">
                When the Emperor of China issues a decree that one man per
                family must serve in the Imperial Chinese Army to defend the
                country from Huns, Hua Mulan, the eldest daughter of an honored
                warrior, steps in to take the place of her ailing father. She is
                spirited, determined and quick on her feet. Disguised as a man
                by the name of Hua Jun, she is tested every step of the way and
                must harness her innermost strength and embrace her true
                potential.
              </p>
              <br />
              <h3 className="title-h">DIRECTOR</h3>
              <p className="p-h">Niki Caro</p>
            </div>
          </MovieDetail>
        </Container>
      </MovieBackground>
      <MovieInfo>
        <Container as={Flex}>
          <Flex>
            <FaImdb size="35px" />
            <span>IMDB: 6.8</span>
          </Flex>
          <Flex>
            <FaMoneyCheckAlt size="35px" />
            <span>Budget: $200,000,000</span>
          </Flex>
          <Flex>
            <FaTicketAlt size="35px" />
            <span>Revenue: $57,000,000</span>
          </Flex>
        </Container>
      </MovieInfo>
    </Layout>
  );
};

export default Detail;
