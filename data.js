// Cargar el JSON (puedes usar fetch para cargarlo desde un servidor o GitHub)

fetch('https://raw.githubusercontent.com/tu-usuario/mi-repositorio/main/questions.json')
  .then(response => response.json())
  .then(questions => {
    // Tu lógica aquí
  });
    // RELLENAR RESPUESTAS AUTOMATICAMENTE
    document.getElementById("fill-example-btn").addEventListener("click", function() {
      // Pregunta aleatoria
      const randomIndex = Math.floor(Math.random() * questions.length);
      const selectedQuestion = questions[randomIndex];

      // Llenar la pregunta y respuestas
      document.getElementById("question").value = selectedQuestion.question;
      document.getElementById("answer1").value = selectedQuestion.answers[0];
      document.getElementById("answer2").value = selectedQuestion.answers[1];
      document.getElementById("answer3").value = selectedQuestion.answers[2];
      document.getElementById("answer4").value = selectedQuestion.answers[3];

      // Respuesta correcta
      document.getElementById("correct-answer" + (selectedQuestion.correctAnswer + 1)).checked = true;
    });
  
  .catch(error => console.error('Error cargando el JSON:', error));