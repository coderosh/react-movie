import { useInfiniteQuery } from "react-query";

import get from "../get";

const fetchMovies = async (endpoint, page = 1) => {
  let url;
  if (endpoint === "movie/popular") {
    url = `https://api.themoviedb.org/3/${endpoint}`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?${endpoint}`;
  }

  return await get(url, { page, api_key: process.env.API_KEY });
};

const useMoviesQuery = (endpoint) => {
  return useInfiniteQuery(endpoint, fetchMovies, {
    staleTime: Infinity,
    retry: false,
    enabled: endpoint,
    getFetchMore: (lastPage) => {
      const newPage =
        lastPage.page + 1 <= lastPage.total_pages ? lastPage.page + 1 : null;
      return newPage;
    },
  });
};

export default useMoviesQuery;
