let offset = 0; // Положение от левого края
const slide = document.querySelector('.news__card-container');
const buttonNext = document.querySelector('.news__button_next');
const buttonPrevious = document.querySelector('.news__button_previous');

function buttonDisable() {
  if (offset >= 0) {
    buttonPrevious.classList.add('news__button_previous_disable');
    buttonPrevious.disabled = true;
  } else {
    buttonPrevious.classList.remove('news__button_previous_disable');
    buttonPrevious.disabled = false;
  }
  const maxOffset = -(slide.childElementCount - 3) * 400;
  if (offset <= maxOffset) {
    buttonNext.classList.add('news__button_next_disable');
    buttonNext.disabled = true;
  } else {
    buttonNext.classList.remove('news__button_next_disable');
    buttonNext.disabled = false;
  }
}

function moveRight() {
  offset -= 400;
  slide.style.left = `${offset}px`;
  buttonDisable();
}


function moveLeft() {
  offset += 400;
  slide.style.left = `${offset}px`;
  buttonDisable();
}

buttonPrevious.addEventListener('click', moveLeft);
buttonNext.addEventListener('click', moveRight);
