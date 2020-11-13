import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Container from "../components/Container";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, isFetching } = useQuery(
    "/todos",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data);
    },
    {
      staleTime: Infinity,
    }
  );

  console.log(data);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // search for movie
    //set movies
    console.log(searchInput);
  };

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Layout>
      {isFetching && <h1>Updating todos.....</h1>}
      <Hero
        title="The SpongeBob Movie: Sponge on the Run"
        image="http://image.tmdb.org/t/p/w1280/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
      >
        When his best friend Gary is suddenly snatched away, SpongeBob takes
        Patrick on a madcap mission far beyond Bikini Bottom to save their
        pink-shelled pal.
      </Hero>

      <Search
        onSubmit={onSubmitHandler}
        value={searchInput}
        onChange={onChangeHandler}
      />
      <Container>
        <h1>Trending</h1>
        <br />
        <Movies
          movies={[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Home;
