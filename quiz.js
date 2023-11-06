const sortable = document.getElementById('sortable');
const items = Array.from(sortable.children);
items.forEach((item, index) => {
  item.dataset.position = index + 1;
  sortable.appendChild(item);
});

items.forEach((item) => {
  item.draggable = true;
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.position);
  });
});

sortable.addEventListener('dragover', (e) => {
  e.preventDefault();
});

sortable.addEventListener('drop', (e) => {
  e.preventDefault();
  const fromPosition = e.dataTransfer.getData('text/plain');
  const toPosition = e.target.dataset.position;
  const fromElement = items.find((item) => item.dataset.position === fromPosition);
  const toElement = items.find((item) => item.dataset.position === toPosition);

  sortable.insertBefore(fromElement, toElement.nextSibling);

  items.forEach((item, index) => {
    item.dataset.position = index + 1;
  });
});


class Answers {
    constructor(answers) {
        this.answers = answers;
    }

    isAnswersCorrect() {
        if (this.answers[0] === "2015" && this.answers[1] === "5" && this.answers[2] === "1 2 3") {
            return true;
        }
        return false;
    }
}

let answers = [];
const quizForm = document.getElementById('quiz');
const resultDiv = document.getElementById('result');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);
    let currentOrder = items.map((item) => item.dataset.position).join(' ');
    let answers = [formData.get('q1'), formData.get('q2'), currentOrder];
    let quiz = new Answers(answers);
    let score = quiz.isAnswersCorrect();

    console.log(currentOrder)
    if (score === true) {
        resultDiv.textContent = `Вы ответили правильно на все вопросы! Можете отправить скрин этого экрана при заказе и получить свой бонус!`;
        audio3.play();
    } else {
        resultDiv.textContent = `Еще есть шанс исправить свою ошибку! Попробуйте еще раз!`;
        audio2.play();
    }
});


let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // если у нас есть подсказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...создадим элемент для подсказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'btnTooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };


const flowerTooltip = document.getElementById('tooltip-popup');
const tooltipPopup = document.querySelector('#tooltip');

flowerTooltip.addEventListener('mouseover', () => {
    tooltipPopup.style.opacity = 1;
});

flowerTooltip.addEventListener('mouseout', () => {
    tooltipPopup.style.opacity = 0;
});

