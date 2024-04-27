const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const main = document.querySelector('main');
const left = document.getElementById('left');
const right = document.getElementById('right');

left.addEventListener('mouseover', () => {
  main.classList.add('active-left');
});
left.addEventListener('mouseout', () => {
  main.classList.remove('active-left');
});

right.addEventListener('mouseover', () => {
  main.classList.add('active-right');
});
right.addEventListener('mouseout', () => {
  main.classList.remove('active-right');
});
