export async function getTrailerId(VIDEO_API) {
  const apiVideo = await fetch(VIDEO_API)
  const preview = await apiVideo.json()
  const preview_Id = preview.results.length ?  preview.results[0].key : '999'
  return preview_Id
}
