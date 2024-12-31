const btnEnlargePhotoTaipan = document.getElementById("btn-expand-photo-taipan");

const boxExpandedPhoto = document.getElementsByClassName("box-expanded-photo");

const btnClose = document.getElementsByClassName("btn-close");

const expandedPhotos = document.getElementsByClassName("expanded-photos");

let selectedPhoto = "";



btnEnlargePhotoTaipan.addEventListener("click", () => {
    selectedPhoto = "taipan";
    enlargePhoto();
})

btnClose[0].addEventListener("click", () => {
    closeExpandedPhoto();
})



// Amplia a foto do animal
function enlargePhoto() {
    boxExpandedPhoto[0].style.display = "block";

    if (selectedPhoto == "taipan") {
        document.getElementById("expanded-photo-taipan").style.display = "block";
    }
}

// Fecha a foto expandida do animal
function closeExpandedPhoto() {
    expandedPhotos[0].style.display = "none";
    boxExpandedPhoto[0].style.display = "none";
}