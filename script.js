// función para agregar una pregunta con respuestas
document.getElementById("add-question-btn").addEventListener("click", function() {
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
