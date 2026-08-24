/* =========================================
   MOMENTUM
   Habit Tracker v0.2
========================================= */


/* =========================================
   HABIT DATABASE
========================================= */

const habits = [

    /* DAILY */

    {
        id: "sleep",
        frequency: "daily",
        name: "Sonno",
        icon: "😴",
        type: "number",
        target: 7,
        unit: "h",
        description: "Obiettivo: 7–8 ore"
    },

    {
        id: "steps",
        frequency: "daily",
        name: "Passi",
        icon: "🚶",
        type: "number",
        target: 8000,
        unit: "passi",
        description: "Obiettivo: almeno 8.000"
    },

    {
        id: "nutrition",
        frequency: "daily",
        name: "Alimentazione",
        icon: "🥗",
        type: "boolean",
        description: "Giornata complessivamente equilibrata"
    },

    {
        id: "supplements",
        frequency: "daily",
        name: "Integratori",
        icon: "💊",
        type: "boolean",
        description: "Assunti quelli previsti oggi"
    },

    {
        id: "priorities",
        frequency: "daily",
        name: "3 priorità",
        icon: "🎯",
        type: "boolean",
        description: "Definisci le 3 priorità della giornata"
    },

    {
        id: "reading",
        frequency: "daily",
        name: "Lettura / studio",
        icon: "📚",
        type: "number",
        target: 15,
        unit: "min",
        description: "Obiettivo: 10–20 minuti"
    },

    {
        id: "tidy",
        frequency: "daily",
        name: "Ordine",
        icon: "🧹",
        type: "number",
        target: 5,
        unit: "min",
        description: "5–10 minuti di riordino"
    },


    /* WEEKLY */

    {
        id: "workouts",
        frequency: "weekly",
        name: "Allenamenti",
        icon: "🏋️",
        type: "counter",
        target: 3,
        description: "Obiettivo: 3–4 allenamenti"
    },

    {
        id: "weekly_reset",
        frequency: "weekly",
        name: "Weekly Reset",
        icon: "🗓️",
        type: "boolean",
        description: "Review + calendario + obiettivi"
    },


    /* MONTHLY */

    {
        id: "money_review",
        frequency: "monthly",
        name: "Money Review",
        icon: "💰",
        type: "boolean",
        description: "Spese, risparmio, investimenti e abbonamenti"
    },

    {
        id: "monthly_reset",
        frequency: "monthly",
        name: "Monthly Reset",
        icon: "🧭",
        type: "boolean",
        description: "Salute, obiettivi e vita personale"
    }

];


/* =========================================
   DATE KEYS
========================================= */

const now = new Date();


function formatDateKey(date) {

    const year = date.getFullYear();

    const month =
        String(date.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(date.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;

}


function getWeekKey(date) {

    const copy = new Date(date);

    const day =
        copy.getDay() === 0
            ? 7
            : copy.getDay();

    copy.setDate(
        copy.getDate() - day + 1
    );

    return formatDateKey(copy);

}


function getMonthKey(date) {

    const year = date.getFullYear();

    const month =
        String(date.getMonth() + 1)
            .padStart(2, "0");

    return `${year}-${month}`;

}


const todayKey =
    formatDateKey(now);

const weekKey =
    getWeekKey(now);

const monthKey =
    getMonthKey(now);


/* =========================================
   DATE DISPLAY
========================================= */

document
    .getElementById("current-date")
    .textContent =
    now.toLocaleDateString(
        "it-IT",
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    );


/* =========================================
   STORAGE
========================================= */

const STORAGE_KEY =
    "momentum_v02";


let data =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || {
        daily: {},
        weekly: {},
        monthly: {}
    };


if (!data.daily) {
    data.daily = {};
}

if (!data.weekly) {
    data.weekly = {};
}

if (!data.monthly) {
    data.monthly = {};
}


if (!data.daily[todayKey]) {
    data.daily[todayKey] = {};
}


if (!data.weekly[weekKey]) {
    data.weekly[weekKey] = {};
}


if (!data.monthly[monthKey]) {
    data.monthly[monthKey] = {};
}


function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* =========================================
   HELPERS
========================================= */

function getStorageSection(frequency) {

    if (frequency === "daily") {
        return data.daily[todayKey];
    }

    if (frequency === "weekly") {
        return data.weekly[weekKey];
    }

    return data.monthly[monthKey];

}


function getHabitValue(habit) {

    const section =
        getStorageSection(
            habit.frequency
        );


    if (
        section[habit.id] === undefined
    ) {

        if (
            habit.type === "number" ||
            habit.type === "counter"
        ) {

            return 0;

        }

        return false;

    }


    return section[habit.id];

}


function setHabitValue(
    habit,
    value
) {

    const section =
        getStorageSection(
            habit.frequency
        );

    section[habit.id] =
        value;

    saveData();

    updateScores();

}


function isHabitCompleted(habit) {

    const value =
        getHabitValue(habit);


    if (habit.type === "boolean") {

        return value === true;

    }


    if (
        habit.type === "number" ||
        habit.type === "counter"
    ) {

        return Number(value) >= habit.target;

    }


    return false;

}


/* =========================================
   CREATE HABIT CARD
========================================= */

function createHabitCard(habit) {

    const card =
        document.createElement("div");

    card.className =
        "habit-card";


    const icon =
        document.createElement("div");

    icon.className =
        "habit-icon";

    icon.textContent =
        habit.icon;


    const info =
        document.createElement("div");

    info.className =
        "habit-info";


    const name =
        document.createElement("div");

    name.className =
        "habit-name";

    name.textContent =
        habit.name;


    const description =
        document.createElement("div");

    description.className =
        "habit-description";

    description.textContent =
        habit.description;


    info.appendChild(name);

    info.appendChild(
        description
    );


    card.appendChild(icon);

    card.appendChild(info);


    /* BOOLEAN */

    if (habit.type === "boolean") {

        const button =
            document.createElement("button");

        button.className =
            "check-button";

        button.type =
            "button";

        button.textContent =
            "✓";


        function refresh() {

            const completed =
                isHabitCompleted(habit);

            button.classList.toggle(
                "completed",
                completed
            );

            card.classList.toggle(
                "completed",
                completed
            );

        }


        button.addEventListener(
            "click",
            () => {

                const current =
                    getHabitValue(habit);

                setHabitValue(
                    habit,
                    !current
                );

                refresh();

            }
        );


        card.appendChild(button);

        refresh();

    }


    /* NUMBER */

    if (habit.type === "number") {

        const control =
            document.createElement("div");

        control.className =
            "number-control";


        const input =
            document.createElement("input");

        input.type =
            "number";

        input.min =
            "0";

        input.step =
            habit.id === "sleep"
                ? "0.5"
                : "1";

        input.className =
            "number-input";

        input.value =
            getHabitValue(habit);


        const unit =
            document.createElement("span");

        unit.className =
            "unit-label";

        unit.textContent =
            habit.unit;


        function refresh() {

            card.classList.toggle(
                "completed",
                isHabitCompleted(habit)
            );

        }


        input.addEventListener(
            "change",
            () => {

                let value =
                    Number(input.value);

                if (
                    Number.isNaN(value) ||
                    value < 0
                ) {

                    value = 0;

                }


                setHabitValue(
                    habit,
                    value
                );

                input.value =
                    value;

                refresh();

            }
        );


        control.appendChild(input);

        control.appendChild(unit);

        card.appendChild(control);

        refresh();

    }


    /* COUNTER */

    if (habit.type === "counter") {

        const control =
            document.createElement("div");

        control.className =
            "counter-control";


        const minus =
            document.createElement("button");

        minus.type =
            "button";

        minus.className =
            "counter-button";

        minus.textContent =
            "−";


        const value =
            document.createElement("span");

        value.className =
            "counter-value";


        const plus =
            document.createElement("button");

        plus.type =
            "button";

        plus.className =
            "counter-button";

        plus.textContent =
            "+";


        function refresh() {

            value.textContent =
                `${getHabitValue(habit)} / 4`;

            card.classList.toggle(
                "completed",
                isHabitCompleted(habit)
            );

        }


        minus.addEventListener(
            "click",
            () => {

                let current =
                    Number(
                        getHabitValue(habit)
                    );

                current =
                    Math.max(
                        0,
                        current - 1
                    );

                setHabitValue(
                    habit,
                    current
                );

                refresh();

            }
        );


        plus.addEventListener(
            "click",
            () => {

                let current =
                    Number(
                        getHabitValue(habit)
                    );

                current =
                    Math.min(
                        7,
                        current + 1
                    );

                setHabitValue(
                    habit,
                    current
                );

                refresh();

            }
        );


        control.appendChild(minus);

        control.appendChild(value);

        control.appendChild(plus);

        card.appendChild(control);

        refresh();

    }


    return card;

}


/* =========================================
   RENDER
========================================= */

function renderHabits() {

    const dailyList =
        document.getElementById(
            "daily-list"
        );

    const weeklyList =
        document.getElementById(
            "weekly-list"
        );

    const monthlyList =
        document.getElementById(
            "monthly-list"
        );


    habits.forEach(habit => {

        const card =
            createHabitCard(habit);


        if (
            habit.frequency === "daily"
        ) {

            dailyList.appendChild(card);

        }


        if (
            habit.frequency === "weekly"
        ) {

            weeklyList.appendChild(card);

        }


        if (
            habit.frequency === "monthly"
        ) {

            monthlyList.appendChild(card);

        }

    });

}


/* =========================================
   SCORES
========================================= */

function calculateScore(
    frequency
) {

    const filtered =
        habits.filter(
            habit =>
                habit.frequency ===
                frequency
        );


    const completed =
        filtered.filter(
            isHabitCompleted
        ).length;


    const percentage =
        filtered.length === 0
            ? 0
            : Math.round(
                completed /
                filtered.length *
                100
            );


    return {
        completed,
        total: filtered.length,
        percentage
    };

}


function updateScores() {

    const daily =
        calculateScore("daily");

    const weekly =
        calculateScore("weekly");

    const monthly =
        calculateScore("monthly");


    document
        .getElementById(
            "daily-score"
        )
        .textContent =
        `${daily.percentage}%`;


    document
        .getElementById(
            "daily-counter"
        )
        .textContent =
        `${daily.completed} / ${daily.total}`;


    document
        .getElementById(
            "daily-progress"
        )
        .style.width =
        `${daily.percentage}%`;


    document
        .getElementById(
            "weekly-score"
        )
        .textContent =
        `${weekly.completed} / ${weekly.total}`;


    document
        .getElementById(
            "monthly-score"
        )
        .textContent =
        `${monthly.completed} / ${monthly.total}`;


    const message =
        document.getElementById(
            "daily-message"
        );


    if (daily.percentage === 100) {

        message.textContent =
            "Giornata completata.";

    }

    else if (
        daily.percentage >= 70
    ) {

        message.textContent =
            "Ottimo ritmo.";

    }

    else if (
        daily.percentage >= 40
    ) {

        message.textContent =
            "Continua così.";

    }

    else if (
        daily.percentage > 0
    ) {

        message.textContent =
            "Momentum sta partendo.";

    }

    else {

        message.textContent =
            "Iniziamo.";

    }

}


/* =========================================
   START
========================================= */

renderHabits();

updateScores();

saveData();