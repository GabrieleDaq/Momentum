const habitButtons = document.querySelectorAll(".habit-check");

const progressFill = document.getElementById("progress-fill");
const completedCounter = document.getElementById("completed-counter");
const scoreNumber = document.getElementById("score-number");

const cigaretteCount = document.getElementById("cigarette-count");

const plusCigarette = document.getElementById("plus-cigarette");
const minusCigarette = document.getElementById("minus-cigarette");

let cigarettes = 0;


/* DATA */

const today = new Date();

document.getElementById("current-date").textContent =
    today.toLocaleDateString(
        "it-IT",
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    );


/* HABITS */

habitButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("completed");

        updateProgress();

    });

});


function updateProgress() {

    const total = habitButtons.length;

    const completed =
        document.querySelectorAll(".habit-check.completed").length;

    const percentage =
        Math.round((completed / total) * 100);

    progressFill.style.width =
        percentage + "%";

    completedCounter.textContent =
        `${completed} / ${total}`;

    scoreNumber.textContent =
        percentage + "%";

}


/* SIGARETTE */

plusCigarette.addEventListener("click", () => {

    cigarettes++;

    cigaretteCount.textContent = cigarettes;

});


minusCigarette.addEventListener("click", () => {

    if (cigarettes > 0) {

        cigarettes--;

        cigaretteCount.textContent = cigarettes;

    }

});