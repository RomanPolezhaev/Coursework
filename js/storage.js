const STORAGE_KEY = "playlist";
export function getTracks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
export function saveTracks(tracks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tracks));
}
export function addTrack(track) {
  const tracks = getTracks();
  tracks.push(track);
  saveTracks(tracks);
}
export function deleteTrack(id) {
    const tracks = getTracks().filter(track => track.id !== id)
    saveTracks(tracks)
}