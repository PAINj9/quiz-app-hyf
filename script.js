
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

// MATH BUTTON
// MATH BUTTON
// MATH BUTTON
// MATH BUTTON
// MATH BUTTON

document.getElementById('math-btn').addEventListener('click', async () => {
  try {
    // Hacemos la solicitud para obtener las preguntas desde el archivo JSON
    const respuesta = await fetch('https://raw.githubusercontent.com/PAINj9/quiz-app-hyf/refs/heads/main/math.json');
    
    if (!respuesta.ok) {
      throw new Error('No se pudo obtener las preguntas de Math');
    }

    // Convertimos la respuesta en JSON
    const preguntas = await respuesta.json();

    // Elegimos una pregunta al azar
    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];

    // Llenamos la pregunta y respuestas
    document.getElementById('question').value = preguntaAleatoria.question;
    document.getElementById('answer1').value = preguntaAleatoria.answers[0];
    document.getElementById('answer2').value = preguntaAleatoria.answers[1];
    document.getElementById('answer3').value = preguntaAleatoria.answers[2];
    document.getElementById('answer4').value = preguntaAleatoria.answers[3];

    // Desmarcar cualquier opción seleccionada antes
    document.querySelectorAll('input[name="correct-answer"]').forEach(input => input.checked = false);

    // Marcar la respuesta correcta (sumando 1 porque los índices de array van de 0-3 pero los radio buttons son 1-4)
    const correctIndex = preguntaAleatoria.correctAnswer + 1;
    document.getElementById(`correct-answer${correctIndex}`).checked = true;

  } catch (error) {
    console.error('Error:', error);
  }
});

  

// GEOGRAPHY BUTTON
// GEOGRAPHY BUTTON
// GEOGRAPHY BUTTON
// GEOGRAPHY BUTTON
// GEOGRAPHY BUTTON


document.getElementById('geography-btn').addEventListener('click', async () => {
  try {
    // Realizamos el fetch al archivo JSON
    const response = await fetch('https://raw.githubusercontent.com/PAINj9/quiz-app-hyf/refs/heads/main/geography.json');
    
    if (!response.ok) {
      throw new Error('No se pudo obtener las preguntas de Geography');
    }

    // Parseamos la respuesta a JSON
    const questions = await response.json();

    // Seleccionamos una pregunta aleatoria
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Llenamos el formulario con la pregunta y respuestas
    document.getElementById('question').value = randomQuestion.question;
    document.getElementById('answer1').value = randomQuestion.answers[0];
    document.getElementById('answer2').value = randomQuestion.answers[1];
    document.getElementById('answer3').value = randomQuestion.answers[2];
    document.getElementById('answer4').value = randomQuestion.answers[3];

    // Desmarcar cualquier opción seleccionada antes
    document.querySelectorAll('input[name="correct-answer"]').forEach(input => input.checked = false);

    // Ajustamos el índice de la respuesta correcta sumando 1
    const correctIndex = randomQuestion.correctAnswer + 1;

    // Marcamos la respuesta correcta
    document.getElementById(`correct-answer${correctIndex}`).checked = true;

  } catch (error) {
    console.error('Error:', error);
  }
});


// HISTORY BUTTON
// HISTORY BUTTON
// HISTORY BUTTON
// HISTORY BUTTON
// HISTORY BUTTON


document.getElementById('history-btn').addEventListener('click', async () => {
  try {
    // Realizamos el fetch al archivo JSON
    const response = await fetch('https://raw.githubusercontent.com/PAINj9/quiz-app-hyf/refs/heads/main/history.json');
    
    if (!response.ok) {
      throw new Error('No se pudo obtener las preguntas de History');
    }

    // Parseamos la respuesta a JSON
    const questions = await response.json();

    // Seleccionamos una pregunta aleatoria
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Llenamos el formulario con la pregunta y sus respuestas
    document.getElementById('question').value = randomQuestion.question;
    document.getElementById('answer1').value = randomQuestion.answers[0];
    document.getElementById('answer2').value = randomQuestion.answers[1];
    document.getElementById('answer3').value = randomQuestion.answers[2];
    document.getElementById('answer4').value = randomQuestion.answers[3];

    // Desmarcar cualquier opción seleccionada antes
    document.querySelectorAll('input[name="correct-answer"]').forEach(input => input.checked = false);

    // Ajustamos el índice de la respuesta correcta sumando 1
    const correctIndex = randomQuestion.correctAnswer + 1;

    // Marcamos la respuesta correcta
    document.getElementById(`correct-answer${correctIndex}`).checked = true;

  } catch (error) {
    console.error('Error:', error);
  }
});


// SCIENCE BUTTON
// SCIENCE BUTTON
// SCIENCE BUTTON
// SCIENCE BUTTON
// SCIENCE BUTTON


document.getElementById('science-btn').addEventListener('click', async () => {
  try {
    // Realizamos el fetch al archivo JSON
    const response = await fetch('https://raw.githubusercontent.com/PAINj9/quiz-app-hyf/refs/heads/main/science.json');
    
    if (!response.ok) {
      throw new Error('No se pudo obtener las preguntas de Science');
    }

    // Convertimos la respuesta a JSON
    const questions = await response.json();

    // Seleccionamos una pregunta aleatoria
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    // Llenamos el formulario con la pregunta y respuestas
    document.getElementById('question').value = randomQuestion.question;
    document.getElementById('answer1').value = randomQuestion.answers[0];
    document.getElementById('answer2').value = randomQuestion.answers[1];
    document.getElementById('answer3').value = randomQuestion.answers[2];
    document.getElementById('answer4').value = randomQuestion.answers[3];

    // Desmarcar cualquier opción seleccionada antes
    document.querySelectorAll('input[name="correct-answer"]').forEach(input => input.checked = false);

    // Ajustamos el índice de la respuesta correcta sumando 1
    const correctIndex = randomQuestion.correctAnswer + 1;

    // Marcamos la respuesta correcta
    document.getElementById(`correct-answer${correctIndex}`).checked = true;

  } catch (error) {
    console.error('Error:', error);
  }
});


  
// ADD QUESTION BUTTON
// ADD QUESTION BUTTON
// ADD QUESTION BUTTON
// ADD QUESTION BUTTON
// ADD QUESTION BUTTON


document.getElementById("add-question-btn").addEventListener("click", function() {



// JSON








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
 
   

  
  // obtener el texto de la pregunta y las respuestas

  const questionText = document.getElementById("question").value;
  const answer1 = document.getElementById("answer1").value;
  const answer2 = document.getElementById("answer2").value;
  const answer3 = document.getElementById("answer3").value;
  const answer4 = document.getElementById("answer4").value;
  
  // Mostrar los botones al hacer clic en Add Question

  document.getElementById("check-answer-btn").classList.remove("hidden");
  document.getElementById("shuffle-options-btn").classList.remove("hidden");

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

  // limpia opciones

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


   // Mostrar el temporizador y comenzar la cuenta regresiva
   startCountdown(10); // 10 segundos

  
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



// CHECK ANSWER BUTTON
// CHECK ANSWER BUTTON
// CHECK ANSWER BUTTON
// CHECK ANSWER BUTTON
// CHECK ANSWER BUTTON



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


// SHUFFLE OPTIONS BUTTON
// SHUFFLE OPTIONS BUTTON
// SHUFFLE OPTIONS BUTTON
// SHUFFLE OPTIONS BUTTON
// SHUFFLE OPTIONS BUTTON

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


// RESTART BUTTON
// RESTART BUTTON
// RESTART BUTTON
// RESTART BUTTON
// RESTART BUTTON

document.querySelectorAll(".Restart").forEach(button => {
  button.addEventListener("click", function () {
    location.reload(); // Recarga la página
  });
});









 
  


 






