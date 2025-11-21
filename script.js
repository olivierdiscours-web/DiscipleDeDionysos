
// Score stocké localement
if (!localStorage.score) localStorage.score = 0;

// Réponses correctes
const answers = {
    1: "vin",
    2: "pépin",
    3: "barrique",
    4: "bouteille",
    5: "millésime",
    6: "vigne",
    7: "dégustation",
    8: "équilibre",
    9: "eau-de-vie",
    10: "bouchon"
};

// Son de validation
function playSound() {
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3");
    audio.play();
}

// Vérification
function checkAnswer(n) {
    let val = document.getElementById("answer").value.toLowerCase().trim();
    if (val === answers[n]) {
        playSound();
        localStorage.score = parseInt(localStorage.score) + 1;
        document.getElementById("feedback").innerHTML = "✔ Bonne réponse ! Score : " + localStorage.score;
    } else {
        document.getElementById("feedback").innerHTML = "❌ Mauvaise réponse…";
    }
}
