import { useQuery } from "react-query";
import rawData from "./siple.json";

const fetchMovie = async (_, id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return rawData;
};

const useMovieQuery = (id) => {
  return useQuery(["movies", id], fetchMovie, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export default useMovieQuery;
