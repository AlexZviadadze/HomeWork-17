// (------1-----)
const delateButton = document.getElementById("delate-button");
delateButton.addEventListener("click", () => {
  delateButton.remove();
});

// (-----2------)

const image = document.createElement("img");
image.setAttribute("src", "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg");

const box = document.getElementById("box");
box.appendChild(image);

// (-------3-----)
// ეს html ში მიწერია
