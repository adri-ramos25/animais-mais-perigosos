const texts = document.getElementsByClassName("texts");

const boxImgandBtns = document.getElementsByClassName("box-imgs-and-buttons");

const btnExpandPhoto = document.getElementsByClassName("btn-expand-photo");

const btnReducePhoto = document.getElementsByClassName("btn-reduce-photo");


// Botoes que ampliam o tamanho das imagens dos animais
btnExpandPhoto[0].addEventListener("click", () => {
    boxImgandBtns[0].style.flexDirection = "column";
    boxImgandBtns[0].style.marginLeft = "0";

    texts[0].style.display = "none";
    texts[1].style.display = "none";

    btnExpandPhoto[0].style.display = "none";
    btnReducePhoto[0].style.display = "block";

    document.getElementById("photo-taipan").style.width = "20em";
})

btnExpandPhoto[1].addEventListener("click", () => {
    boxImgandBtns[1].style.flexDirection = "column";
    boxImgandBtns[1].style.marginLeft = "0";

    texts[2].style.display = "none";
    texts[3].style.display = "none";

    btnExpandPhoto[1].style.display = "none";
    btnReducePhoto[1].style.display = "block";

    document.getElementById("photo-hipopotamo").style.width = "20em";
})

btnExpandPhoto[2].addEventListener("click", () => {
    boxImgandBtns[2].style.flexDirection = "column";
    boxImgandBtns[2].style.marginLeft = "0";

    texts[4].style.display = "none";
    texts[5].style.display = "none";

    btnExpandPhoto[2].style.display = "none";
    btnReducePhoto[2].style.display = "block";

    document.getElementById("photo-agua-viva").style.width = "20em";
})

btnExpandPhoto[3].addEventListener("click", () => {
    boxImgandBtns[3].style.flexDirection = "column";
    boxImgandBtns[3].style.marginLeft = "0";

    texts[6].style.display = "none";
    texts[7].style.display = "none";

    btnExpandPhoto[3].style.display = "none";
    btnReducePhoto[3].style.display = "block";

    document.getElementById("photo-mosquito").style.width = "20em";
})

btnExpandPhoto[4].addEventListener("click", () => {
    boxImgandBtns[4].style.flexDirection = "column";
    boxImgandBtns[4].style.marginLeft = "0";

    texts[8].style.display = "none";
    texts[9].style.display = "none";

    btnExpandPhoto[4].style.display = "none";
    btnReducePhoto[4].style.display = "block";

    document.getElementById("photo-crocodilo").style.width = "20em";
})

btnExpandPhoto[5].addEventListener("click", () => {
    boxImgandBtns[5].style.flexDirection = "column";
    boxImgandBtns[5].style.marginLeft = "0";

    texts[10].style.display = "none";
    texts[11].style.display = "none";

    btnExpandPhoto[5].style.display = "none";
    btnReducePhoto[5].style.display = "block";

    document.getElementById("photo-tubarao").style.width = "20em";
})

btnExpandPhoto[6].addEventListener("click", () => {
    boxImgandBtns[6].style.flexDirection = "column";
    boxImgandBtns[6].style.marginLeft = "0";

    texts[12].style.display = "none";
    texts[13].style.display = "none";

    btnExpandPhoto[6].style.display = "none";
    btnReducePhoto[6].style.display = "block";

    document.getElementById("photo-polvo").style.width = "20em";
})

btnExpandPhoto[7].addEventListener("click", () => {
    boxImgandBtns[7].style.flexDirection = "column";
    boxImgandBtns[7].style.marginLeft = "0";

    texts[14].style.display = "none";
    texts[15].style.display = "none";

    btnExpandPhoto[7].style.display = "none";
    btnReducePhoto[7].style.display = "block";

    document.getElementById("photo-rinoceronte").style.width = "20em";
})

btnExpandPhoto[8].addEventListener("click", () => {
    boxImgandBtns[8].style.flexDirection = "column";
    boxImgandBtns[8].style.marginLeft = "0";

    texts[16].style.display = "none";
    texts[17].style.display = "none";

    btnExpandPhoto[8].style.display = "none";
    btnReducePhoto[8].style.display = "block";

    document.getElementById("photo-tigre").style.width = "20em";
})

btnExpandPhoto[9].addEventListener("click", () => {
    boxImgandBtns[9].style.flexDirection = "column";
    boxImgandBtns[9].style.marginLeft = "0";

    texts[18].style.display = "none";
    texts[19].style.display = "none";

    btnExpandPhoto[9].style.display = "none";
    btnReducePhoto[9].style.display = "block";

    document.getElementById("photo-escorpiao").style.width = "20em";
})


// Botoes que reduzem o tamanho das imagens dos animais
btnReducePhoto[0].addEventListener("click", () => {
    boxImgandBtns[0].style.flexDirection = "row";
    boxImgandBtns[0].style.marginLeft = "20px";

    document.getElementById("photo-taipan").style.width = "8em";

    btnReducePhoto[0].style.display = "none";
    btnExpandPhoto[0].style.display = "block";

    texts[0].style.display = "block";
    texts[1].style.display = "block";
})

btnReducePhoto[1].addEventListener("click", () => {
    boxImgandBtns[1].style.flexDirection = "row";
    boxImgandBtns[1].style.marginLeft = "20px";

    document.getElementById("photo-hipopotamo").style.width = "8em";

    btnReducePhoto[1].style.display = "none";
    btnExpandPhoto[1].style.display = "block";

    texts[2].style.display = "block";
    texts[3].style.display = "block";
})

btnReducePhoto[2].addEventListener("click", () => {
    boxImgandBtns[2].style.flexDirection = "row";
    boxImgandBtns[2].style.marginLeft = "20px";

    document.getElementById("photo-agua-viva").style.width = "8em";

    btnReducePhoto[2].style.display = "none";
    btnExpandPhoto[2].style.display = "block";

    texts[4].style.display = "block";
    texts[5].style.display = "block";
})

btnReducePhoto[3].addEventListener("click", () => {
    boxImgandBtns[3].style.flexDirection = "row";
    boxImgandBtns[3].style.marginLeft = "20px";

    document.getElementById("photo-mosquito").style.width = "8em";

    btnReducePhoto[3].style.display = "none";
    btnExpandPhoto[3].style.display = "block";

    texts[6].style.display = "block";
    texts[7].style.display = "block";
})

btnReducePhoto[4].addEventListener("click", () => {
    boxImgandBtns[4].style.flexDirection = "row";
    boxImgandBtns[4].style.marginLeft = "20px";

    document.getElementById("photo-crocodilo").style.width = "8em";

    btnReducePhoto[4].style.display = "none";
    btnExpandPhoto[4].style.display = "block";

    texts[8].style.display = "block";
    texts[9].style.display = "block";
})

btnReducePhoto[5].addEventListener("click", () => {
    boxImgandBtns[5].style.flexDirection = "row";
    boxImgandBtns[5].style.marginLeft = "20px";

    document.getElementById("photo-tubarao").style.width = "8em";

    btnReducePhoto[5].style.display = "none";
    btnExpandPhoto[5].style.display = "block";

    texts[10].style.display = "block";
    texts[11].style.display = "block";
})

btnReducePhoto[6].addEventListener("click", () => {
    boxImgandBtns[6].style.flexDirection = "row";
    boxImgandBtns[6].style.marginLeft = "20px";

    document.getElementById("photo-polvo").style.width = "8em";

    btnReducePhoto[6].style.display = "none";
    btnExpandPhoto[6].style.display = "block";

    texts[12].style.display = "block";
    texts[13].style.display = "block";
})

btnReducePhoto[7].addEventListener("click", () => {
    boxImgandBtns[7].style.flexDirection = "row";
    boxImgandBtns[7].style.marginLeft = "20px";

    document.getElementById("photo-rinoceronte").style.width = "8em";

    btnReducePhoto[7].style.display = "none";
    btnExpandPhoto[7].style.display = "block";

    texts[14].style.display = "block";
    texts[15].style.display = "block";
})

btnReducePhoto[8].addEventListener("click", () => {
    boxImgandBtns[8].style.flexDirection = "row";
    boxImgandBtns[8].style.marginLeft = "20px";

    document.getElementById("photo-tigre").style.width = "8em";

    btnReducePhoto[8].style.display = "none";
    btnExpandPhoto[8].style.display = "block";

    texts[16].style.display = "block";
    texts[17].style.display = "block";
})

btnReducePhoto[9].addEventListener("click", () => {
    boxImgandBtns[9].style.flexDirection = "row";
    boxImgandBtns[9].style.marginLeft = "20px";

    document.getElementById("photo-escorpiao").style.width = "8em";

    btnReducePhoto[9].style.display = "none";
    btnExpandPhoto[9].style.display = "block";
    
    texts[18].style.display = "block";
    texts[19].style.display = "block";
})