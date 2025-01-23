const texts = document.getElementsByClassName("texts");

const btnExpandPhoto = document.getElementsByClassName("btn-expand-photo");

const btnReducePhoto = document.getElementsByClassName("btn-reduce-photo");


// Botoes que ampliam o tamanho das imagens dos animais
btnExpandPhoto[0].addEventListener("click", () => {
    texts[0].style.display = "none";
    texts[1].style.display = "none";
    btnExpandPhoto[0].style.display = "none";
    btnReducePhoto[0].style.display = "block";
    document.getElementById("photo-taipan").style.width = "20em";
})

btnExpandPhoto[1].addEventListener("click", () => {
    texts[2].style.display = "none";
    texts[3].style.display = "none";
    btnExpandPhoto[1].style.display = "none";
    btnReducePhoto[1].style.display = "block";
    document.getElementById("photo-hipopotamo").style.width = "20em";
})

btnExpandPhoto[2].addEventListener("click", () => {
    texts[4].style.display = "none";
    texts[5].style.display = "none";
    btnExpandPhoto[2].style.display = "none";
    btnReducePhoto[2].style.display = "block";
    document.getElementById("photo-agua-viva").style.width = "20em";
})

btnExpandPhoto[3].addEventListener("click", () => {
    texts[6].style.display = "none";
    texts[7].style.display = "none";
    btnExpandPhoto[3].style.display = "none";
    btnReducePhoto[3].style.display = "block";
    document.getElementById("photo-mosquito").style.width = "20em";
})

btnExpandPhoto[4].addEventListener("click", () => {
    texts[8].style.display = "none";
    texts[9].style.display = "none";
    btnExpandPhoto[4].style.display = "none";
    btnReducePhoto[4].style.display = "block";
    document.getElementById("photo-crocodilo").style.width = "20em";
})

btnExpandPhoto[5].addEventListener("click", () => {
    texts[10].style.display = "none";
    texts[11].style.display = "none";
    btnExpandPhoto[5].style.display = "none";
    btnReducePhoto[5].style.display = "block";
    document.getElementById("photo-tubarao").style.width = "20em";
})

btnExpandPhoto[6].addEventListener("click", () => {
    texts[12].style.display = "none";
    texts[13].style.display = "none";
    btnExpandPhoto[6].style.display = "none";
    btnReducePhoto[6].style.display = "block";
    document.getElementById("photo-polvo").style.width = "20em";
})

btnExpandPhoto[7].addEventListener("click", () => {
    texts[14].style.display = "none";
    texts[15].style.display = "none";
    btnExpandPhoto[7].style.display = "none";
    btnReducePhoto[7].style.display = "block";
    document.getElementById("photo-rinoceronte").style.width = "20em";
})

btnExpandPhoto[8].addEventListener("click", () => {
    texts[16].style.display = "none";
    texts[17].style.display = "none";
    btnExpandPhoto[8].style.display = "none";
    btnReducePhoto[8].style.display = "block";
    document.getElementById("photo-tigre").style.width = "20em";
})

btnExpandPhoto[9].addEventListener("click", () => {
    texts[18].style.display = "none";
    texts[19].style.display = "none";
    btnExpandPhoto[9].style.display = "none";
    btnReducePhoto[9].style.display = "block";
    document.getElementById("photo-escorpiao").style.width = "20em";
})


// Botoes que reduzem o tamanho das imagens dos animais
btnReducePhoto[0].addEventListener("click", () => {
    document.getElementById("photo-taipan").style.width = "10em";
    btnReducePhoto[0].style.display = "none";
    btnExpandPhoto[0].style.display = "block";
    texts[0].style.display = "block";
    texts[1].style.display = "block";
})

btnReducePhoto[1].addEventListener("click", () => {
    document.getElementById("photo-hipopotamo").style.width = "10em";
    btnReducePhoto[1].style.display = "none";
    btnExpandPhoto[1].style.display = "block";
    texts[2].style.display = "block";
    texts[3].style.display = "block";
})

btnReducePhoto[2].addEventListener("click", () => {
    document.getElementById("photo-agua-viva").style.width = "10em";
    btnReducePhoto[2].style.display = "none";
    btnExpandPhoto[2].style.display = "block";
    texts[4].style.display = "block";
    texts[5].style.display = "block";
})

btnReducePhoto[3].addEventListener("click", () => {
    document.getElementById("photo-mosquito").style.width = "10em";
    btnReducePhoto[3].style.display = "none";
    btnExpandPhoto[3].style.display = "block";
    texts[6].style.display = "block";
    texts[7].style.display = "block";
})

btnReducePhoto[4].addEventListener("click", () => {
    document.getElementById("photo-crocodilo").style.width = "10em";
    btnReducePhoto[4].style.display = "none";
    btnExpandPhoto[4].style.display = "block";
    texts[8].style.display = "block";
    texts[9].style.display = "block";
})

btnReducePhoto[5].addEventListener("click", () => {
    document.getElementById("photo-tubarao").style.width = "10em";
    btnReducePhoto[5].style.display = "none";
    btnExpandPhoto[5].style.display = "block";
    texts[10].style.display = "block";
    texts[11].style.display = "block";
})

btnReducePhoto[6].addEventListener("click", () => {
    document.getElementById("photo-polvo").style.width = "10em";
    btnReducePhoto[6].style.display = "none";
    btnExpandPhoto[6].style.display = "block";
    texts[12].style.display = "block";
    texts[13].style.display = "block";
})

btnReducePhoto[7].addEventListener("click", () => {
    document.getElementById("photo-rinoceronte").style.width = "10em";
    btnReducePhoto[7].style.display = "none";
    btnExpandPhoto[7].style.display = "block";
    texts[14].style.display = "block";
    texts[15].style.display = "block";
})

btnReducePhoto[8].addEventListener("click", () => {
    document.getElementById("photo-tigre").style.width = "10em";
    btnReducePhoto[8].style.display = "none";
    btnExpandPhoto[8].style.display = "block";
    texts[16].style.display = "block";
    texts[17].style.display = "block";
})

btnReducePhoto[9].addEventListener("click", () => {
    document.getElementById("photo-escorpiao").style.width = "10em";
    btnReducePhoto[9].style.display = "none";
    btnExpandPhoto[9].style.display = "block";
    texts[18].style.display = "block";
    texts[19].style.display = "block";
})