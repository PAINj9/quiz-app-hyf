  // RELLENAR RESPUESTAS AUTOMATICAMENTE
  
  document.getElementById("fill-example-btn").addEventListener("click", function() {
    const questions = [
      {
        question: "2 + 2?",
        answers: ["1", "2", "4", "50"],
        correctAnswer: 2 
      },
      {
        question: "3 + 5?",
        answers: ["6", "7", "8", "9"],
        correctAnswer: 2
      },
      {
        question: "10 - 3?",
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