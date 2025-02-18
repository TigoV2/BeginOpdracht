const pictures= [
        "../images/contact.png",
        "../images/contacten.png",
];

function loadImages() {
    for (let index = 0; index < pictures.length; index++) {
            let img = document.createElement("img");
            img.src = pictures[index];

            document.getElementById(`picture-${index + 1}`).appendChild(img);
        }
    }

window.onload = loadImages;