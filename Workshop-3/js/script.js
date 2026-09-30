function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const table = `
        <table class="display">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = table;
}

const exercise1 = document.querySelector("h2");

const exercise2 = document.querySelectorAll("h2")[1];
exercise2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

exercise1.addEventListener("click", function() {
    exercise1.style.color = "red";
    exercise1.innerHTML = "Bye bye mouse!";
});

const feedback = document.querySelector("#feedback");
const charcount = document.querySelector("#charcount");
const status = document.querySelector("#status");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
    status.innerHTML = "Kirjoita palautteesi!";
    feedback.style.backgroundColor = "#ffffcc";
});

feedback.addEventListener("blur", function() {
    status.innerHTML = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function() {
    const text = feedback.value;

    charcount.innerHTML = `${text.length}/200`;
    preview.innerHTML = text;
});

const form = document.querySelector("#feedbackForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = feedback.value;

    if (text.length < 10 || text.length > 200) {
        status.innerHTML = "Palaute pitää olla 10–200 merkkiä pitkä.";
        status.style.color = "red";
        return;
    }

    feedback.value = "";
    preview.innerHTML = "";
    charcount.innerHTML = "0/200";

    status.innerHTML = "Thank you for your feedback!";
    status.style.color = "green";
});

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function(event) {
    console.log(event);

    keyinfo.innerHTML = `
        Näppäin: ${event.key}<br>
        Koodi: ${event.code}
    `;

    keybox.innerHTML = event.key;
});
