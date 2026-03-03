export function createTrackElement(track) {
  const li = document.createElement("li");
  li.classList.add("track-item");

  li.innerHTML = `
    ${track.cover ? `<img src="${track.cover}" class="track-cover">` : ""}
    <div class="track-info">
      <h3>${track.name}</h3>
      <a href="${track.url}" target="_blank">Открыть трек</a>
    </div>
    <button class="delete-btn">
        <img src="/assets/images/delete-button.png" alt="Удалить"></img>
    </button>
  `;
    li.dataset.id = track.id
  return li;
}