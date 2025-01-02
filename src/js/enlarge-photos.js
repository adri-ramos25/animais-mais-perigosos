const btnExpandPhoto = document.getElementsByClassName("btn-expand-photo");

const btnReducePhoto = document.getElementsByClassName("btn-reduce-photo");



// Botoes que ampliam o tamanho das imagens dos animais
btnExpandPhoto[0].addEventListener("click", () => {
    document.getElementsByClassName("texts-taipan")[0].style.display = "none";
    document.getElementsByClassName("texts-taipan")[1].style.display = "none";
    btnExpandPhoto[0].style.display = "none";
    btnReducePhoto[0].style.display = "block";
    document.getElementById("photo-taipan").style.width = "20em";
})

btnExpandPhoto[1].addEventListener("click", () => {
    document.getElementsByClassName("texts-hipopotamo")[0].style.display = "none";
    document.getElementsByClassName("texts-hipopotamo")[1].style.display = "none";
    btnExpandPhoto[1].style.display = "none";
    btnReducePhoto[1].style.display = "block";
    document.getElementById("photo-hipopotamo").style.width = "20em";
})



// Botoes que reduzem o tamanho das imagens dos animais
btnReducePhoto[0].addEventListener("click", () => {
    document.getElementById("photo-taipan").style.width = "10em";
    btnReducePhoto[0].style.display = "none";
    btnExpandPhoto[0].style.display = "block";
    document.getElementsByClassName("texts-taipan")[0].style.display = "block";
    document.getElementsByClassName("texts-taipan")[1].style.display = "block";
})

btnReducePhoto[1].addEventListener("click", () => {
    document.getElementById("photo-hipopotamo").style.width = "10em";
    btnReducePhoto[1].style.display = "none";
    btnExpandPhoto[1].style.display = "block";
    document.getElementsByClassName("texts-hipopotamo")[0].style.display = "block";
    document.getElementsByClassName("texts-hipopotamo")[1].style.display = "block";
})