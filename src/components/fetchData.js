export async function getMovieDetails(x) {
  const apiResult = await fetch(x)
  const movieResult = await apiResult.json()
  return movieResult
}