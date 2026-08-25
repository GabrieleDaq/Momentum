/* =========================================
   MOMENTUM
   Habit Tracker v0.4
   Habit Library + attiva/disattiva
========================================= */


/* =========================================
   MASTER HABIT LIBRARY
========================================= */

const habitLibrary = [

    /* =========================
       DAILY — ATTIVE DI DEFAULT
    ========================= */

    {
        id: "sleep",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Sonno",
        icon: "😴",
        type: "number",
        target: 7,
        unit: "h",
        description: "Obiettivo: 7–8 ore",
        defaultActive: true
    },

    {
        id: "steps",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Passi",
        icon: "🚶",
        type: "number",
        target: 8000,
        unit: "passi",
        description: "Obiettivo: almeno 8.000",
        defaultActive: true
    },

    {
        id: "nutrition",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Alimentazione",
        icon: "🥗",
        type: "boolean",
        description: "Giornata complessivamente equilibrata",
        defaultActive: true
    },

    {
        id: "supplements",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Integratori",
        icon: "💊",
        type: "boolean",
        description: "Assunti quelli previsti oggi",
        defaultActive: true
    },

    {
        id: "priorities",
        frequency: "daily",
        category: "Mente & focus",
        name: "3 priorità",
        icon: "🎯",
        type: "boolean",
        description: "Definisci le 3 priorità della giornata",
        defaultActive: true
    },

    {
        id: "reading",
        frequency: "daily",
        category: "Mente & focus",
        name: "Lettura / studio",
        icon: "📚",
        type: "number",
        target: 15,
        unit: "min",
        description: "Obiettivo: 10–20 minuti",
        defaultActive: true
    },

    {
        id: "tidy",
        frequency: "daily",
        category: "Organizzazione",
        name: "Ordine",
        icon: "🧹",
        type: "number",
        target: 5,
        unit: "min",
        description: "5–10 minuti di riordino",
        defaultActive: true
    },


    /* =========================
       DAILY — LIBRERIA
    ========================= */

    {
        id: "water",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Acqua",
        icon: "💧",
        type: "number",
        target: 2,
        unit: "L",
        description: "Obiettivo indicativo: circa 1,5–2,5 L"
    },

    {
        id: "movement",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Movimento",
        icon: "🏃",
        type: "boolean",
        description: "Allenamento oppure 20–30 minuti di movimento"
    },

    {
        id: "fruit_veg",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Frutta e verdura",
        icon: "🍎",
        type: "boolean",
        description: "2 porzioni di verdura + 1–2 di frutta"
    },

    {
        id: "protein",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Proteine ai pasti",
        icon: "🍗",
        type: "boolean",
        description: "Buona quota proteica durante la giornata"
    },

    {
        id: "regular_sleep",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Orari del sonno regolari",
        icon: "⏰",
        type: "boolean",
        description: "Orari di sonno e risveglio abbastanza regolari"
    },

    {
        id: "mobility",
        frequency: "daily",
        category: "Corpo & salute",
        name: "Stretching / mobilità",
        icon: "🤸",
        type: "number",
        target: 5,
        unit: "min",
        description: "Obiettivo: 5–10 minuti"
    },

    {
        id: "no_phone_morning",
        frequency: "daily",
        category: "Mente & focus",
        name: "No telefono al risveglio",
        icon: "📵",
        type: "boolean",
        description: "Primi 20–30 minuti senza telefono"
    },

    {
        id: "deep_work",
        frequency: "daily",
        category: "Mente & focus",
        name: "Deep work",
        icon: "🧠",
        type: "number",
        target: 45,
        unit: "min",
        description: "Almeno un blocco da 45–90 minuti"
    },

    {
        id: "screen_time",
        frequency: "daily",
        category: "Mente & focus",
        name: "Screen time social",
        icon: "📱",
        type: "limit",
        target: 3,
        unit: "h",
        description: "Inserisci le ore: target massimo 3 h"
    },

    {
        id: "learning",
        frequency: "daily",
        category: "Mente & focus",
        name: "Imparare qualcosa",
        icon: "🎓",
        type: "number",
        target: 15,
        unit: "min",
        description: "Almeno 15 minuti"
    },

    {
        id: "capture_tasks",
        frequency: "daily",
        category: "Mente & focus",
        name: "Annotare idee e task",
        icon: "📝",
        type: "boolean",
        description: "Non tenere tutto a mente"
    },

    {
        id: "me_time",
        frequency: "daily",
        category: "Benessere",
        name: "Tempo per te",
        icon: "🌿",
        type: "number",
        target: 20,
        unit: "min",
        description: "Almeno 20–30 minuti"
    },

    {
        id: "screen_free",
        frequency: "daily",
        category: "Benessere",
        name: "Tempo senza schermi",
        icon: "☁️",
        type: "number",
        target: 20,
        unit: "min",
        description: "Un momento della giornata completamente offline"
    },

    {
        id: "hobby",
        frequency: "daily",
        category: "Benessere",
        name: "Hobby / qualcosa che piace",
        icon: "🎮",
        type: "boolean",
        description: "Musica, serie, hobby, passeggiata, videogiochi..."
    },

    {
        id: "important_person",
        frequency: "daily",
        category: "Benessere",
        name: "Sentire una persona importante",
        icon: "💬",
        type: "boolean",
        description: "Parla o scrivi a una persona importante"
    },

    {
        id: "what_went_well",
        frequency: "daily",
        category: "Benessere",
        name: "Cosa è andato bene?",
        icon: "🌙",
        type: "boolean",
        description: "Una breve riflessione prima di dormire"
    },

    {
        id: "make_bed",
        frequency: "daily",
        category: "Organizzazione",
        name: "Rifare il letto",
        icon: "🛏️",
        type: "boolean",
        description: "Piccolo reset della mattina"
    },

    {
        id: "prepare_tomorrow",
        frequency: "daily",
        category: "Organizzazione",
        name: "Preparare domani",
        icon: "🎒",
        type: "boolean",
        description: "Prepara la sera ciò che servirà il giorno dopo"
    },

    {
        id: "check_agenda",
        frequency: "daily",
        category: "Organizzazione",
        name: "Controllare agenda",
        icon: "📅",
        type: "boolean",
        description: "Controllo rapido degli impegni del giorno dopo"
    },

    {
        id: "record_expenses",
        frequency: "daily",
        category: "Finanze",
        name: "Registrare le spese",
        icon: "💳",
        type: "boolean",
        description: "Registra le spese importanti della giornata"
    },

    {
        id: "rule_24h",
        frequency: "daily",
        category: "Finanze",
        name: "Regola delle 24 ore",
        icon: "⏳",
        type: "boolean",
        description: "Niente acquisti impulsivi non necessari"
    },


    /* =========================
       WEEKLY — ATTIVE DI DEFAULT
    ========================= */

    {
        id: "workouts",
        frequency: "weekly",
        category: "Corpo & salute",
        name: "Allenamenti",
        icon: "🏋️",
        type: "counter",
        target: 3,
        displayTarget: 4,
        description: "Obiettivo: 3–4 allenamenti",
        defaultActive: true
    },

    {
        id: "weekly_reset",
        frequency: "weekly",
        category: "Organizzazione",
        name: "Weekly Reset",
        icon: "🗓️",
        type: "boolean",
        description: "Review + calendario + 3 obiettivi",
        defaultActive: true
    },


    /* =========================
       WEEKLY — LIBRERIA
    ========================= */

    {
        id: "weekly_cardio",
        frequency: "weekly",
        category: "Corpo & salute",
        name: "Cardio / lunga camminata",
        icon: "🏃",
        type: "boolean",
        description: "Almeno una sessione nella settimana"
    },

    {
        id: "weight_check",
        frequency: "weekly",
        category: "Corpo & salute",
        name: "Controllo peso",
        icon: "⚖️",
        type: "boolean",
        description: "Una sola misurazione settimanale"
    },

    {
        id: "meal_plan",
        frequency: "weekly",
        category: "Corpo & salute",
        name: "Pianificare i pasti",
        icon: "🍽️",
        type: "boolean",
        description: "Pianificazione indicativa della settimana"
    },

    {
        id: "smart_grocery",
        frequency: "weekly",
        category: "Corpo & salute",
        name: "Spesa ragionata",
        icon: "🛒",
        type: "boolean",
        description: "Fare una spesa alimentare pianificata"
    },

    {
        id: "deep_clean",
        frequency: "weekly",
        category: "Organizzazione",
        name: "Pulizia approfondita",
        icon: "🧽",
        type: "boolean",
        description: "Una pulizia più completa della casa"
    },

    {
        id: "digital_cleanup",
        frequency: "weekly",
        category: "Organizzazione",
        name: "Pulizia digitale",
        icon: "🖥️",
        type: "boolean",
        description: "Desktop, download, email e file inutili"
    },

    {
        id: "professional_growth",
        frequency: "weekly",
        category: "Crescita",
        name: "Sviluppo professionale",
        icon: "📈",
        type: "number",
        target: 1,
        unit: "h",
        description: "Obiettivo: 1–2 ore"
    },

    {
        id: "sector_reading",
        frequency: "weekly",
        category: "Crescita",
        name: "Lettura di settore",
        icon: "📰",
        type: "boolean",
        description: "Leggi qualcosa relativo al tuo settore"
    },

    {
        id: "skill_growth",
        frequency: "weekly",
        category: "Crescita",
        name: "Migliorare una competenza",
        icon: "🧩",
        type: "boolean",
        description: "Un passo concreto su una skill"
    },

    {
        id: "news_update",
        frequency: "weekly",
        category: "Crescita",
        name: "Aggiornamento notizie",
        icon: "🌐",
        type: "boolean",
        description: "Economia, tecnologia o temi professionali"
    },

    {
        id: "career_action",
        frequency: "weekly",
        category: "Crescita",
        name: "Azione di crescita",
        icon: "🚀",
        type: "boolean",
        description: "Networking, candidatura, CV, studio o progetto"
    },

    {
        id: "weekly_spending",
        frequency: "weekly",
        category: "Finanze",
        name: "Controllo spese",
        icon: "💸",
        type: "boolean",
        description: "Guarda rapidamente quanto hai speso"
    },

    {
        id: "budget_check",
        frequency: "weekly",
        category: "Finanze",
        name: "Controllo budget",
        icon: "📊",
        type: "boolean",
        description: "Verifica di non superare il budget"
    },

    {
        id: "social_activity",
        frequency: "weekly",
        category: "Vita sociale",
        name: "Attività con amici/famiglia",
        icon: "👥",
        type: "boolean",
        description: "Organizza almeno un'attività"
    },

    {
        id: "new_activity",
        frequency: "weekly",
        category: "Vita sociale",
        name: "Qualcosa di diverso",
        icon: "✨",
        type: "boolean",
        description: "Esci dalla solita routine"
    },

    {
        id: "disconnect_work",
        frequency: "weekly",
        category: "Vita sociale",
        name: "Tempo scollegato dal lavoro",
        icon: "🌅",
        type: "boolean",
        description: "Qualche ora completamente staccato dal lavoro"
    },


    /* =========================
       MONTHLY — ATTIVE DI DEFAULT
    ========================= */

    {
        id: "money_review",
        frequency: "monthly",
        category: "Finanze",
        name: "Money Review",
        icon: "💰",
        type: "boolean",
        description: "Entrate, spese, risparmio, investimenti e abbonamenti",
        defaultActive: true
    },

    {
        id: "monthly_reset",
        frequency: "monthly",
        category: "Organizzazione",
        name: "Monthly Reset",
        icon: "🧭",
        type: "boolean",
        description: "Cosa ha funzionato + 1–3 obiettivi per il prossimo mese",
        defaultActive: true
    },


    /* =========================
       MONTHLY — LIBRERIA
    ========================= */

    {
        id: "fitness_review",
        frequency: "monthly",
        category: "Corpo & salute",
        name: "Progressi fitness",
        icon: "📏",
        type: "boolean",
        description: "Peso, misure e progressi in palestra"
    },

    {
        id: "progress_photos",
        frequency: "monthly",
        category: "Corpo & salute",
        name: "Foto progress",
        icon: "📸",
        type: "boolean",
        description: "Foto opzionali per confrontare i progressi"
    },

    {
        id: "sleep_review",
        frequency: "monthly",
        category: "Corpo & salute",
        name: "Qualità del sonno",
        icon: "🌙",
        type: "boolean",
        description: "Controlla la qualità media del sonno"
    },

    {
        id: "energy_stress",
        frequency: "monthly",
        category: "Corpo & salute",
        name: "Energia e stress",
        icon: "🔋",
        type: "boolean",
        description: "Valuta se stanno migliorando o peggiorando"
    },

    {
        id: "learning_review",
        frequency: "monthly",
        category: "Crescita",
        name: "Cosa ho imparato",
        icon: "🎓",
        type: "boolean",
        description: "Valuta gli apprendimenti del mese"
    },

    {
        id: "profile_update",
        frequency: "monthly",
        category: "Crescita",
        name: "Aggiornare profilo professionale",
        icon: "🧾",
        type: "boolean",
        description: "Solo se ci sono nuovi risultati rilevanti"
    },

    {
        id: "next_skill",
        frequency: "monthly",
        category: "Crescita",
        name: "Skill del prossimo mese",
        icon: "🎯",
        type: "boolean",
        description: "Scegli una competenza da sviluppare"
    },

    {
        id: "monthly_digital_cleanup",
        frequency: "monthly",
        category: "Organizzazione",
        name: "Decluttering digitale",
        icon: "🗂️",
        type: "boolean",
        description: "File, screenshot, foto, note e cartelle"
    },

    {
        id: "backup_files",
        frequency: "monthly",
        category: "Organizzazione",
        name: "Backup file importanti",
        icon: "☁️",
        type: "boolean",
        description: "Verifica che i file importanti siano al sicuro"
    },

    {
        id: "newsletter_cleanup",
        frequency: "monthly",
        category: "Organizzazione",
        name: "Pulizia newsletter",
        icon: "📧",
        type: "boolean",
        description: "Disiscriviti da newsletter inutili"
    },

    {
        id: "subscription_check",
        frequency: "monthly",
        category: "Finanze",
        name: "Controllo abbonamenti",
        icon: "🔁",
        type: "boolean",
        description: "Controlla spese ricorrenti e abbonamenti digitali"
    },

    {
        id: "new_experience_monthly",
        frequency: "monthly",
        category: "Vita personale",
        name: "Esperienza diversa",
        icon: "🗺️",
        type: "boolean",
        description: "Fai almeno qualcosa fuori dalla routine"
    },

    {
        id: "plan_future_event",
        frequency: "monthly",
        category: "Vita personale",
        name: "Organizzare qualcosa",
        icon: "🎫",
        type: "boolean",
        description: "Pianifica una giornata, gita o evento futuro"
    },

    {
        id: "reconnect",
        frequency: "monthly",
        category: "Vita personale",
        name: "Ricontattare qualcuno",
        icon: "☎️",
        type: "boolean",
        description: "Contatta una persona che non senti da tempo"
    },

    {
        id: "fun_only",
        frequency: "monthly",
        category: "Vita personale",
        name: "Divertimento senza obiettivi",
        icon: "🎉",
        type: "boolean",
        description: "Fai qualcosa solo perché ti diverte"
    }

];

/* =========================================
   ORIGINAL HABIT DEFAULTS
========================================= */

const ORIGINAL_HABIT_DEFAULTS = {};

habitLibrary.forEach(habit => {

    ORIGINAL_HABIT_DEFAULTS[
        habit.id
    ] = {
        ...habit
    };

});

/* =========================================
   DEFAULT ACTIVE HABITS
========================================= */

const DEFAULT_ACTIVE_IDS =
    habitLibrary
        .filter(habit => habit.defaultActive)
        .map(habit => habit.id);


const DEFAULT_DAILY_ACTIVE_IDS =
    habitLibrary
        .filter(
            habit =>
                habit.defaultActive &&
                habit.frequency === "daily"
        )
        .map(habit => habit.id);



/* =========================================
   DATE
========================================= */

const now = new Date();


function formatDateKey(date) {

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function parseDateKey(key) {

    const [
        year,
        month,
        day
    ] = key
        .split("-")
        .map(Number);

    return new Date(
        year,
        month - 1,
        day
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
        copy.getDate() -
        day +
        1
    );

    return formatDateKey(copy);
}


function getMonthKey(date) {

    return `${date.getFullYear()}-${String(
        date.getMonth() + 1
    ).padStart(2, "0")}`;
}


const todayKey =
    formatDateKey(now);

const weekKey =
    getWeekKey(now);

const monthKey =
    getMonthKey(now);



/* =========================================
   STORAGE + MIGRAZIONE v0.3 -> v0.4
========================================= */

/*
Manteniamo lo stesso STORAGE_KEY
della versione precedente.

In questo modo NON perdiamo
i progressi già registrati.
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
        monthly: {},
        settings: {}
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


if (!data.settings) {
    data.settings = {};
}

/* =========================================
   CUSTOM HABITS — v0.5B
========================================= */

if (!Array.isArray(data.settings.customHabits)) {
    data.settings.customHabits = [];
}


/*
Carichiamo nella libreria le habit
create dall'utente nelle sessioni precedenti.
*/

data.settings.customHabits.forEach(customHabit => {

    const alreadyExists =
        habitLibrary.some(
            habit =>
                habit.id === customHabit.id
        );

    if (!alreadyExists) {

        habitLibrary.push(
            customHabit
        );

    }


    /*
    Serve anche per il pulsante Ripristina
    dell'editor.
    */

    ORIGINAL_HABIT_DEFAULTS[
        customHabit.id
    ] = {
        ...customHabit
    };

});

/* =========================================
   CUSTOM HABIT SETTINGS — v0.5
========================================= */

if (!data.settings.habitOverrides) {
    data.settings.habitOverrides = {};
}


/*
Applica eventuali modifiche personalizzate
alla libreria delle abitudini.
*/

habitLibrary.forEach(habit => {

    const override =
        data.settings.habitOverrides[habit.id];

    if (!override) {
        return;
    }

    Object.assign(
        habit,
        override
    );

});

/*
Se è la prima volta che usiamo
la v0.4, attiviamo automaticamente
le 11 abitudini che avevamo già.
*/

if (
    !Array.isArray(
        data.settings.activeHabitIds
    )
) {

    data.settings.activeHabitIds =
        [...DEFAULT_ACTIVE_IDS];

}


/*
Salviamo quali habit erano attive
nei giorni precedenti.

Questo evita che cambiare habit oggi
modifichi artificialmente gli score
dei giorni vecchi.
*/

Object
    .keys(data.daily)
    .forEach(
        dateKey => {

            if (
                !Array.isArray(
                    data.daily[dateKey]
                        .__activeIds
                )
            ) {

                data.daily[dateKey]
                    .__activeIds =
                    [
                        ...DEFAULT_DAILY_ACTIVE_IDS
                    ];

            }

        }
    );


function getActiveHabitIds() {

    return data
        .settings
        .activeHabitIds;

}


function getActiveHabits() {

    const activeIds =
        new Set(
            getActiveHabitIds()
        );

    return habitLibrary.filter(
        habit =>
            activeIds.has(
                habit.id
            )
    );

}


function activeHabitsByFrequency(
    frequency
) {

    return getActiveHabits()
        .filter(
            habit =>
                habit.frequency ===
                frequency
        );

}


function activeDailyIds() {

    return activeHabitsByFrequency(
        "daily"
    )
        .map(
            habit =>
                habit.id
        );

}


/* Creazione contenitori correnti */

if (!data.daily[todayKey]) {

    data.daily[todayKey] = {};

}


if (!data.weekly[weekKey]) {

    data.weekly[weekKey] = {};

}


if (!data.monthly[monthKey]) {

    data.monthly[monthKey] = {};

}


/*
Il giorno corrente usa
le habit attualmente attive.
*/

data.daily[todayKey].__activeIds =
    activeDailyIds();


function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}



/* =========================================
   HABIT HELPERS
========================================= */

function getHabitById(id) {

    return habitLibrary.find(
        habit =>
            habit.id === id
    );

}


function getStorageSection(
    frequency
) {

    if (
        frequency === "daily"
    ) {

        return data.daily[
            todayKey
        ];

    }


    if (
        frequency === "weekly"
    ) {

        return data.weekly[
            weekKey
        ];

    }


    return data.monthly[
        monthKey
    ];

}


function defaultValueForHabit(
    habit
) {

    if (
        [
            "number",
            "counter",
            "limit"
        ].includes(
            habit.type
        )
    ) {

        return 0;

    }


    return false;

}


function getHabitValue(
    habit
) {

    const section =
        getStorageSection(
            habit.frequency
        );


    if (
        section[habit.id] ===
        undefined
    ) {

        return defaultValueForHabit(
            habit
        );

    }


    return section[
        habit.id
    ];

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

    if (
        habit.type ===
        "boolean"
    ) {

        return value === true;

    }


    /*
    LIMIT:
    esempio Screen Time.

    È completato se il valore
    è > 0 ed è sotto il massimo.
    */

    if (
        habit.type ===
        "limit"
    ) {

        return (
            Number(value) > 0 &&
            Number(value) <=
                habit.target
        );

    }


    if (
        [
            "number",
            "counter"
        ].includes(
            habit.type
        )
    ) {

        return (
            Number(value) >=
            habit.target
        );

    }


    return false;

}


function isHabitCompleted(
    habit
) {

    return isCompletedFromValue(
        habit,
        getHabitValue(habit)
    );

}



/* =========================================
   ATTIVA / DISATTIVA HABIT
========================================= */

function toggleHabitActive(
    habitId
) {

    const activeIds =
        new Set(
            getActiveHabitIds()
        );


    if (
        activeIds.has(
            habitId
        )
    ) {

        activeIds.delete(
            habitId
        );

    }
    else {

        activeIds.add(
            habitId
        );

    }


    data.settings.activeHabitIds =
        [...activeIds];


    /*
    Aggiorniamo le habit attive
    per la giornata corrente.
    */

    data.daily[todayKey]
        .__activeIds =
        activeDailyIds();


    saveData();


    /*
    Ridisegniamo l'app.
    */

    renderTodayHabits();

    renderHabitLibrary();

    updateScores();

    renderCalendar();

    renderStats();

}





/* =========================================
   DYNAMIC HABIT DESCRIPTION
========================================= */

function formatTargetValue(value) {

    return Number(value)
        .toLocaleString(
            "it-IT",
            {
                maximumFractionDigits: 2
            }
        );

}


function getHabitDisplayDescription(habit) {

    /*
    Habit semplici sì/no:
    manteniamo la descrizione originale.
    */

    if (habit.type === "boolean") {

        return habit.description;

    }


    /*
    Habit con limite massimo.
    */

    if (habit.type === "limit") {

        return `Target massimo: ${formatTargetValue(
            habit.target
        )} ${habit.unit || ""}`;

    }


    /*
    Counter settimanali/mensili.
    */

    if (habit.type === "counter") {

        return `Obiettivo: ${formatTargetValue(
            habit.target
        )} completamenti`;

    }


    /*
    Habit numeriche.
    */

    if (habit.type === "number") {

        return `Obiettivo: ${formatTargetValue(
            habit.target
        )} ${habit.unit || ""}`;

    }


    return habit.description;

}

/* =========================================
   TODAY HABIT CARDS
========================================= */

function createHabitCard(
    habit
) {

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "habit-card";


    const icon =
        document.createElement(
            "div"
        );

    icon.className =
        "habit-icon";

    icon.textContent =
        habit.icon;


    const info =
        document.createElement(
            "div"
        );

    info.className =
        "habit-info";


    const name =
        document.createElement(
            "div"
        );

    name.className =
        "habit-name";

    name.textContent =
        habit.name;


    const description =
        document.createElement(
            "div"
        );

    description.className =
        "habit-description";

    description.textContent =
    getHabitDisplayDescription(
        habit
    );


    info.appendChild(
        name
    );

    info.appendChild(
        description
    );


    card.appendChild(
        icon
    );

    card.appendChild(
        info
    );



    /* =========================
       BOOLEAN
    ========================= */

    if (
        habit.type ===
        "boolean"
    ) {

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

                setHabitValue(
                    habit,
                    !getHabitValue(
                        habit
                    )
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



    /* =========================
       NUMBER / LIMIT
    ========================= */

    if (
        habit.type === "number" ||
        habit.type === "limit"
    ) {

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


        /*
        Alcuni valori possono
        avere decimali.
        */

        input.step =
            [
                "sleep",
                "water",
                "screen_time",
                "professional_growth"
            ].includes(
                habit.id
            )
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
                    !Number.isFinite(
                        value
                    ) ||
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



    /* =========================
       COUNTER
    ========================= */

    if (
        habit.type ===
        "counter"
    ) {

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

                const next =
                    Math.max(
                        0,
                        Number(
                            getHabitValue(
                                habit
                            )
                        ) - 1
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

                const next =
                    Math.min(
                        31,
                        Number(
                            getHabitValue(
                                habit
                            )
                        ) + 1
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


    dailyList.innerHTML =
        "";

    weeklyList.innerHTML =
        "";

    monthlyList.innerHTML =
        "";


    getActiveHabits()
        .forEach(
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
        activeHabitsByFrequency(
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
                (
                    completed /
                    filtered.length
                ) * 100
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
        daily.total === 0
    ) {

        message.textContent =
            "Attiva una daily habit.";

    }

    else if (
        daily.percentage ===
        100
    ) {

        message.textContent =
            "Giornata completata.";

    }

    else if (
        daily.percentage >=
        70
    ) {

        message.textContent =
            "Ottimo ritmo.";

    }

    else if (
        daily.percentage >=
        40
    ) {

        message.textContent =
            "Continua così.";

    }

    else if (
        daily.percentage >
        0
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

function hasTrackedData(
    dateKey
) {

    const dayData =
        data.daily[
            dateKey
        ];


    if (!dayData) {

        return false;

    }


    /*
    __activeIds è configurazione,
    non è un dato registrato.
    */

    return Object
        .keys(
            dayData
        )
        .some(
            key =>
                !key.startsWith(
                    "__"
                )
        );

}



function getHistoricalHabitValue(
    habit,
    dateKey
) {

    const dayData =
        data.daily[
            dateKey
        ] || {};


    if (
        dayData[habit.id] ===
        undefined
    ) {

        return defaultValueForHabit(
            habit
        );

    }


    return dayData[
        habit.id
    ];

}



function historicalDailyHabits(
    dateKey
) {

    const dayData =
        data.daily[
            dateKey
        ] || {};


    const ids =
        Array.isArray(
            dayData.__activeIds
        )
            ? dayData.__activeIds
            : DEFAULT_DAILY_ACTIVE_IDS;


    return ids
        .map(
            getHabitById
        )
        .filter(
            Boolean
        )
        .filter(
            habit =>
                habit.frequency ===
                "daily"
        );

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


    const habitsForDay =
        historicalDailyHabits(
            dateKey
        );


    if (
        habitsForDay.length ===
        0
    ) {

        return 0;

    }


    const completed =
        habitsForDay.filter(
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
        (
            completed /
            habitsForDay.length
        ) * 100
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



function showPage(
    pageName
) {

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


    /* TODAY */

    if (
        pageName ===
        "today"
    ) {

        pageTitle.textContent =
            "Oggi";

        pageSubtitle.textContent =
            todayLabel();

        headerScore.hidden =
            false;

    }


    /* CALENDAR */

    if (
        pageName ===
        "calendar"
    ) {

        pageTitle.textContent =
            "Calendario";

        pageSubtitle.textContent =
            "Il tuo storico";

        headerScore.hidden =
            true;

        renderCalendar();

    }


    /* HABITS */

    if (
        pageName ===
        "habits"
    ) {

        pageTitle.textContent =
            "Habits";

        pageSubtitle.textContent =
            `${getActiveHabits().length} attive • ${habitLibrary.length} disponibili`;

        headerScore.hidden =
            true;

        renderHabitLibrary();

    }


    /* STATS */

    if (
        pageName ===
        "stats"
    ) {

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


    /*
    Celle vuote prima del
    primo giorno del mese.
    */

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


    /*
    Giorni del mese.
    */

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


        if (
            score !== null
        ) {

            button.classList.add(
                "has-data"
            );


            scoreLabel.textContent =
                `${score}%`;


            if (
                score >= 100
            ) {

                button.classList.add(
                    "perfect"
                );

            }

            else if (
                score >= 80
            ) {

                button.classList.add(
                    "great"
                );

            }

            else if (
                score >= 50
            ) {

                button.classList.add(
                    "good"
                );

            }

        }


        if (
            dateKey ===
            todayKey
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


    selectedCalendarKey =
        isCurrentMonth
            ? todayKey
            : formatDateKey(
                calendarCursor
            );


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

    if (
        habit.type ===
        "boolean"
    ) {

        return value
            ? "Fatto ✓"
            : "Non fatto";

    }


    return `${value} ${habit.unit || ""}`
        .trim();

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


    historicalDailyHabits(
        selectedCalendarKey
    )
        .forEach(
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


                if (
                    completed
                ) {

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
   EDIT HABIT — v0.5
========================================= */

function createEditHabitModal() {

    if (
        document.getElementById(
            "habit-edit-overlay"
        )
    ) {
        return;
    }


    const overlay =
        document.createElement("div");

    overlay.id =
        "habit-edit-overlay";

    overlay.className =
        "habit-edit-overlay";

    overlay.hidden =
        true;


    overlay.innerHTML = `
        <div class="habit-edit-modal">

            <div class="habit-edit-header">

                <div>
                    <p class="mini-label">
                        PERSONALIZZA
                    </p>

                    <h2>
                        Modifica abitudine
                    </h2>
                </div>

                <button
                    type="button"
                    id="close-habit-edit"
                    class="habit-edit-close"
                    aria-label="Chiudi"
                >
                    ×
                </button>

            </div>


            <form id="habit-edit-form">

                <input
                    type="hidden"
                    id="edit-habit-id"
                >


                <label class="habit-edit-field">

                    <span>Nome</span>

                    <input
                        id="edit-habit-name"
                        type="text"
                        required
                        maxlength="40"
                    >

                </label>


                <label class="habit-edit-field">

                    <span>Icona</span>

                    <input
                        id="edit-habit-icon"
                        type="text"
                        maxlength="4"
                    >

                </label>


                <div class="habit-edit-row">

                    <label class="habit-edit-field">

                        <span>Target</span>

                        <input
                            id="edit-habit-target"
                            type="number"
                            min="0"
                            step="0.5"
                        >

                    </label>


                    <label class="habit-edit-field">

                        <span>Unità</span>

                        <input
                            id="edit-habit-unit"
                            type="text"
                            maxlength="12"
                            placeholder="min, h, L..."
                        >

                    </label>

                </div>


                <div
                    id="edit-habit-target-note"
                    class="habit-edit-note"
                ></div>


                <div class="habit-edit-actions">

                    <button
                        type="button"
                        id="reset-habit-edit"
                        class="secondary-action"
                    >
                        Ripristina
                    </button>

                    <button
                        type="submit"
                        class="primary-action"
                    >
                        Salva modifiche
                    </button>

                </div>

            </form>

        </div>
    `;


    document.body.appendChild(
        overlay
    );


    document
        .getElementById(
            "close-habit-edit"
        )
        .addEventListener(
            "click",
            closeHabitEditor
        );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                overlay
            ) {

                closeHabitEditor();

            }

        }
    );


    document
        .getElementById(
            "habit-edit-form"
        )
        .addEventListener(
            "submit",
            saveHabitEditor
        );


    document
        .getElementById(
            "reset-habit-edit"
        )
        .addEventListener(
            "click",
            resetHabitEditor
        );

}



function openHabitEditor(
    habitId
) {

    const habit =
        getHabitById(
            habitId
        );


    if (!habit) {
        return;
    }


    const overlay =
        document.getElementById(
            "habit-edit-overlay"
        );


    document
        .getElementById(
            "edit-habit-id"
        )
        .value =
        habit.id;


    document
        .getElementById(
            "edit-habit-name"
        )
        .value =
        habit.name;


    document
        .getElementById(
            "edit-habit-icon"
        )
        .value =
        habit.icon;


    const targetInput =
        document.getElementById(
            "edit-habit-target"
        );


    const unitInput =
        document.getElementById(
            "edit-habit-unit"
        );


    const note =
        document.getElementById(
            "edit-habit-target-note"
        );


    if (
        habit.type ===
        "boolean"
    ) {

        targetInput.disabled =
            true;

        unitInput.disabled =
            true;

        targetInput.value =
            "";

        unitInput.value =
            "";

        note.textContent =
            "Questa abitudine usa Fatto / Non fatto, quindi non ha un target numerico.";

    }

    else {

        targetInput.disabled =
            false;

        unitInput.disabled =
            false;

        targetInput.value =
            habit.target ?? "";

        unitInput.value =
            habit.unit ?? "";

        note.textContent =
            habit.type === "limit"
                ? "Per questa abitudine il target rappresenta il limite massimo."
                : "Il target determina quando Momentum considera completata l'abitudine.";

    }


    overlay.hidden =
        false;

}



function closeHabitEditor() {

    const overlay =
        document.getElementById(
            "habit-edit-overlay"
        );


    if (overlay) {

        overlay.hidden =
            true;

    }

}



function saveHabitEditor(
    event
) {

    event.preventDefault();


    const habitId =
        document
            .getElementById(
                "edit-habit-id"
            )
            .value;


    const habit =
        getHabitById(
            habitId
        );


    if (!habit) {
        return;
    }


    const name =
        document
            .getElementById(
                "edit-habit-name"
            )
            .value
            .trim();


    const icon =
        document
            .getElementById(
                "edit-habit-icon"
            )
            .value
            .trim();


    const override = {
        name:
            name || habit.name,

        icon:
            icon || habit.icon
    };


    if (
        habit.type !==
        "boolean"
    ) {

        let target =
            Number(
                document
                    .getElementById(
                        "edit-habit-target"
                    )
                    .value
            );


        if (
            !Number.isFinite(
                target
            ) ||
            target < 0
        ) {

            target =
                habit.target;

        }


        const unit =
            document
                .getElementById(
                    "edit-habit-unit"
                )
                .value
                .trim();


        override.target =
            target;


        override.unit =
            unit;

    }


    data.settings
        .habitOverrides[
            habitId
        ] =
        {
            ...(
                data.settings
                    .habitOverrides[
                        habitId
                    ] || {}
            ),
            ...override
        };


    Object.assign(
        habit,
        override
    );


    saveData();

    closeHabitEditor();

    renderTodayHabits();

    renderHabitLibrary();

    updateScores();

    renderCalendar();

    renderStats();

}



function resetHabitEditor() {

    const habitId =
        document
            .getElementById(
                "edit-habit-id"
            )
            .value;


    const original =
        ORIGINAL_HABIT_DEFAULTS[
            habitId
        ];


    if (!original) {
        return;
    }


    delete data
        .settings
        .habitOverrides[
            habitId
        ];


    const habit =
        getHabitById(
            habitId
        );


    Object.assign(
        habit,
        original
    );


    saveData();

    closeHabitEditor();

    renderTodayHabits();

    renderHabitLibrary();

    updateScores();

    renderCalendar();

    renderStats();

}

/* =========================================
   CREATE CUSTOM HABIT — v0.5B
========================================= */

function createNewHabitButton() {

    if (
        document.getElementById(
            "create-new-habit-button"
        )
    ) {
        return;
    }


    const infoCard =
        document.querySelector(
            "#page-habits .info-card"
        );


    if (!infoCard) {
        return;
    }


    const button =
        document.createElement(
            "button"
        );


    button.id =
        "create-new-habit-button";


    button.type =
        "button";


    button.className =
        "create-habit-button";


    button.textContent =
        "+ Crea nuova abitudine";


    button.addEventListener(
        "click",
        openCreateHabitModal
    );


    infoCard.appendChild(
        button
    );

}



/* =========================================
   CREATE HABIT MODAL
========================================= */

function createNewHabitModal() {

    if (
        document.getElementById(
            "create-habit-overlay"
        )
    ) {
        return;
    }


    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "create-habit-overlay";


    overlay.className =
        "habit-edit-overlay";


    overlay.hidden =
        true;


    overlay.innerHTML = `

        <div class="habit-edit-modal">

            <div class="habit-edit-header">

                <div>

                    <p class="mini-label">
                        NUOVA HABIT
                    </p>

                    <h2>
                        Crea abitudine
                    </h2>

                </div>


                <button
                    type="button"
                    id="close-create-habit"
                    class="habit-edit-close"
                    aria-label="Chiudi"
                >
                    ×
                </button>

            </div>


            <form id="create-habit-form">


                <label class="habit-edit-field">

                    <span>Nome</span>

                    <input
                        id="new-habit-name"
                        type="text"
                        maxlength="40"
                        required
                        placeholder="Es. Meditazione"
                    >

                </label>



                <label class="habit-edit-field">

                    <span>Icona</span>

                    <input
                        id="new-habit-icon"
                        type="text"
                        maxlength="4"
                        value="⭐"
                    >

                </label>



                <label class="habit-edit-field">

                    <span>Categoria</span>

                    <select
                        id="new-habit-category"
                        class="habit-select"
                    >

                        <option value="Corpo & salute">
                            Corpo & salute
                        </option>

                        <option value="Mente & focus">
                            Mente & focus
                        </option>

                        <option value="Benessere">
                            Benessere
                        </option>

                        <option value="Organizzazione">
                            Organizzazione
                        </option>

                        <option value="Finanze">
                            Finanze
                        </option>

                        <option value="Crescita">
                            Crescita
                        </option>

                        <option value="Vita sociale">
                            Vita sociale
                        </option>

                        <option value="Altro">
                            Altro
                        </option>

                    </select>

                </label>



                <label class="habit-edit-field">

                    <span>Frequenza</span>

                    <select
                        id="new-habit-frequency"
                        class="habit-select"
                    >

                        <option value="daily">
                            Giornaliera
                        </option>

                        <option value="weekly">
                            Settimanale
                        </option>

                        <option value="monthly">
                            Mensile
                        </option>

                    </select>

                </label>



                <label class="habit-edit-field">

                    <span>Come vuoi tracciarla?</span>

                    <select
                        id="new-habit-type"
                        class="habit-select"
                    >

                        <option value="boolean">
                            Fatto / Non fatto
                        </option>

                        <option value="number">
                            Valore numerico
                        </option>

                        <option value="counter">
                            Contatore
                        </option>

                        <option value="limit">
                            Limite massimo
                        </option>

                    </select>

                </label>



                <div
                    id="new-habit-numeric-fields"
                    class="habit-edit-row"
                >

                    <label class="habit-edit-field">

                        <span>Target</span>

                        <input
                            id="new-habit-target"
                            type="number"
                            min="0"
                            step="0.5"
                            value="1"
                        >

                    </label>


                    <label class="habit-edit-field">

                        <span>Unità</span>

                        <input
                            id="new-habit-unit"
                            type="text"
                            maxlength="12"
                            placeholder="min, h, km..."
                        >

                    </label>

                </div>



                <label class="habit-edit-field">

                    <span>Nota opzionale</span>

                    <input
                        id="new-habit-description"
                        type="text"
                        maxlength="100"
                        placeholder="Breve descrizione"
                    >

                </label>



                <div class="habit-edit-note">

                    La nuova abitudine verrà attivata
                    automaticamente.

                </div>



                <div class="habit-edit-actions">

                    <button
                        type="button"
                        id="cancel-create-habit"
                        class="secondary-action"
                    >
                        Annulla
                    </button>


                    <button
                        type="submit"
                        class="primary-action"
                    >
                        Crea abitudine
                    </button>

                </div>

            </form>

        </div>
    `;


    document.body.appendChild(
        overlay
    );


    document
        .getElementById(
            "close-create-habit"
        )
        .addEventListener(
            "click",
            closeCreateHabitModal
        );


    document
        .getElementById(
            "cancel-create-habit"
        )
        .addEventListener(
            "click",
            closeCreateHabitModal
        );


    document
        .getElementById(
            "create-habit-overlay"
        )
        .addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    overlay
                ) {

                    closeCreateHabitModal();

                }

            }
        );


    document
        .getElementById(
            "new-habit-type"
        )
        .addEventListener(
            "change",
            updateCreateHabitFields
        );


    document
        .getElementById(
            "create-habit-form"
        )
        .addEventListener(
            "submit",
            saveNewHabit
        );


    updateCreateHabitFields();

}



/* =========================================
   OPEN / CLOSE
========================================= */

function openCreateHabitModal() {

    const overlay =
        document.getElementById(
            "create-habit-overlay"
        );


    if (!overlay) {
        return;
    }


    document
        .getElementById(
            "create-habit-form"
        )
        .reset();


    document
        .getElementById(
            "new-habit-icon"
        )
        .value =
        "⭐";


    document
        .getElementById(
            "new-habit-target"
        )
        .value =
        "1";


    updateCreateHabitFields();


    overlay.hidden =
        false;

}



function closeCreateHabitModal() {

    const overlay =
        document.getElementById(
            "create-habit-overlay"
        );


    if (overlay) {

        overlay.hidden =
            true;

    }

}



/* =========================================
   FORM BEHAVIOUR
========================================= */

function updateCreateHabitFields() {

    const type =
        document
            .getElementById(
                "new-habit-type"
            )
            .value;


    const numericFields =
        document.getElementById(
            "new-habit-numeric-fields"
        );


    numericFields.hidden =
        type === "boolean";

}



/* =========================================
   CREATE UNIQUE ID
========================================= */

function createCustomHabitId(
    name
) {

    const cleanName =
        name
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .replace(
                /[^a-z0-9]+/g,
                "_"
            )
            .replace(
                /^_+|_+$/g,
                ""
            )
            .slice(
                0,
                30
            );


    return `custom_${
        cleanName || "habit"
    }_${Date.now()}`;

}



/* =========================================
   SAVE NEW HABIT
========================================= */

function saveNewHabit(
    event
) {

    event.preventDefault();


    const name =
        document
            .getElementById(
                "new-habit-name"
            )
            .value
            .trim();


    if (!name) {
        return;
    }


    const icon =
        document
            .getElementById(
                "new-habit-icon"
            )
            .value
            .trim() ||
        "⭐";


    const category =
        document
            .getElementById(
                "new-habit-category"
            )
            .value;


    const frequency =
        document
            .getElementById(
                "new-habit-frequency"
            )
            .value;


    const type =
        document
            .getElementById(
                "new-habit-type"
            )
            .value;


    const description =
        document
            .getElementById(
                "new-habit-description"
            )
            .value
            .trim();


    const habit = {

        id:
            createCustomHabitId(
                name
            ),

        frequency,

        category,

        name,

        icon,

        type,

        description,

        custom:
            true

    };


    /*
    Target solo quando necessario.
    */

    if (
        type !==
        "boolean"
    ) {

        let target =
            Number(
                document
                    .getElementById(
                        "new-habit-target"
                    )
                    .value
            );


        if (
            !Number.isFinite(
                target
            ) ||
            target < 0
        ) {

            target = 1;

        }


        habit.target =
            target;


        habit.unit =
            document
                .getElementById(
                    "new-habit-unit"
                )
                .value
                .trim();


        if (
            type ===
            "counter"
        ) {

            habit.displayTarget =
                target;

        }

    }


    /*
    Aggiungiamo alla libreria.
    */

    habitLibrary.push(
        habit
    );


    /*
    Salviamo permanentemente.
    */

    data.settings
        .customHabits
        .push(
            {
                ...habit
            }
        );


    /*
    Rendiamo subito attiva.
    */

    if (
        !data.settings
            .activeHabitIds
            .includes(
                habit.id
            )
    ) {

        data.settings
            .activeHabitIds
            .push(
                habit.id
            );

    }


    /*
    La registriamo nei defaults
    per permettere l'editor.
    */

    ORIGINAL_HABIT_DEFAULTS[
        habit.id
    ] = {
        ...habit
    };


    /*
    Se è daily aggiorniamo
    la configurazione di oggi.
    */

    if (
        habit.frequency ===
        "daily"
    ) {

        data.daily[
            todayKey
        ].__activeIds =
            activeDailyIds();

    }


    saveData();


    closeCreateHabitModal();


    renderTodayHabits();

    renderHabitLibrary();

    updateScores();

    renderCalendar();

    renderStats();


    pageSubtitle.textContent =
        `${getActiveHabits().length} attive • ${habitLibrary.length} disponibili`;

}

/* =========================================
   HABITS PAGE — LIBRERIA
========================================= */

function createLibraryRow(
    habit
) {

    const active =
        getActiveHabitIds()
            .includes(
                habit.id
            );


    const row =
        document.createElement(
            "div"
        );


    row.className =
        "library-row";


    if (
        !active
    ) {

        row.classList.add(
            "inactive"
        );

    }


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
    `${habit.category} • ${getHabitDisplayDescription(
        habit
    )}`;


    info.appendChild(
        name
    );


    info.appendChild(
        description
    );


    const action =
        document.createElement(
            "div"
        );


    action.className =
        "library-action";
        if (active) {

    const editButton =
        document.createElement(
            "button"
        );

    editButton.type =
        "button";

    editButton.className =
        "edit-habit-button";

    editButton.textContent =
        "Modifica";

    editButton.addEventListener(
        "click",
        () => {

            openHabitEditor(
                habit.id
            );

        }
    );

    action.appendChild(
        editButton
    );

}


    const button =
        document.createElement(
            "button"
        );


    button.type =
        "button";


    button.className =
        "toggle-habit-button";


    button.classList.toggle(
        "active",
        active
    );


    button.textContent =
        active
            ? "Disattiva"
            : "+ Attiva";


    button.addEventListener(
        "click",
        () => {

            toggleHabitActive(
                habit.id
            );


            pageSubtitle.textContent =
                `${getActiveHabits().length} attive • ${habitLibrary.length} disponibili`;

        }
    );


    action.appendChild(
        button
    );


    row.appendChild(
        icon
    );


    row.appendChild(
        info
    );


    row.appendChild(
        action
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


    dailyContainer.innerHTML =
        "";


    weeklyContainer.innerHTML =
        "";


    monthlyContainer.innerHTML =
        "";


    const activeIds =
        new Set(
            getActiveHabitIds()
        );


    /*
    Ordine:
    1. attive prima
    2. categoria
    3. nome
    */

    const sortedHabits =
        [...habitLibrary]
            .sort(
                (a, b) => {

                    const activeDifference =
                        Number(
                            activeIds.has(
                                b.id
                            )
                        )
                        -
                        Number(
                            activeIds.has(
                                a.id
                            )
                        );


                    if (
                        activeDifference !==
                        0
                    ) {

                        return activeDifference;

                    }


                    const categoryDifference =
                        a.category.localeCompare(
                            b.category,
                            "it"
                        );


                    if (
                        categoryDifference !==
                        0
                    ) {

                        return categoryDifference;

                    }


                    return a.name.localeCompare(
                        b.name,
                        "it"
                    );

                }
            );


    sortedHabits.forEach(
        habit => {

            const row =
                createLibraryRow(
                    habit
                );


            if (
                habit.frequency ===
                "daily"
            ) {

                dailyContainer.appendChild(
                    row
                );

            }


            if (
                habit.frequency ===
                "weekly"
            ) {

                weeklyContainer.appendChild(
                    row
                );

            }


            if (
                habit.frequency ===
                "monthly"
            ) {

                monthlyContainer.appendChild(
                    row
                );

            }

        }
    );


    const infoText =
        document.querySelector(
            "#page-habits .info-text"
        );


    if (
        infoText
    ) {

        infoText.textContent =
            "Attiva solo le abitudini che vuoi davvero tracciare. Disattivarne una non cancella lo storico già registrato.";

    }

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
            hasTrackedData
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
        values.length ===
        0
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



    /* =========================
       SONNO
    ========================= */

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



    /* =========================
       PASSI
    ========================= */

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



    /* =========================
       LETTURA
    ========================= */

    const readingTotal =
        keys30.reduce(
            (sum, key) => {

                return sum +
                    Number(
                        data.daily[key]
                            ?.reading || 0
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



    /* =========================
       ALLENAMENTI
    ========================= */

    const workouts =
        getHabitById(
            "workouts"
        );


    const workoutsActive =
        getActiveHabitIds()
            .includes(
                "workouts"
            );


    document
        .getElementById(
            "stat-workouts"
        )
        .textContent =
        workoutsActive
            ? `${getHabitValue(
                workouts
            )} / 4`
            : "Disattivato";

}

/* =========================================
   BACKUP & RESTORE — v0.6
========================================= */

function formatBackupDate(isoDate) {

    if (!isoDate) {
        return "Mai";
    }


    const date =
        new Date(isoDate);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
        return "Mai";
    }


    return date.toLocaleString(
        "it-IT",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =========================================
   CREA SEZIONE BACKUP
========================================= */

function createBackupSection() {

    if (
        document.getElementById(
            "momentum-backup-section"
        )
    ) {
        return;
    }


    const habitsPage =
        document.getElementById(
            "page-habits"
        );


    if (!habitsPage) {
        return;
    }


    const section =
        document.createElement(
            "section"
        );


    section.id =
        "momentum-backup-section";


    section.className =
        "info-card backup-card";


    section.innerHTML = `

        <div class="backup-heading">

            <div>

                <p class="mini-label">
                    DATA & BACKUP
                </p>

                <h2>
                    Proteggi i tuoi dati
                </h2>

            </div>

            <span class="backup-icon">
                💾
            </span>

        </div>


        <p class="info-text">

            Esporta periodicamente una copia
            dello storico di Momentum.
            Il backup contiene habit,
            progressi, configurazioni
            e personalizzazioni.

        </p>


        <div class="backup-status">

            <span>
                Ultimo backup
            </span>

            <strong id="last-backup-date">
                Mai
            </strong>

        </div>


        <div class="backup-actions">

            <button
                id="export-backup-button"
                class="primary-backup-button"
                type="button"
            >
                ↓ Esporta backup
            </button>


            <button
                id="import-backup-button"
                class="secondary-backup-button"
                type="button"
            >
                ↑ Importa backup
            </button>

        </div>


        <input
            id="backup-file-input"
            type="file"
            accept=".json,application/json"
            hidden
        >


        <div
            id="backup-message"
            class="backup-message"
            aria-live="polite"
        ></div>

    `;


    habitsPage.appendChild(
        section
    );


    document
        .getElementById(
            "export-backup-button"
        )
        .addEventListener(
            "click",
            exportMomentumBackup
        );


    document
        .getElementById(
            "import-backup-button"
        )
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "backup-file-input"
                    )
                    .click();

            }
        );


    document
        .getElementById(
            "backup-file-input"
        )
        .addEventListener(
            "change",
            importMomentumBackup
        );


    updateBackupStatus();

}


/* =========================================
   AGGIORNA STATO BACKUP
========================================= */

function updateBackupStatus() {

    const element =
        document.getElementById(
            "last-backup-date"
        );


    if (!element) {
        return;
    }


    const lastBackup =
        data.settings
            ?.lastBackupAt;


    element.textContent =
        formatBackupDate(
            lastBackup
        );

}


/* =========================================
   MESSAGGIO BACKUP
========================================= */

function showBackupMessage(
    message,
    type = "success"
) {

    const element =
        document.getElementById(
            "backup-message"
        );


    if (!element) {
        return;
    }


    element.textContent =
        message;


    element.classList.remove(
        "success",
        "error"
    );


    element.classList.add(
        type
    );

}


/* =========================================
   EXPORT
========================================= */

function exportMomentumBackup() {

    const exportedAt =
        new Date()
            .toISOString();


    if (!data.settings) {
        data.settings = {};
    }


    data.settings.lastBackupAt =
        exportedAt;


    saveData();


    const backup = {

        app:
            "Momentum",

        backupVersion:
            1,

        exportedAt,

        storageKey:
            STORAGE_KEY,

        data:
            data

    };


    const json =
        JSON.stringify(
            backup,
            null,
            2
        );


    const blob =
        new Blob(
            [json],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    const date =
        new Date();


    const dateString =
        [
            date.getFullYear(),
            String(
                date.getMonth() + 1
            ).padStart(2, "0"),
            String(
                date.getDate()
            ).padStart(2, "0")
        ].join("-");


    link.href =
        url;


    link.download =
        `momentum-backup-${dateString}.json`;


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );


    updateBackupStatus();


    showBackupMessage(
        "Backup esportato correttamente."
    );

}


/* =========================================
   VALIDAZIONE BACKUP
========================================= */

function isValidMomentumData(
    candidate
) {

    if (
        !candidate ||
        typeof candidate !==
            "object"
    ) {

        return false;

    }


    if (
        !candidate.daily ||
        typeof candidate.daily !==
            "object"
    ) {

        return false;

    }


    if (
        !candidate.weekly ||
        typeof candidate.weekly !==
            "object"
    ) {

        return false;

    }


    if (
        !candidate.monthly ||
        typeof candidate.monthly !==
            "object"
    ) {

        return false;

    }


    return true;

}


/* =========================================
   IMPORT
========================================= */

function importMomentumBackup(
    event
) {

    const input =
        event.target;


    const file =
        input.files?.[0];


    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload =
        () => {

            try {

                const parsed =
                    JSON.parse(
                        reader.result
                    );


                /*
                Supportiamo sia il formato
                nuovo con { data: ... }
                sia un eventuale JSON
                contenente direttamente
                i dati di Momentum.
                */

                const importedData =
                    parsed.data &&
                    typeof parsed.data ===
                        "object"
                        ? parsed.data
                        : parsed;


                if (
                    !isValidMomentumData(
                        importedData
                    )
                ) {

                    throw new Error(
                        "Formato backup non valido."
                    );

                }


                const confirmed =
                    window.confirm(
                        "Importare questo backup?\n\nI dati attualmente presenti in Momentum verranno sostituiti dal contenuto del backup."
                    );


                if (!confirmed) {

                    input.value =
                        "";

                    return;

                }


                if (
                    !importedData.settings
                ) {

                    importedData.settings =
                        {};

                }


                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(
                        importedData
                    )
                );


                showBackupMessage(
                    "Backup importato. Momentum verrà ricaricato."
                );


                setTimeout(
                    () => {

                        window.location.reload();

                    },
                    500
                );

            }
            catch (error) {

                console.error(
                    error
                );


                showBackupMessage(
                    "Impossibile importare il file: backup non valido.",
                    "error"
                );

            }


            input.value =
                "";

        };


    reader.onerror =
        () => {

            showBackupMessage(
                "Errore durante la lettura del file.",
                "error"
            );


            input.value =
                "";

        };


    reader.readAsText(
        file
    );

}

/* =========================================
   START
========================================= */
createEditHabitModal();

createNewHabitModal();

createNewHabitButton();

createBackupSection();

pageSubtitle.textContent =
    todayLabel();


renderTodayHabits();

renderHabitLibrary();

updateScores();

renderCalendar();

renderStats();

saveData();