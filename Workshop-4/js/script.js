//Tehtävä 1
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function (){
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");

});

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Tiikerit ovat suuria petoeläimiä.";

});


// Tehtävä 2

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable"); 

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
});

// Tehtävä 2
const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Tiikerit ovat suuria petoeläimiä.";

const newAnimalImage = document.createElement("img");
newAnimalImage.src = "img/tiger.png";
newAnimalImage.alt = "Tiikeri";

animalContent.append(
    animalHeading,
    animalParagraph,
    newAnimalImage
);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
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
    else if (selectedAnimal === "elephant") {
    animalName.textContent = "Elefantti";
    animalImage.src = "img/elephant.png";
    animalImage.alt = "Elefantti";
    animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    }
    else if (selectedAnimal === "penguin") {
    animalName.textContent = "Pingviini";
    animalImage.src = "img/penguin.png";
    animalImage.alt = "Pingviini";
    animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä lintuja, jotka ovat taitavia uimareita.";
    }
    else if (selectedAnimal === "panda") {
    animalName.textContent = "Panda";
    animalImage.src = "img/panda.png";
    animalImage.alt = "Panda";
    animalDescription.textContent = "Pandat tunnetaan erityisesti bambun syömisestä.";
    }

});

animalImage.addEventListener("mouseenter", function () {
        animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
        animalImage.classList.remove("image-highlight");
});

// Tehtävä 4

const animalForm = document.querySelector("#animalForm");

const observationAnimal =
    document.querySelector("#observationAnimal");

const observationLocation =
    document.querySelector("#observationLocation");

const observationDate =
    document.querySelector("#observationDate");

const observationTableBody =
    document.querySelector("#observationTableBody");


animalForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const animal = observationAnimal.value;
    const location = observationLocation.value;
    const date = observationDate.value;

    if (!animal || !location || !date) {
        alert("Täytä kaikki kentät.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    animalCell.textContent = animal;
    locationCell.textContent = location;
    dateCell.textContent = date;

    newRow.append(animalCell, locationCell, dateCell);

    observationTableBody.append(newRow);
});
