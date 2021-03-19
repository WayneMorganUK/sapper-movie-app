export async function getTrailerId(VIDEO_API) {
  const res = await fetch(VIDEO_API)
  if(res.status === 200 ){
    const preview = await res.json()
    const preview_Id = preview.results.length ?  preview.results[0].key : '999'
    return preview_Id
  }
  if(res.status === 404 ){
    const { error } = await res.json()
    this.error(404,error)
  }
}
