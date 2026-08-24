/* =========================================
   MOMENTUM
   Habit Tracker v0.3
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
        displayTarget: 4,
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
   DATE
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


function parseDateKey(key) {

    const parts =
        key.split("-")
            .map(Number);

    return new Date(
        parts[0],
        parts[1] - 1,
        parts[2]
    );
}


function getWeekKey(date) {

    const copy =
        new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        );

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

    const year =
        date.getFullYear();

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
   STORAGE
========================================= */

/*
IMPORTANTE:
manteniamo momentum_v02
così i dati della versione precedente
rimangono compatibili.
*/

const STORAGE_KEY =
    "momentum_v02";


let data;

try {

    data =
        JSON.parse(
            localStorage.getItem(
                STORAGE_KEY
            )
        );

}
catch {

    data = null;

}


if (!data) {

    data = {
        daily: {},
        weekly: {},
        monthly: {}
    };

}


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
   HABIT HELPERS
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


function defaultValueForHabit(habit) {

    if (
        habit.type === "number" ||
        habit.type === "counter"
    ) {

        return 0;

    }

    return false;
}


function getHabitValue(habit) {

    const section =
        getStorageSection(
            habit.frequency
        );


    if (
        section[habit.id] === undefined
    ) {

        return defaultValueForHabit(
            habit
        );

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

    renderStats();
}


function isCompletedFromValue(
    habit,
    value
) {

    if (habit.type === "boolean") {

        return value === true;

    }


    if (
        habit.type === "number" ||
        habit.type === "counter"
    ) {

        return Number(value) >=
            habit.target;

    }


    return false;
}


function isHabitCompleted(habit) {

    return isCompletedFromValue(
        habit,
        getHabitValue(habit)
    );
}


/* =========================================
   TODAY HABIT CARDS
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
            document.createElement(
                "button"
            );

        button.type =
            "button";

        button.className =
            "check-button";

        button.textContent =
            "✓";


        function refresh() {

            const completed =
                isHabitCompleted(
                    habit
                );

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
                    getHabitValue(
                        habit
                    );

                setHabitValue(
                    habit,
                    !current
                );

                refresh();

                renderCalendar();
            }
        );


        card.appendChild(
            button
        );

        refresh();
    }



    /* NUMBER */

    if (habit.type === "number") {

        const control =
            document.createElement(
                "div"
            );

        control.className =
            "number-control";


        const input =
            document.createElement(
                "input"
            );

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
            getHabitValue(
                habit
            );


        const unit =
            document.createElement(
                "span"
            );

        unit.className =
            "unit-label";

        unit.textContent =
            habit.unit;


        function refresh() {

            card.classList.toggle(
                "completed",
                isHabitCompleted(
                    habit
                )
            );
        }


        input.addEventListener(
            "input",
            () => {

                let value =
                    Number(
                        input.value
                    );

                if (
                    !Number.isFinite(value) ||
                    value < 0
                ) {

                    value = 0;

                }


                setHabitValue(
                    habit,
                    value
                );

                refresh();

                renderCalendar();
            }
        );


        control.appendChild(
            input
        );

        control.appendChild(
            unit
        );

        card.appendChild(
            control
        );

        refresh();
    }



    /* COUNTER */

    if (habit.type === "counter") {

        const control =
            document.createElement(
                "div"
            );

        control.className =
            "counter-control";


        const minus =
            document.createElement(
                "button"
            );

        minus.type =
            "button";

        minus.className =
            "counter-button";

        minus.textContent =
            "−";


        const value =
            document.createElement(
                "span"
            );

        value.className =
            "counter-value";


        const plus =
            document.createElement(
                "button"
            );

        plus.type =
            "button";

        plus.className =
            "counter-button";

        plus.textContent =
            "+";


        function refresh() {

            const current =
                Number(
                    getHabitValue(
                        habit
                    )
                );

            value.textContent =
                `${current} / ${
                    habit.displayTarget ||
                    habit.target
                }`;

            card.classList.toggle(
                "completed",
                isHabitCompleted(
                    habit
                )
            );
        }


        minus.addEventListener(
            "click",
            () => {

                const current =
                    Number(
                        getHabitValue(
                            habit
                        )
                    );

                const next =
                    Math.max(
                        0,
                        current - 1
                    );

                setHabitValue(
                    habit,
                    next
                );

                refresh();
            }
        );


        plus.addEventListener(
            "click",
            () => {

                const current =
                    Number(
                        getHabitValue(
                            habit
                        )
                    );

                const next =
                    Math.min(
                        7,
                        current + 1
                    );

                setHabitValue(
                    habit,
                    next
                );

                refresh();
            }
        );


        control.appendChild(
            minus
        );

        control.appendChild(
            value
        );

        control.appendChild(
            plus
        );

        card.appendChild(
            control
        );

        refresh();
    }


    return card;
}


/* =========================================
   RENDER TODAY
========================================= */

function renderTodayHabits() {

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


    dailyList.innerHTML = "";
    weeklyList.innerHTML = "";
    monthlyList.innerHTML = "";


    habits.forEach(
        habit => {

            const card =
                createHabitCard(
                    habit
                );


            if (
                habit.frequency ===
                "daily"
            ) {

                dailyList.appendChild(
                    card
                );
            }


            if (
                habit.frequency ===
                "weekly"
            ) {

                weeklyList.appendChild(
                    card
                );
            }


            if (
                habit.frequency ===
                "monthly"
            ) {

                monthlyList.appendChild(
                    card
                );
            }

        }
    );
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
        total:
            filtered.length,
        percentage
    };
}


function updateScores() {

    const daily =
        calculateScore(
            "daily"
        );

    const weekly =
        calculateScore(
            "weekly"
        );

    const monthly =
        calculateScore(
            "monthly"
        );


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


    if (
        daily.percentage === 100
    ) {

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
   HISTORICAL DAILY SCORE
========================================= */

const dailyHabits =
    habits.filter(
        habit =>
            habit.frequency ===
            "daily"
    );


function hasTrackedData(dateKey) {

    const dayData =
        data.daily[dateKey];

    return Boolean(
        dayData &&
        Object.keys(dayData).length > 0
    );
}


function getHistoricalHabitValue(
    habit,
    dateKey
) {

    const dayData =
        data.daily[dateKey] || {};

    if (
        dayData[habit.id] ===
        undefined
    ) {

        return defaultValueForHabit(
            habit
        );
    }

    return dayData[habit.id];
}


function calculateDailyScoreForKey(
    dateKey
) {

    if (
        !hasTrackedData(
            dateKey
        )
    ) {

        return null;
    }


    const completed =
        dailyHabits.filter(
            habit => {

                const value =
                    getHistoricalHabitValue(
                        habit,
                        dateKey
                    );

                return isCompletedFromValue(
                    habit,
                    value
                );
            }
        ).length;


    return Math.round(
        completed /
        dailyHabits.length *
        100
    );
}


/* =========================================
   NAVIGATION
========================================= */

const pages =
    document.querySelectorAll(
        ".page"
    );

const navButtons =
    document.querySelectorAll(
        ".nav-button"
    );

const pageTitle =
    document.getElementById(
        "page-title"
    );

const pageSubtitle =
    document.getElementById(
        "page-subtitle"
    );

const headerScore =
    document.getElementById(
        "header-score"
    );


function todayLabel() {

    return now.toLocaleDateString(
        "it-IT",
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    );
}


function showPage(pageName) {

    pages.forEach(
        page => {

            page.classList.toggle(
                "active",
                page.id ===
                `page-${pageName}`
            );

        }
    );


    navButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.page ===
                pageName
            );

        }
    );


    if (pageName === "today") {

        pageTitle.textContent =
            "Oggi";

        pageSubtitle.textContent =
            todayLabel();

        headerScore.hidden =
            false;

    }


    if (pageName === "calendar") {

        pageTitle.textContent =
            "Calendario";

        pageSubtitle.textContent =
            "Il tuo storico";

        headerScore.hidden =
            true;

        renderCalendar();
    }


    if (pageName === "habits") {

        pageTitle.textContent =
            "Habits";

        pageSubtitle.textContent =
            `${habits.length} abitudini attive`;

        headerScore.hidden =
            true;

        renderHabitLibrary();
    }


    if (pageName === "stats") {

        pageTitle.textContent =
            "Stats";

        pageSubtitle.textContent =
            "I tuoi progressi";

        headerScore.hidden =
            true;

        renderStats();
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


navButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );
            }
        );

    }
);


/* =========================================
   CALENDAR
========================================= */

let calendarCursor =
    new Date(
        now.getFullYear(),
        now.getMonth(),
        1
    );


let selectedCalendarKey =
    todayKey;


const calendarDays =
    document.getElementById(
        "calendar-days"
    );

const calendarMonthTitle =
    document.getElementById(
        "calendar-month-title"
    );


function renderCalendar() {

    calendarDays.innerHTML =
        "";


    const year =
        calendarCursor
            .getFullYear();

    const month =
        calendarCursor
            .getMonth();


    calendarMonthTitle.textContent =
        calendarCursor
            .toLocaleDateString(
                "it-IT",
                {
                    month: "long",
                    year: "numeric"
                }
            );


    const firstDay =
        new Date(
            year,
            month,
            1
        );


    const mondayOffset =
        (
            firstDay.getDay() +
            6
        ) % 7;


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        )
        .getDate();


    for (
        let i = 0;
        i < mondayOffset;
        i++
    ) {

        const blank =
            document.createElement(
                "div"
            );

        blank.className =
            "calendar-blank";

        calendarDays.appendChild(
            blank
        );
    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const date =
            new Date(
                year,
                month,
                day
            );

        const dateKey =
            formatDateKey(
                date
            );


        const button =
            document.createElement(
                "button"
            );

        button.type =
            "button";

        button.className =
            "calendar-day";


        const dayNumber =
            document.createElement(
                "span"
            );

        dayNumber.className =
            "calendar-day-number";

        dayNumber.textContent =
            day;


        const scoreLabel =
            document.createElement(
                "span"
            );

        scoreLabel.className =
            "calendar-day-score";


        const score =
            calculateDailyScoreForKey(
                dateKey
            );


        if (score !== null) {

            button.classList.add(
                "has-data"
            );

            scoreLabel.textContent =
                `${score}%`;


            if (score >= 100) {

                button.classList.add(
                    "perfect"
                );

            }

            else if (score >= 80) {

                button.classList.add(
                    "great"
                );

            }

            else if (score >= 50) {

                button.classList.add(
                    "good"
                );
            }
        }


        if (
            dateKey === todayKey
        ) {

            button.classList.add(
                "today"
            );
        }


        if (
            dateKey ===
            selectedCalendarKey
        ) {

            button.classList.add(
                "selected"
            );
        }


        button.appendChild(
            dayNumber
        );

        button.appendChild(
            scoreLabel
        );


        button.addEventListener(
            "click",
            () => {

                selectedCalendarKey =
                    dateKey;

                renderCalendar();

                renderSelectedDate();
            }
        );


        calendarDays.appendChild(
            button
        );
    }


    renderSelectedDate();
}


function moveCalendarMonth(
    amount
) {

    calendarCursor =
        new Date(
            calendarCursor
                .getFullYear(),
            calendarCursor
                .getMonth() +
                amount,
            1
        );


    const isCurrentMonth =
        calendarCursor
            .getFullYear() ===
            now.getFullYear()
        &&
        calendarCursor
            .getMonth() ===
            now.getMonth();


    if (isCurrentMonth) {

        selectedCalendarKey =
            todayKey;

    }

    else {

        selectedCalendarKey =
            formatDateKey(
                calendarCursor
            );
    }


    renderCalendar();
}


document
    .getElementById(
        "previous-month"
    )
    .addEventListener(
        "click",
        () => {

            moveCalendarMonth(
                -1
            );
        }
    );


document
    .getElementById(
        "next-month"
    )
    .addEventListener(
        "click",
        () => {

            moveCalendarMonth(
                1
            );
        }
    );


function formatHistoryValue(
    habit,
    value
) {

    if (habit.type === "boolean") {

        return value
            ? "Fatto ✓"
            : "Non fatto";
    }


    return `${value} ${habit.unit}`;
}


function renderSelectedDate() {

    const title =
        document.getElementById(
            "selected-date-title"
        );

    const scoreElement =
        document.getElementById(
            "selected-date-score"
        );

    const details =
        document.getElementById(
            "selected-date-details"
        );


    const date =
        parseDateKey(
            selectedCalendarKey
        );


    title.textContent =
        date.toLocaleDateString(
            "it-IT",
            {
                day: "numeric",
                month: "long"
            }
        );


    details.innerHTML =
        "";


    if (
        !hasTrackedData(
            selectedCalendarKey
        )
    ) {

        scoreElement.textContent =
            "—";

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "empty-state";

        empty.textContent =
            "Nessun dato registrato per questa giornata.";

        details.appendChild(
            empty
        );

        return;
    }


    const score =
        calculateDailyScoreForKey(
            selectedCalendarKey
        );


    scoreElement.textContent =
        `${score}%`;


    dailyHabits.forEach(
        habit => {

            const value =
                getHistoricalHabitValue(
                    habit,
                    selectedCalendarKey
                );


            const completed =
                isCompletedFromValue(
                    habit,
                    value
                );


            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "history-row";


            const icon =
                document.createElement(
                    "div"
                );

            icon.className =
                "history-icon";

            icon.textContent =
                habit.icon;


            const name =
                document.createElement(
                    "div"
                );

            name.className =
                "history-name";

            name.textContent =
                habit.name;


            const result =
                document.createElement(
                    "div"
                );

            result.className =
                "history-value";

            if (completed) {

                result.classList.add(
                    "done"
                );
            }


            result.textContent =
                formatHistoryValue(
                    habit,
                    value
                );


            row.appendChild(
                icon
            );

            row.appendChild(
                name
            );

            row.appendChild(
                result
            );


            details.appendChild(
                row
            );

        }
    );
}


/* =========================================
   HABITS PAGE
========================================= */

function createLibraryRow(
    habit
) {

    const row =
        document.createElement(
            "div"
        );

    row.className =
        "library-row";


    const icon =
        document.createElement(
            "div"
        );

    icon.className =
        "library-icon";

    icon.textContent =
        habit.icon;


    const info =
        document.createElement(
            "div"
        );


    const name =
        document.createElement(
            "div"
        );

    name.className =
        "library-name";

    name.textContent =
        habit.name;


    const description =
        document.createElement(
            "div"
        );

    description.className =
        "library-description";

    description.textContent =
        habit.description;


    info.appendChild(
        name
    );

    info.appendChild(
        description
    );


    const badge =
        document.createElement(
            "span"
        );

    badge.className =
        "frequency-badge";

    badge.textContent =
        habit.frequency
            .toUpperCase();


    row.appendChild(
        icon
    );

    row.appendChild(
        info
    );

    row.appendChild(
        badge
    );


    return row;
}


function renderHabitLibrary() {

    const dailyContainer =
        document.getElementById(
            "habits-daily"
        );

    const weeklyContainer =
        document.getElementById(
            "habits-weekly"
        );

    const monthlyContainer =
        document.getElementById(
            "habits-monthly"
        );


    dailyContainer.innerHTML = "";
    weeklyContainer.innerHTML = "";
    monthlyContainer.innerHTML = "";


    habits.forEach(
        habit => {

            const row =
                createLibraryRow(
                    habit
                );


            if (
                habit.frequency ===
                "daily"
            ) {

                dailyContainer
                    .appendChild(
                        row
                    );
            }


            if (
                habit.frequency ===
                "weekly"
            ) {

                weeklyContainer
                    .appendChild(
                        row
                    );
            }


            if (
                habit.frequency ===
                "monthly"
            ) {

                monthlyContainer
                    .appendChild(
                        row
                    );
            }

        }
    );
}


/* =========================================
   STATS
========================================= */

function trackedDailyKeys() {

    return Object
        .keys(
            data.daily
        )
        .filter(
            key =>
                hasTrackedData(
                    key
                )
        )
        .sort();
}


function keysWithinLastDays(
    days
) {

    const end =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );


    const start =
        new Date(
            end
        );

    start.setDate(
        start.getDate() -
        (days - 1)
    );


    return trackedDailyKeys()
        .filter(
            key => {

                const date =
                    parseDateKey(
                        key
                    );

                return (
                    date >= start &&
                    date <= end
                );
            }
        );
}


function average(
    values
) {

    if (
        values.length === 0
    ) {

        return null;
    }


    return values.reduce(
        (sum, value) =>
            sum + value,
        0
    ) / values.length;
}


function formatItalianNumber(
    number
) {

    return Math.round(
        number
    )
    .toLocaleString(
        "it-IT"
    );
}


function renderStats() {

    const keys7 =
        keysWithinLastDays(
            7
        );

    const keys30 =
        keysWithinLastDays(
            30
        );


    const scores7 =
        keys7
            .map(
                calculateDailyScoreForKey
            )
            .filter(
                value =>
                    value !== null
            );


    const scores30 =
        keys30
            .map(
                calculateDailyScoreForKey
            )
            .filter(
                value =>
                    value !== null
            );


    const average7 =
        average(
            scores7
        );

    const average30 =
        average(
            scores30
        );


    document
        .getElementById(
            "stat-score-7"
        )
        .textContent =
        average7 === null
            ? "—"
            : `${Math.round(
                average7
            )}%`;


    document
        .getElementById(
            "stat-score-30"
        )
        .textContent =
        average30 === null
            ? "—"
            : `${Math.round(
                average30
            )}%`;


    const days80 =
        scores30.filter(
            score =>
                score >= 80
        ).length;


    document
        .getElementById(
            "stat-days-80"
        )
        .textContent =
        `${days80} / ${keys30.length}`;


    document
        .getElementById(
            "stat-tracked-days"
        )
        .textContent =
        trackedDailyKeys()
            .length;


    const sleepValues =
        keys30
            .map(
                key =>
                    Number(
                        data.daily[key]
                            ?.sleep || 0
                    )
            )
            .filter(
                value =>
                    value > 0
            );


    const sleepAverage =
        average(
            sleepValues
        );


    document
        .getElementById(
            "stat-sleep"
        )
        .textContent =
        sleepAverage === null
            ? "—"
            : `${
                sleepAverage
                    .toFixed(1)
                    .replace(
                        ".",
                        ","
                    )
            } h`;


    const stepValues =
        keys30
            .map(
                key =>
                    Number(
                        data.daily[key]
                            ?.steps || 0
                    )
            )
            .filter(
                value =>
                    value > 0
            );


    const stepAverage =
        average(
            stepValues
        );


    document
        .getElementById(
            "stat-steps"
        )
        .textContent =
        stepAverage === null
            ? "—"
            : formatItalianNumber(
                stepAverage
            );


    const readingTotal =
        keys30.reduce(
            (sum, key) => {

                return (
                    sum +
                    Number(
                        data.daily[key]
                            ?.reading || 0
                    )
                );

            },
            0
        );


    document
        .getElementById(
            "stat-reading"
        )
        .textContent =
        `${readingTotal} min`;


    const workouts =
        habits.find(
            habit =>
                habit.id ===
                "workouts"
        );


    document
        .getElementById(
            "stat-workouts"
        )
        .textContent =
        `${getHabitValue(
            workouts
        )} / 4`;
}


/* =========================================
   START
========================================= */

pageSubtitle.textContent =
    todayLabel();


renderTodayHabits();

renderHabitLibrary();

updateScores();

renderCalendar();

renderStats();

saveData();