import { addTrack } from "./storage.js";
document.querySelector("#trackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("trackName").value.trim();
  const url = document.getElementById("trackUrl").value.trim();
  const cover = document.getElementById("trackCover").value.trim();

  const newTrack = {
    id: Date.now(),
    name,
    url,
    cover
  };
  addTrack(newTrack);

});