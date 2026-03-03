import { getTracks, deleteTrack } from "./storage.js";
import { createTrackElement } from "./utils.js";
document.addEventListener('DOMContentLoaded', function() {
    const playlist = document.querySelector('#playlist')
    const tracks = getTracks();
    tracks.forEach(track => {
        const element = createTrackElement(track);
        playlist.appendChild(element)
    })
    function renderTracks() {
    playlist.innerHTML = "";
    const tracks = getTracks();
    tracks.forEach(track => {
      const element = createTrackElement(track);
      element.querySelector(".delete-btn").addEventListener("click", () => {
        const confirmed = confirm("Вы уверены, что хотите удалить этот трек?");
        if (confirmed) {
          deleteTrack(track.id);
          renderTracks();
        }
      });
      playlist.appendChild(element);
    });
  }
  renderTracks();
})