// =======================
// DATA
// =======================
const categories = {
  webdev:{
    name:"Web Development",
    icon:"fa-code",
    questions:[
      {q:"Which tag is used for semantic navigation?",a:["<nav>","<div>","<span>","<section>"],c:0},
      {q:"Flexbox is used for?",a:["Layout","Database","Logic","API"],c:0},
      {q:"CSS Grid is?",a:["1D","2D","None","JS"],c:1},
      {q:"Meta viewport is for?",a:["SEO","Responsive design","Script","Title"],c:1}
    ]
  },

  javascript:{
    name:"JavaScript",
    icon:"fa-js",
    questions:[
      {q:"Which method converts JSON to object?",a:["parse()","stringify()","convert()","toObj()"],c:0},
      {q:"Closure means?",a:["Scope access","Loop","Condition","None"],c:0},
      {q:"Promise is?",a:["Sync","Async","Loop","Var"],c:1},
      {q:"DOM stands for?",a:["Document Object Model","Data Model","None","Doc Map"],c:0}
    ]
  },

  python:{
    name:"Python",
    icon:"fa-python",
    questions:[
      {q:"Which keyword creates function?",a:["def","fun","function","lambda"],c:0},
      {q:"List comprehension is?",a:["Loop shortcut","Class","API","None"],c:0},
      {q:"Python is?",a:["Compiled","Interpreted","None","Markup"],c:1},
      {q:"Tuple is?",a:["Mutable","Immutable","None","Loop"],c:1}
    ]
  }
};

// =======================
// STATE
// =======================
let currentCategory;
let questions = [];
let index = 0;
let score = 0;
let answered = false;

let timer;
let timeLeft = 15;


// =======================
// START QUIZ
// =======================
function startQuiz(){
  const name = document.getElementById("username").value.trim();

  if(!name){
    alert("Please enter your name");
    return;
  }

  document.getElementById("player-name").textContent = name;

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("category-screen").classList.remove("hidden");

  createCategories();
}


// =======================
// CATEGORY RENDER
// =======================
function createCategories(){
  const grid = document.getElementById("category-grid");
  grid.innerHTML = "";

  Object.keys(categories).forEach(key=>{
    const cat = categories[key];

    const card = document.createElement("div");
    card.className = "category-card";

    card.innerHTML = `
      <i class="fab ${cat.icon}"></i>
      <h3>${cat.name}</h3>
    `;

    card.onclick = ()=>selectCategory(key);

    grid.appendChild(card);
  });
}


// =======================
// SELECT CATEGORY
// =======================
function selectCategory(key){
  currentCategory = categories[key];
  questions = currentCategory.questions;

  index = 0;
  score = 0;

  document.getElementById("category-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  loadQuestion();
}


// =======================
// TIMER
// =======================
function startTimer(){
  clearInterval(timer);

  timeLeft = 15;
  document.getElementById("timer").innerText = timeLeft;

  timer = setInterval(()=>{
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if(timeLeft <= 0){
      clearInterval(timer);

      autoRevealAnswer();
      setTimeout(nextQuestion, 800);
    }
  },1000);
}


// =======================
// LOAD QUESTION
// =======================
function loadQuestion(){
  answered = false;

  startTimer();

  const q = questions[index];
  document.getElementById("question").innerText = q.q;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.a.forEach((ans,i)=>{
    const btn = document.createElement("button");

    btn.innerHTML = `
      <strong>${String.fromCharCode(65+i)}.</strong> ${ans}
    `;

    btn.onclick = ()=>selectAnswer(i, btn);

    answers.appendChild(btn);
  });

  updateProgress();
}


// =======================
// SELECT ANSWER
// =======================
function selectAnswer(i,btn){
  if(answered) return;

  answered = true;
  clearInterval(timer);

  const correct = questions[index].c;
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach((b,idx)=>{
    if(idx === correct){
      b.classList.add("correct");
    } else if(idx === i){
      b.classList.add("wrong");
    }

    b.disabled = true;
  });

  if(i === correct) score++;
}


// =======================
// AUTO REVEAL (TIME OUT)
// =======================
function autoRevealAnswer(){
  if(answered) return;

  const correct = questions[index].c;
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach((b,idx)=>{
    if(idx === correct){
      b.classList.add("correct");
    }
    b.disabled = true;
  });
}


// =======================
// NAVIGATION
// =======================
function nextQuestion(){
  if(!answered){
    alert("Please select an answer first");
    return;
  }

  if(index < questions.length - 1){
    index++;
    loadQuestion();
  } else {
    showResult();
  }
}

function previousQuestion(){
  if(index > 0){
    index--;
    loadQuestion();
  }
}


// =======================
// PROGRESS
// =======================
function updateProgress(){
  const progress = ((index + 1) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = progress + "%";
}


// =======================
// RESULT
// =======================
function showResult(){
  clearInterval(timer);

  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  document.getElementById("final-score").innerText =
    `${score}/${questions.length}`;

  const percent = (score / questions.length) * 100;

  let text = "";
  let cls = "";

  if(percent >= 85){
    text = "Excellent Performance";
    cls = "excellent";
  }
  else if(percent >= 70){
    text = "Very Good";
    cls = "good";
  }
  else if(percent >= 50){
    text = "Average";
    cls = "average";
  }
  else{
    text = "Needs Improvement";
    cls = "bad";
  }

  const perf = document.getElementById("performance-text");
  perf.innerText = text;
  perf.className = "performance " + cls;
}


// =======================
// RESET / HOME
// =======================
function goHome(){
  location.reload();
}

function restartQuiz(){
  location.reload();
}