const randomCuriositiesTaipan = document.getElementsByClassName("random-curiosities-taipan");

const randomCuriositiesHipopotamo = document.getElementsByClassName("random-curiosities-hipopotamo");

const randomCuriositiesAguaViva = document.getElementsByClassName("random-curiosities-agua-viva");

const randomCuriositiesMosquito = document.getElementsByClassName("random-curiosities-mosquito");

const randomCuriositiesCrocodilo = document.getElementsByClassName("random-curiosities-crocodilo");

const randomCuriositiesTubarao = document.getElementsByClassName("random-curiosities-tubarao");

const randomCuriositiesPolvo = document.getElementsByClassName("random-curiosities-polvo");

const randomCuriositiesRinoceronte = document.getElementsByClassName("random-curiosities-rinoceronte");

const randomCuriositiesTigre = document.getElementsByClassName("random-curiosities-tigre");

const randomCuriositiesEscorpiao = document.getElementsByClassName("random-curiosities-escorpiao");



const btnsRandomCuriosities = document.getElementsByClassName("btns-random-curiosities");



let curiosityTaipan;

let curiosityHipopotamo;

let curiosityAguaViva;

let curiosityMosquito;

let curiosityCrocodilo;

let curiosityTubarao;

let curiosityPolvo;

let curiosityRinoceronte;

let curiosityTigre;

let curiosityEscorpiao;



btnsRandomCuriosities[0].addEventListener("click", () => {
    curiosityTaipan = Math.floor(Math.random() * randomCuriositiesTaipan.length);

    if (curiosityTaipan === 0) {
        randomCuriositiesTaipan[0].style.display = "block";
        randomCuriositiesTaipan[1].style.display = "none";
        randomCuriositiesTaipan[2].style.display = "none";

    } else if (curiosityTaipan === 1) {
        randomCuriositiesTaipan[1].style.display = "block";
        randomCuriositiesTaipan[0].style.display = "none";
        randomCuriositiesTaipan[2].style.display = "none";

    } else if (curiosityTaipan === 2) {
        randomCuriositiesTaipan[2].style.display = "block";
        randomCuriositiesTaipan[0].style.display = "none";
        randomCuriositiesTaipan[1].style.display = "none";
    }
})

btnsRandomCuriosities[1].addEventListener("click", () => {
    curiosityHipopotamo = Math.floor(Math.random() * randomCuriositiesHipopotamo.length);

    if (curiosityHipopotamo === 0) {
        randomCuriositiesHipopotamo[0].style.display = "block";
        randomCuriositiesHipopotamo[1].style.display = "none";
        randomCuriositiesHipopotamo[2].style.display = "none";

    } else if (curiosityHipopotamo === 1) {
        randomCuriositiesHipopotamo[1].style.display = "block";
        randomCuriositiesHipopotamo[0].style.display = "none";
        randomCuriositiesHipopotamo[2].style.display = "none";

    } else if (curiosityHipopotamo === 2) {
        randomCuriositiesHipopotamo[2].style.display = "block";
        randomCuriositiesHipopotamo[0].style.display = "none";
        randomCuriositiesHipopotamo[1].style.display = "none";
    }
})

btnsRandomCuriosities[2].addEventListener("click", () => {
    curiosityAguaViva = Math.floor(Math.random() * randomCuriositiesAguaViva.length);

    if (curiosityAguaViva === 0) {
        randomCuriositiesAguaViva[0].style.display = "block";
        randomCuriositiesAguaViva[1].style.display = "none";
        randomCuriositiesAguaViva[2].style.display = "none";

    } else if (curiosityAguaViva === 1) {
        randomCuriositiesAguaViva[1].style.display = "block";
        randomCuriositiesAguaViva[0].style.display = "none";
        randomCuriositiesAguaViva[2].style.display = "none";

    } else if (curiosityAguaViva === 2) {
        randomCuriositiesAguaViva[2].style.display = "block";
        randomCuriositiesAguaViva[0].style.display = "none";
        randomCuriositiesAguaViva[1].style.display = "none";
    }
})

btnsRandomCuriosities[3].addEventListener("click", () => {
    curiosityMosquito = Math.floor(Math.random() * randomCuriositiesMosquito.length);

    if (curiosityMosquito === 0) {
        randomCuriositiesMosquito[0].style.display = "block";
        randomCuriositiesMosquito[1].style.display = "none";
        randomCuriositiesMosquito[2].style.display = "none";

    } else if (curiosityMosquito === 1) {
        randomCuriositiesMosquito[1].style.display = "block";
        randomCuriositiesMosquito[0].style.display = "none";
        randomCuriositiesMosquito[2].style.display = "none";

    } else if (curiosityMosquito === 2) {
        randomCuriositiesMosquito[2].style.display = "block";
        randomCuriositiesMosquito[0].style.display = "none";
        randomCuriositiesMosquito[1].style.display = "none";
    }
})

btnsRandomCuriosities[4].addEventListener("click", () => {
    curiosityCrocodilo = Math.floor(Math.random() * randomCuriositiesCrocodilo.length);

    if (curiosityCrocodilo === 0) {
        randomCuriositiesCrocodilo[0].style.display = "block";
        randomCuriositiesCrocodilo[1].style.display = "none";
        randomCuriositiesCrocodilo[2].style.display = "none";

    } else if (curiosityCrocodilo === 1) {
        randomCuriositiesCrocodilo[1].style.display = "block";
        randomCuriositiesCrocodilo[0].style.display = "none";
        randomCuriositiesCrocodilo[2].style.display = "none";

    } else if (curiosityCrocodilo === 2) {
        randomCuriositiesCrocodilo[2].style.display = "block";
        randomCuriositiesCrocodilo[0].style.display = "none";
        randomCuriositiesCrocodilo[1].style.display = "none";
    }
})

btnsRandomCuriosities[5].addEventListener("click", () => {
    curiosityTubarao = Math.floor(Math.random() * randomCuriositiesTubarao.length);

    if (curiosityTubarao === 0) {
        randomCuriositiesTubarao[0].style.display = "block";
        randomCuriositiesTubarao[1].style.display = "none";
        randomCuriositiesTubarao[2].style.display = "none";

    } else if (curiosityTubarao === 1) {
        randomCuriositiesTubarao[1].style.display = "block";
        randomCuriositiesTubarao[0].style.display = "none";
        randomCuriositiesTubarao[2].style.display = "none";

    } else if (curiosityTubarao === 2) {
        randomCuriositiesTubarao[2].style.display = "block";
        randomCuriositiesTubarao[0].style.display = "none";
        randomCuriositiesTubarao[1].style.display = "none";
    }
})

btnsRandomCuriosities[6].addEventListener("click", () => {
    curiosityPolvo = Math.floor(Math.random() * randomCuriositiesPolvo.length);

    if (curiosityPolvo === 0) {
        randomCuriositiesPolvo[0].style.display = "block";
        randomCuriositiesPolvo[1].style.display = "none";
        randomCuriositiesPolvo[2].style.display = "none";

    } else if (curiosityPolvo === 1) {
        randomCuriositiesPolvo[1].style.display = "block";
        randomCuriositiesPolvo[0].style.display = "none";
        randomCuriositiesPolvo[2].style.display = "none";

    } else if (curiosityPolvo === 2) {
        randomCuriositiesPolvo[2].style.display = "block";
        randomCuriositiesPolvo[0].style.display = "none";
        randomCuriositiesPolvo[1].style.display = "none";
    }
})

btnsRandomCuriosities[7].addEventListener("click", () => {
    curiosityRinoceronte = Math.floor(Math.random() * randomCuriositiesRinoceronte.length);

    if (curiosityRinoceronte === 0) {
        randomCuriositiesRinoceronte[0].style.display = "block";
        randomCuriositiesRinoceronte[1].style.display = "none";
        randomCuriositiesRinoceronte[2].style.display = "none";

    } else if (curiosityRinoceronte === 1) {
        randomCuriositiesRinoceronte[1].style.display = "block";
        randomCuriositiesRinoceronte[0].style.display = "none";
        randomCuriositiesRinoceronte[2].style.display = "none";

    } else if (curiosityRinoceronte === 2) {
        randomCuriositiesRinoceronte[2].style.display = "block";
        randomCuriositiesRinoceronte[0].style.display = "none";
        randomCuriositiesRinoceronte[1].style.display = "none";
    }
})

btnsRandomCuriosities[8].addEventListener("click", () => {
    curiosityTigre = Math.floor(Math.random() * randomCuriositiesTigre.length);

    if (curiosityTigre === 0) {
        randomCuriositiesTigre[0].style.display = "block";
        randomCuriositiesTigre[1].style.display = "none";
        randomCuriositiesTigre[2].style.display = "none";

    } else if (curiosityTigre === 1) {
        randomCuriositiesTigre[1].style.display = "block";
        randomCuriositiesTigre[0].style.display = "none";
        randomCuriositiesTigre[2].style.display = "none";

    } else if (curiosityTigre === 2) {
        randomCuriositiesTigre[2].style.display = "block";
        randomCuriositiesTigre[0].style.display = "none";
        randomCuriositiesTigre[1].style.display = "none";
    }
})

btnsRandomCuriosities[9].addEventListener("click", () => {
    curiosityEscorpiao = Math.floor(Math.random() * randomCuriositiesEscorpiao.length);

    if (curiosityEscorpiao === 0) {
        randomCuriositiesEscorpiao[0].style.display = "block";
        randomCuriositiesEscorpiao[1].style.display = "none";
        randomCuriositiesEscorpiao[2].style.display = "none";

    } else if (curiosityEscorpiao === 1) {
        randomCuriositiesEscorpiao[1].style.display = "block";
        randomCuriositiesEscorpiao[0].style.display = "none";
        randomCuriositiesEscorpiao[2].style.display = "none";

    } else if (curiosityEscorpiao === 2) {
        randomCuriositiesEscorpiao[2].style.display = "block";
        randomCuriositiesEscorpiao[0].style.display = "none";
        randomCuriositiesEscorpiao[1].style.display = "none";
    }
})