export async function getMovieDetails(url) {
  const res = await fetch(url)
  if(res.status === 200 ){
    const movieResult = await res.json()
    return movieResult
  }
  if(res.status === 404 ){
    const { error } = await res.json()
    this.error(404,error)

  }
}