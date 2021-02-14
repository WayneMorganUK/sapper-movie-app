export async function getTrailerId(VIDEO_API) {
  const apiVideo = await fetch(VIDEO_API)
  const preview = await apiVideo.json()
  const preview_Id = preview.results[0].key
  return preview_Id
}
