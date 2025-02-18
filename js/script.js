const pictures= [
        "../images/mainphoto.jpg",
        "../images/contact.png",
        "../images/contacten.png",
];

function loadImages() {
    for (let index = 0; index < pictures.length; index++) {
            let img = document.createElement("img");
            img.src = pictures[img];

            document.getElementById(`picture-${item}`).appendChild(img);
        }
    }

window.onload = loadImages;
