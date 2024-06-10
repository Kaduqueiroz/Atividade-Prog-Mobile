import axios from 'axios';

const fetchMovies = async () => {
  try {
    const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies: ', error);
    return [];
  }
};

export { fetchMovies };
