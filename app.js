const buttons = document.querySelectorAll(".faq__btn");
const answers = document.querySelectorAll(".faq__answer-container");
const faqs = document.querySelectorAll(".faq__question");

let arrayAnswers = Array.from(answers);
let arrayFaq = Array.from(faqs);

buttons.forEach((button, key) => {
  button.addEventListener("click", () => {
    // include all the elements except the one clicked on
    let filteredAnswer = arrayAnswers.filter((value, index) => key !== index);
    let filteredFaq = arrayFaq.filter((value, index) => key !== index);

    if (!button.parentNode.classList.contains("open")) {
      filteredAnswer.forEach((item) => {
        item.classList.remove("active");

        button.parentNode.classList.add("open");

        arrayAnswers[key].classList.add("active");

        filteredFaq.forEach((item) => {
          item.classList.remove("open");
        });
      });
    } else {
      button.parentNode.classList.remove("open");
      arrayAnswers[key].classList.remove("active");
    }
  });
});
