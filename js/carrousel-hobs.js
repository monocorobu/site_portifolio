const text1_options = [
    "O mundo sem a arte da música é um mundo sem inspirações.",
    "Os Jogos estimulam a criatividade e ainda trazem momentos incríveis.",
    "Se conectar com a natureza é uma maneira de se conectar",
    "Um bom café é sempre importante em todas as jornadas!"
];
const text2_options = [
    "69 min. read",
    "",
    "Surf trip",
    "Aromas preferidos: chocolate, moka, caramelo"
];
const color_options = ["#09c400", "#c806bf", "#7FE0EB", "#b56704"];

const image_options = [
    "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "./imagens/surf-trip.jpg ",
    "https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function() {
    i = i + 1;    
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];

    currentOptionText2.dataset.nextText = text2_options[i];

    mainMenu.style.background = color_options[i];

    carousel.classList.add("anim-next");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-next");
    }, 650);
};

optionPrevious.onclick = function() {
    if (i === 0) {
        i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];

    currentOptionText2.dataset.previousText = text2_options[i];

    mainMenu.style.background = color_options[i];

    carousel.classList.add("anim-previous");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-previous");
    }, 650);
};