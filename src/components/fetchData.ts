export async function getMovieDetails(x) {
  const res = await fetch(x)
  if(res.status === 200 ){
    const movieResult = await res.json()
    return movieResult
  }
  if(res.status === 404 ){
    const { error } = await res.json()
    this.error(404,error)

  }
}