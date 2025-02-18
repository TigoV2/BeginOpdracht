const pictures= [
        "../images/discord_profile.png",
        "../images/contact.png",
];

function loadImages() {
    for (let index = 0; index < pictures.length; index++) {
            let img = document.createElement("img");
            img.src = pictures[index];

            document.getElementById(`picture-${index + 1}`).appendChild(img);
        }
    }

window.onload = loadImages;