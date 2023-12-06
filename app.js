const questions = [
  {
    id: 1,
    quest: "Vocês aceitam a maioria das bandeiras de cartões?",
    info: "Sim, aceitamos todas as bandeiras de cartões.",
  },
  {
    id: 2,
    quest: "Vocês suportam fazendeiros locais?",
    info: "Sim, todos os produtos são comprados de fazendeiros locais.",
  },
  {
    id: 3,
    quest: "Vocês usam ingredientes orgânicos?",
    info: "Sim, todos os produtos são de origem orgânica.",
  },
];


window.addEventListener("DOMContentLoaded", () => {
  displayQuestionsItens(questions);
});

const faqContainer = document.querySelector(".faq-container");

function displayQuestionsItens(questions) {
  const displayQuestions = questions
    .map((item) => {
      return `<article class="question">
                <div class="question-header">
                  <p>${item.quest}</p>
                  <button class="btn question-btn">
                    <span class="plusBtn"><i class="fa-solid fa-plus"></i></span>
                    <span class="minusBtn"><i class="fa-solid fa-minus"></i></span>
                  </button>
                </div>
                <p class="description">${item.info}</p>
              </article>`;
    })
    .join(" ");

  faqContainer.innerHTML += displayQuestions;

  const questionsItens = document.querySelectorAll(".question");

  questionsItens.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
      question.classList.toggle("show-text");
    });
  });
}
