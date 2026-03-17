export const getYoutubeEmbed = (url) => {
  let videoId;

  if (url.includes("youtu.be")) {
    videoId = url.split("youtu.be/")[1];
  } else {
    videoId = url.split("v=")[1];
  }

  if (videoId.includes("&")) {
    videoId = videoId.split("&")[0];
  }

  return `https://www.youtube.com/embed/${videoId}`;
};

export function createTrackElement(track) {

  const li = document.createElement("li");
  li.classList.add("track-item");

  const embedUrl = getYoutubeEmbed(track.url);

  li.innerHTML = `
    ${track.cover ? `<img src="${track.cover}" class="track-cover">` : ""}
    <div class="track-info">
      <h3>${track.name}</h3>

      <iframe
        class="track-player"
        src="${embedUrl}"
        frameborder="0"
        allowfullscreen>
      </iframe>

    </div>

    <button class="delete-btn">
      <img src="../assets/images/delete-button.png" alt="Удалить">
    </button>
  `;

  li.dataset.id = track.id;

  return li;
}
