import { useInfiniteQuery } from "react-query";
import rawData from "./rawData.json";

const fetchMovies = async (endpoint, page = 1) => {
  console.log("HITTING NETWORK.........");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    ...rawData,
    results: [rawData.results[page]],
    index: page,
  };
};

const useMoviesQuery = (endpoint) => {
  return useInfiniteQuery(endpoint, fetchMovies, {
    staleTime: Infinity,
    retry: false,
    enabled: endpoint,
    getFetchMore: (lastPage) => {
      return lastPage.index + 1;
    },
  });
};

// return axios
// .get(
//   `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.API_KEY}`
// )
// .then((res) => res.data);

export default useMoviesQuery;
