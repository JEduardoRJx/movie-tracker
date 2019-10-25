const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?'
const apiKey = '1b20ae1afe685b2871c8d94218f89eba'

export const fetchMovies = async () => {
  const url = `${baseUrl}api_key=${apiKey}&language=en-US`
  const response = await fetch(url)
    if (!response.ok) {
      throw Error(
        "There was an issue retrieving your movies. Please try again."
      );
    }
  let movies = await response.json();
  movies = movies.results.map(movie => {
    const { backdrop_path, genre_ids, id, overview, poster_path, release_date, title, vote_average } = movie
    return { backdrop_path, genre_ids, id, overview, poster_path, release_date, title, vote_average, isFavorite: false }
  })
  return movies
};

export const postUser = async user => {
  const url = 'http://localhost:3001/api/v1/login';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    }),
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(url, options);
  if (!response.ok) {
     throw Error('Sorry, unable to retrieve your account. Try again later.')
  }
  const foundUser = await response.json();
  return foundUser;
}

export const addUser = async user => {
  const url = 'http://localhost:3001/api/v1/users';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password
    }),
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(url, options);
  console.log(response)
  if (!response.ok) {
    throw new Error('Sorry, unable to create your account. Try again later.')
  }
  const newUser = await response.json();
  console.log('new user', newUser.password)
  return newUser;
}