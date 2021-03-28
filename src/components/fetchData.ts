export async function getMovieDetails(url) {
  const res = await fetch(url)
  const movieResult = await res.json()
  return movieResult
}