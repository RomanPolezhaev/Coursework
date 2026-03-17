import { addTrack } from "./storage.js";
document.querySelector("#trackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector("#trackName");
  const urlInput = document.querySelector("#trackUrl");
  const coverInput = document.querySelector("#trackCover");
  const message = document.querySelector("#formMessage");

  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  const cover = coverInput.value.trim();

  let isValid = true;
  message.textContent = "";

  [nameInput, urlInput, coverInput].forEach(input => {
    input.classList.remove("error", "success");
  });

  if (name === "") {
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameInput.classList.add("success");
  }

  try {
    new URL(url);
    urlInput.classList.add("success");
  } catch {
    urlInput.classList.add("error");
    isValid = false;
  }

  if (cover !== "") {
    try {
      new URL(cover);
      coverInput.classList.add("success");
    } catch {
      coverInput.classList.add("error");
      isValid = false;
    }
  }

  if (!isValid) {
    message.textContent = "Пожалуйста, заполните форму корректно.";
    return;
  }

  const newTrack = {
    id: Date.now(),
    name,
    url,
    cover
  };

  addTrack(newTrack);

  message.textContent = "Трек успешно добавлен!";
  document.querySelector("#trackForm").reset();
  [nameInput, urlInput, coverInput].forEach(input =>
    input.classList.remove("success")
  );
});