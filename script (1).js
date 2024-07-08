const quize = [
    {
        question: "Name the first Battle between Muslims and Kafirs in Which Muhammad(PBUH) took part?",
        text1: "Ghazwa- Uhud",
        text2: "Ghazwa- Khyber",
        text3: "Ghazwa-e- Abwa",
        text4: "Ghazwa- Badr",
        answer: "Ghazwa-e- Abwa",
        
    },
    {
        question: "Who were Ashaab-e-Suffah:",
        text1: "Ansaar(RA) who stayed near the Masjid-e-Quba",
        text2: "Ansaar(RA) who stayed near the Masjid-e-Nabvi",
        text3: "Mahajirs(RA) who stayed near the Masjid-e-Nabivi",
        text4: "None of these",
        answer: "Mahajirs(RA) who stayed near the Masjid-e-Nabivi",
    },
    {
        question: "Who are called Umm-Ul-Momineen",
        text1: "The sisters of the Holy Prophet (PBUH)",
        text2: "The wife of the Holy Prophet (PBUH)",
        text3: "The mothers of the Islamic community",
        text4: "The female scholars of early Islam",
        answer: "The wife of the Holy Prophet (PBUH)",
    },
    {
        question: "Name the first Muslims who faced the first-ever ordinance of Qazf?",
        text1: "Mistah bin Uthatha",
        text2: "Hannah bint Jahsh",
        text3: "Hassan bin Thabit",
        text4: "All of these",
        answer: "All of these",
    },
    {
        question: "What was the first written constitution of the world",
        text1: "Misaq e Madina",
        text2: "Magna carta",
        text3: "Usa constitution",
        text4: "Non of these",
        answer: "Misaq e Madina",
    },
    {
        question: "Treaty of Hudaybiyyah took place in March 628________.",
        text1: "RAJAB 6 AH",
        text2: "shaban 6 AH",
        text3: "RAMAZAN 6 AH",
        text4: "Dhu al-Qi’dah 6 AH",
        answer: "Dhu al-Qi’dah 6 AH",
        
    }
];
const questiones = document.getElementById("question");
const container = document.getElementById("container");
const options = document.getElementById("options");

const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const nextbtn = document.getElementById("next-btn");
const answers = document.querySelectorAll(".answers");

let currentindex = 0;
let score = 0;
questiones.textContent = quize[currentindex].question;
option1.textContent = quize[currentindex].text1;
option2.textContent = quize[currentindex].text2;
option3.textContent = quize[currentindex].text3;
option4.textContent = quize[currentindex].text4;

nextbtn.addEventListener("click", () => {
    const answerchecked = document.querySelector(`input[type="radio"]:Checked`);
  
    if (answerchecked === null) {
        alert("please select one answer")
    }
    else {
        if (answerchecked.nextSibling.textContent === quize[currentindex].answer) {
            score++;
            
           
        }
        currentindex++
        if (currentindex < quize.length) {
            questiones.textContent = quize[currentindex].question;
            option1.textContent = quize[currentindex].text1;
            option2.textContent = quize[currentindex].text2;
            option3.textContent = quize[currentindex].text3;
            option4.textContent = quize[currentindex].text4;
            
        }
        else{
         var scores = `your score  is  out of  ${quize.length} / ${score} `  
          questiones.innerHTML = scores
          options.innerHTML = "try again goog lock"
        }
    }
    
})


