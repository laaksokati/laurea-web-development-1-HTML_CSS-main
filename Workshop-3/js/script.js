const animalButton = document.getElementById("animalButton");

animalButton.addEventListener("click", function () {
    alert("Capybaras are the largest rodents in the world!");
});

const animalTitle = document.querySelector("#animalTitle");

animalTitle.addEventListener("click", function () {
    animalTitle.textContent = "Capybaras are social animals!";
    animalTitle.style.color = "brown";
});

const tableButton = document.getElementById("tableButton");
const table = document.getElementById("example");

tableButton.addEventListener('click', function() { 
    if (table.style.display === 'none') {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';  
    }
});
    
