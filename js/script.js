const pictures= [
    [
        "../images/composition.jpeg",
    ],
    [
        "../images/arabian_moucharabieh.jpeg",
        "../images/soleil-oblique.jpeg",
    ]
];

function loadImages() {
    for (let index = 0; index < pictures.length; index++) {
        let images = pictures[index];
        
        for (let img = 0; img < images.length; img++) {
            let image = document.createElement("img");
            image.src = images[img];

            const item = index * 2 + (img + 1);
            document.getElementById(`picture-${item}`).appendChild(img);
        }
    }
}

window.onload = loadImages;
