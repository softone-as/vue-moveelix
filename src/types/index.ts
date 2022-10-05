interface MovieTypes {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path?: string;
  backdrop_path?: string;
  genres: GenresTypes[];
}

interface GenresTypes {
  id: number;
  name: string;
}

export default MovieTypes;
