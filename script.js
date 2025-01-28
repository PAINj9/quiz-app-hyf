<<<<<<< Updated upstream
=======
  // // Función para solicitar el nombre al usuario Inspect, Application, Local Storage
  // // Inspect, Application, Local Storage
  // // Inspect, Application, Local Storage


  // function askUserName() {
  //   let userName = prompt("Please enter your name:");
  
  //   // valido que no exista el nombre
  //   while (localStorage.getItem(userName)) {
  //     userName = prompt("That name is already taken. Please choose another name:");
  //   }
  
  //   // lo guardo
  //   localStorage.setItem(userName, true);
  
  //   document.querySelector('h1').textContent = "Welcome to Quiz Your Future, " + userName;
  
  //   alert("Welcome, " + userName);
  // }
  
  // askUserName();

  
  
>>>>>>> Stashed changes
// función para agregar una pregunta con respuestas
document.getElementById("add-question-btn").addEventListener("click", function() {

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

  if (!correctAnswer) { // si no seleccionas nada, hace esto 
    alert("Por favor selecciona una respuesta correcta.");
    return;
  }

  if (!questionText || !answer1 || !answer2 || !answer3 || !answer4) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // crear la estructura de la pregunta
  const newQuestion = {
    question: questionText, // eesto es lo que el usuario ingresa como pregunta
    answers: [answer1, answer2, answer3, answer4], //esto son las respuestas que el usuario escribe
    correctAnswer: correctAnswer.value // esta es la opcion correcta, que se selecciona con el boton
  };

  //mostrar la nueva pregunta en el contenedor
  document.getElementById("display-question").textContent = newQuestion.question; //muestra la pregunta que hiciste antes xD

  // limpia opcione
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  newQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.addEventListener("click", function() {
      selectAnswer(index);
    });

    if (index + 1 == newQuestion.correctAnswer) {
      li.dataset.correct = true;
    }

    optionsList.appendChild(li);
  });

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
  listItems.forEach(item => item.classList.remove("selected"));
  selectedAnswer = answerId;
  listItems[answerId].classList.add("selected");
}

// verificar la respuesta
document.getElementById("check-answer-btn").addEventListener("click", function() {
  if (selectedAnswer === null) {
    alert("Please, select an answer");
    return;
  }

  const correctAnswer = document.querySelector('li[data-correct="true"]');

  if (selectedAnswer == Array.from(correctAnswer.parentNode.children).indexOf(correctAnswer)) {
    alert("¡Correct Answer!");
  } else {
    alert("Wrong Answer. The correct answer was: " + correctAnswer.textContent);
  }
});

// mezclar las opciones
document.getElementById("shuffle-options-btn").addEventListener("click", function() {
  const optionsList = document.getElementById("options-list");
  const listItems = Array.from(optionsList.children);

  listItems.sort(() => Math.random() - 0.5);

  optionsList.innerHTML = "";
  listItems.forEach(item => optionsList.appendChild(item));

  listItems.forEach((item, index) => {
    item.addEventListener("click", function() {
      selectAnswer(index);
    });
  });
});

  // RELLENAR RESPUESTAS AUTOMATICAMENTE
  // RELLENAR RESPUESTAS AUTOMATICAMENTE
  // RELLENAR RESPUESTAS AUTOMATICAMENTE
  // RELLENAR RESPUESTAS AUTOMATICAMENTE


  document.getElementById("fill-example-btn").addEventListener("click", function() {
    const questions = [
      {
        question: "Cuánto es 2 + 2?",
        answers: ["1", "2", "4", "50"],
        correctAnswer: 2 
      },
      {
        question: "Cuánto es 3 + 5?",
        answers: ["6", "7", "8", "9"],
        correctAnswer: 2
      },
      {
        question: "Cuánto es 10 - 3?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: 2 
      },
      {
        question: "Who created this project?",
        answers: ["?", "Juani<3", "?", "?"],
        correctAnswer: 1 
      }
    ];
  
    // pregunta aleatoria
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
  
    //llenar la pregunta y respuestas
    document.getElementById("question").value = selectedQuestion.question;
    document.getElementById("answer1").value = selectedQuestion.answers[0];
    document.getElementById("answer2").value = selectedQuestion.answers[1];
    document.getElementById("answer3").value = selectedQuestion.answers[2];
    document.getElementById("answer4").value = selectedQuestion.answers[3];
  
    // respuesta correcta
    document.getElementById("correct-answer" + (selectedQuestion.correctAnswer + 1)).checked = true;
  });
  


  // RECARGAR PAGINA
  // RECARGAR PAGINA
  // RECARGAR PAGINA

document.getElementById("Restart").addEventListener("click", function() {
  location.reload(); // Recarga la página
});


  //DESPUES DE TOCAR ADD QUESTION
  //DESPUES DE TOCAR ADD QUESTION
  //DESPUES DE TOCAR ADD QUESTION


document.getElementById("add-question-btn").addEventListener("click", function() {
  // Mostrar los botones al hacer clic en Add Question
  document.getElementById("check-answer-btn").classList.remove("hidden");
  document.getElementById("shuffle-options-btn").classList.remove("hidden");
});


  //CONTADOR
  //CONTADOR
  //CONTADOR

  document.getElementById("add-question-btn").addEventListener("click", function() {
    // Mostrar el temporizador y comenzar la cuenta regresiva
    startCountdown(10); // 10 segundos
  });
  
  function startCountdown(seconds) {
    // Obtener el elemento para mostrar el temporizador
    const countdownElement = document.getElementById("countdown");
    let timeRemaining = seconds;
  
    // Mostrar el tiempo inicial
    countdownElement.textContent = `Time left: ${timeRemaining} seconds`;
  
    // Crear un intervalo que actualiza cada segundo
    const interval = setInterval(function() {
      timeRemaining--; // Decrementar el tiempo restante
      countdownElement.textContent = `Time left: ${timeRemaining} seconds`;
  
      // Detener la cuenta regresiva cuando llegue a 0
      if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownElement.textContent = "¡Time is over!";
      }
    }, 1000);
  }
  


  // Función para solicitar el nombre al usuario Inspect, Application, Local Storage
  // Inspect, Application, Local Storage
  // Inspect, Application, Local Storage
  // Inspect, Application, Local Storage

function askUserName() {
  let userName = prompt("Please enter your name:");

  // Si el nombre existe en el Local Storage, pedir otro nombre
  while (localStorage.getItem(userName)) {
    userName = prompt("That name is already taken. Please choose another name:");
  }

  // Guardar el nombre en el Local Storage
  localStorage.setItem(userName, true);

  
// Actualizar el mensaje de bienvenida
document.querySelector('h1').textContent = `Welcome to Quiz Your Future, ${userName} :)`;


  // Mostrar un mensaje de bienvenida
  alert(`Welcome, ${userName}!`);
}

// Llamar a la función al cargar la página
askUserName();






