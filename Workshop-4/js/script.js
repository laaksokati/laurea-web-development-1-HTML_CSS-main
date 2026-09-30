//Tehtävä 1
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function (){
    taskOneHeading.textContent = "Muokattu otsikko!";
});

//Tehtävä 2

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable"); 

animalButton.addEventListener("click", function (){
    animalTable.hidden = !animalTable.hidden;
});   

// Tehtävä 3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function (){
    const selectedAnimal = animalSelect.value;
    console.log("selectedAnimal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "img/tiger.png";
        animalImage.alt = "Tiikeri";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä.";
    }
});