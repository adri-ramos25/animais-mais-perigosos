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

btnExpandPhoto[2].addEventListener("click", () => {
    document.getElementsByClassName("texts-agua-viva")[0].style.display = "none";
    document.getElementsByClassName("texts-agua-viva")[1].style.display = "none";
    btnExpandPhoto[2].style.display = "none";
    btnReducePhoto[2].style.display = "block";
    document.getElementById("photo-agua-viva").style.width = "20em";
})

btnExpandPhoto[3].addEventListener("click", () => {
    document.getElementsByClassName("texts-mosquito")[0].style.display = "none";
    document.getElementsByClassName("texts-mosquito")[1].style.display = "none";
    btnExpandPhoto[3].style.display = "none";
    btnReducePhoto[3].style.display = "block";
    document.getElementById("photo-mosquito").style.width = "20em";
})

btnExpandPhoto[4].addEventListener("click", () => {
    document.getElementsByClassName("texts-crocodilo")[0].style.display = "none";
    document.getElementsByClassName("texts-crocodilo")[1].style.display = "none";
    btnExpandPhoto[4].style.display = "none";
    btnReducePhoto[4].style.display = "block";
    document.getElementById("photo-crocodilo").style.width = "20em";
})

btnExpandPhoto[5].addEventListener("click", () => {
    document.getElementsByClassName("texts-tubarao")[0].style.display = "none";
    document.getElementsByClassName("texts-tubarao")[1].style.display = "none";
    btnExpandPhoto[5].style.display = "none";
    btnReducePhoto[5].style.display = "block";
    document.getElementById("photo-tubarao").style.width = "20em";
})

btnExpandPhoto[6].addEventListener("click", () => {
    document.getElementsByClassName("texts-polvo")[0].style.display = "none";
    document.getElementsByClassName("texts-polvo")[1].style.display = "none";
    btnExpandPhoto[6].style.display = "none";
    btnReducePhoto[6].style.display = "block";
    document.getElementById("photo-polvo").style.width = "20em";
})

btnExpandPhoto[7].addEventListener("click", () => {
    document.getElementsByClassName("texts-rinoceronte")[0].style.display = "none";
    document.getElementsByClassName("texts-rinoceronte")[1].style.display = "none";
    btnExpandPhoto[7].style.display = "none";
    btnReducePhoto[7].style.display = "block";
    document.getElementById("photo-rinoceronte").style.width = "20em";
})

btnExpandPhoto[8].addEventListener("click", () => {
    document.getElementsByClassName("texts-tigre")[0].style.display = "none";
    document.getElementsByClassName("texts-tigre")[1].style.display = "none";
    btnExpandPhoto[8].style.display = "none";
    btnReducePhoto[8].style.display = "block";
    document.getElementById("photo-tigre").style.width = "20em";
})

btnExpandPhoto[9].addEventListener("click", () => {
    document.getElementsByClassName("texts-escorpiao")[0].style.display = "none";
    document.getElementsByClassName("texts-escorpiao")[1].style.display = "none";
    btnExpandPhoto[9].style.display = "none";
    btnReducePhoto[9].style.display = "block";
    document.getElementById("photo-escorpiao").style.width = "20em";
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

btnReducePhoto[2].addEventListener("click", () => {
    document.getElementById("photo-agua-viva").style.width = "10em";
    btnReducePhoto[2].style.display = "none";
    btnExpandPhoto[2].style.display = "block";
    document.getElementsByClassName("texts-agua-viva")[0].style.display = "block";
    document.getElementsByClassName("texts-agua-viva")[1].style.display = "block";
})

btnReducePhoto[3].addEventListener("click", () => {
    document.getElementById("photo-mosquito").style.width = "10em";
    btnReducePhoto[3].style.display = "none";
    btnExpandPhoto[3].style.display = "block";
    document.getElementsByClassName("texts-mosquito")[0].style.display = "block";
    document.getElementsByClassName("texts-mosquito")[1].style.display = "block";
})

btnReducePhoto[4].addEventListener("click", () => {
    document.getElementById("photo-crocodilo").style.width = "10em";
    btnReducePhoto[4].style.display = "none";
    btnExpandPhoto[4].style.display = "block";
    document.getElementsByClassName("texts-crocodilo")[0].style.display = "block";
    document.getElementsByClassName("texts-crocodilo")[1].style.display = "block";
})

btnReducePhoto[5].addEventListener("click", () => {
    document.getElementById("photo-tubarao").style.width = "10em";
    btnReducePhoto[5].style.display = "none";
    btnExpandPhoto[5].style.display = "block";
    document.getElementsByClassName("texts-tubarao")[0].style.display = "block";
    document.getElementsByClassName("texts-tubarao")[1].style.display = "block";
})

btnReducePhoto[6].addEventListener("click", () => {
    document.getElementById("photo-polvo").style.width = "10em";
    btnReducePhoto[6].style.display = "none";
    btnExpandPhoto[6].style.display = "block";
    document.getElementsByClassName("texts-polvo")[0].style.display = "block";
    document.getElementsByClassName("texts-polvo")[1].style.display = "block";
})

btnReducePhoto[7].addEventListener("click", () => {
    document.getElementById("photo-rinoceronte").style.width = "10em";
    btnReducePhoto[7].style.display = "none";
    btnExpandPhoto[7].style.display = "block";
    document.getElementsByClassName("texts-rinoceronte")[0].style.display = "block";
    document.getElementsByClassName("texts-rinoceronte")[1].style.display = "block";
})

btnReducePhoto[8].addEventListener("click", () => {
    document.getElementById("photo-tigre").style.width = "10em";
    btnReducePhoto[8].style.display = "none";
    btnExpandPhoto[8].style.display = "block";
    document.getElementsByClassName("texts-tigre")[0].style.display = "block";
    document.getElementsByClassName("texts-tigre")[1].style.display = "block";
})

btnReducePhoto[9].addEventListener("click", () => {
    document.getElementById("photo-escorpiao").style.width = "10em";
    btnReducePhoto[9].style.display = "none";
    btnExpandPhoto[9].style.display = "block";
    document.getElementsByClassName("texts-escorpiao")[0].style.display = "block";
    document.getElementsByClassName("texts-escorpiao")[1].style.display = "block";
})