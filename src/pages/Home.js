import React, { useState } from "react";
import { queryCache } from "react-query";

import Hero from "../components/Hero";
import Flex from "../components/Flex";
import Layout from "../components/Layout";
import Search from "../components/Search";
import Movies from "../components/Movies";
import Spinner from "../components/Spinner";
import Container from "../components/Container";
import useMoviesQuery from "../hooks/useMoviesQuery";
import FetchMoreButton from "../components/FetchMoreButton";

const Home = () => {
  const [endpoint, setEndpoint] = useState("movie/popular");
  const {
    data,
    isLoading,
    isError,
    fetchMore,
    isFetchingMore,
    canFetchMore,
  } = useMoviesQuery(endpoint);

  if (isLoading && endpoint === "movie/popular") {
    return (
      <div style={{ background: "#333" }}>
        <Flex justify="center" style={{ minHeight: "100vh" }}>
          <Spinner color="#ccc" />
        </Flex>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>Try refreshing your browser.</p>
      </div>
    );
  }

  return (
    <Layout showFooter>
      <Hero
        title={getHeroData().original_title}
        image={`http://image.tmdb.org/t/p/w1280${getHeroData().backdrop_path}`}
      >
        {getHeroData().overview}
      </Hero>

      <Search onSubmit={setEndpoint} />
      <Container>
        <h1>
          {endpoint === "movie/popular" ? "Popular Movies" : "Search Result"}
        </h1>
        <br />
        {isLoading ? (
          <Flex justify="center" style={{ padding: "50px 0" }}>
            <Spinner color="black" />
          </Flex>
        ) : (
          <Movies movies={data} />
        )}
        <Flex justify="center" style={{ margin: "10px 0px" }}>
          <FetchMoreButton
            disabled={!canFetchMore || isFetchingMore}
            onClick={() => fetchMore()}
          >
            {isFetchingMore ? "Loading..." : "Fech More"}
          </FetchMoreButton>
        </Flex>
      </Container>
    </Layout>
  );
};

function getHeroData() {
  return queryCache.getQueryData("movie/popular")[0].results[0];
}

export default Home;
