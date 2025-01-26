  // Función para solicitar el nombre al usuario Inspect, Application, Local Storage
  // Inspect, Application, Local Storage
  // Inspect, Application, Local Storage


  function askUserName() {
    let userName = prompt("Please enter your name:");
  
    // valido que no exista el nombre
    while (localStorage.getItem(userName)) {
      userName = prompt("That name is already taken. Please choose another name:");
    }
  
    // lo guardo
    localStorage.setItem(userName, true);
  
    document.querySelector('h1').textContent = "Welcome to Quiz Your Future, " + userName;
  
    alert("Welcome, " + userName);
  }
  
  askUserName();
  

// función para agregar una pregunta con respuestas
document.getElementById("add-question-btn").addEventListener("click", function () {
  const questionInput = document.getElementById("question");

  if (questionInput.value === "") {
    alert("Please fill the camps");
    return;
  }

  // ESTO OCULTA LAS PREGUNTAS CUANDO TOCAS EL BOTON

  document.getElementById("question-form").style.display = "none";

  // Ocultar el formulario con una transición
  const questionForm = document.getElementById("question-form");
  questionForm.classList.add("hidden");

  // Mostrar los botones y respuestas con una transición
  const quizDisplay = document.querySelector(".quiz-display");
  quizDisplay.classList.add("show");

  // Mostrar los botones de Check Answer y Shuffle Options
  document.getElementById("check-answer-btn").classList.remove("hidden");
  document.getElementById("shuffle-options-btn").classList.remove("hidden");

  // Iniciar la cuenta regresiva
  startCountdown(10); // 10 segundos

  // obtener el texto de la pregunta y las respuestas
  const questionText = document.getElementById("question").value;
  const answer1 = document.getElementById("answer1").value;
  const answer2 = document.getElementById("answer2").value;
  const answer3 = document.getElementById("answer3").value;
  const answer4 = document.getElementById("answer4").value;

  // agarra la respuesta que seleccionas con el input
  const correctAnswer = document.querySelector('input[name="correct-answer"]:checked');


  // crear la estructura de la pregunta
  
  const newQuestion = {
    question: questionText, // esto es lo que el usuario ingresa como pregunta
    answers: [answer1, answer2, answer3, answer4], // esto son las respuestas que el usuario escribe
    correctAnswer: correctAnswer.value, // esta es la opcion correcta, que se selecciona con el boton
  };

  // mostrar la nueva pregunta en el contenedor
  document.getElementById("display-question").textContent = newQuestion.question; // muestra la pregunta que hiciste antes xD


  

  // habilita botones
  document.getElementById("check-answer-btn").disabled = false;
  document.getElementById("shuffle-options-btn").disabled = false;

  // limpiar los campos
  document.getElementById("question").value = "";
  document.getElementById("answer1").value = "";
  document.getElementById("answer2").value = "";
  document.getElementById("answer3").value = "";
  document.getElementById("answer4").value = "";
  document.querySelector('input[name="correct-answer"]:checked').checked = false;
});

// seleccionar una respuesta
let selectedAnswer = null;
function selectAnswer(answerId) {
  const listItems = document.querySelectorAll("#options-list li");

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("selected");
  }

  selectedAnswer = answerId;

  listItems[answerId].classList.add("selected");
}


// Verificar la respuesta

document.getElementById("check-answer-btn").addEventListener("click", function () {
  if (selectedAnswer === null) {
    alert("Please, select an answer");
    return;
  }
  
  const optionsList = document.querySelectorAll("#options-list li");

  if (optionsList[selectedAnswer].dataset.correct === "true") {
    alert("¡Correct Answer!");
    stopCountdown(); 
  } else {
    alert("Wrong Answer. Try again");
  }
});


document.getElementById("shuffle-options-btn").addEventListener("click", function () {
  const optionsList = document.getElementById("options-list");
  const listItems = optionsList.children; 

  const itemsArray = [];
  for (let i = 0; i < listItems.length; i++) {
    itemsArray.push(listItems[i]);
  }

  itemsArray.sort(function () {
    return Math.random() - 0.5;
  });

  optionsList.innerHTML = "";
  for (let i = 0; i < itemsArray.length; i++) {
    optionsList.appendChild(itemsArray[i]);
  }

  for (let i = 0; i < itemsArray.length; i++) {
    itemsArray[i].addEventListener("click", function () {
      selectAnswer(i);
    });
  }
});


// RECARGAR PAGINA
// RECARGAR PAGINA
// RECARGAR PAGINA
const restartButtons = document.querySelectorAll(".restart-btn");

for (let i = 0; i < restartButtons.length; i++) {
  restartButtons[i].addEventListener("click", function () {
    location.reload(); // Recarga la página
  });
}


// CONTADOR
// CONTADOR
// CONTADOR
let countdownInterval;
function startCountdown(seconds) {
  // Obtener el elemento para mostrar el temporizador
  const countdownElement = document.getElementById("countdown");
  let timeRemaining = seconds;

  // Mostrar el tiempo inicial
  countdownElement.textContent = "Time left: " + timeRemaining + " seconds";

  // Crear un intervalo que actualiza cada segundo
  countdownInterval = setInterval(function () {
    timeRemaining--; // Decrementar el tiempo restante
    countdownElement.textContent = "Time left: " + timeRemaining + " seconds";

    // Detener la cuenta regresiva cuando llegue a 0
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "¡Time is over!";
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}


  // limpia opciones
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  newQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.onclick = () => selectAnswer(index);  
    if (index + 1 == newQuestion.correctAnswer) li.dataset.correct = true;
    optionsList.appendChild(li);
  });