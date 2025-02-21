// Load images
const pictures = [
        "/images/discord.png",
        "/images/github.png"
];

function loadImages() {
  for (let index = 0; index < pictures.length; index++) {
    let img = document.createElement("img");
    img.src = pictures[index];
    
    document.getElementById(`picture-${index + 1}`).appendChild(img);
    }
}

window.onload = loadImages;

// Hide and show Table
const tableHidden = document.getElementById("section");

tableHidden.addEventListener("mouseover", function(){
  tableHidden.classList.add("show");
});

tableHidden.addEventListener("mouseout", function(){
  tableHidden.classList.remove("show");
});