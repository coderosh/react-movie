import { useQuery } from "react-query";

import get from "../get";

const fetchMovie = async (_, id) => {
  return await get(`https://api.themoviedb.org/3/movie/${id}`, {
    api_key: process.env.API_KEY,
  });

  // const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
  //   params: { api_key: process.env.API_KEY },
  // });

  // return response.data;
};

const useMovieQuery = (id) => {
  return useQuery(["movies", id], fetchMovie, {
    staleTime: Infinity,
    retry: false,
  });
};

export default useMovieQuery;
