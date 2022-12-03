const buttonOn = document.getElementById('btnOn');
const buttonOff = document.getElementById('btnOff');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const resultadoMedia = document.getElementById('resultMedia');
let situacaoFinal = document.getElementById('situacaoFinal');
const body = document.getElementById('body');
const bdark = document.getElementById('bdark');
const bligth = document.getElementById('bligth');
const h1 = document.getElementById('h1');

const calcularMedia = (event) => {
  event.preventDefault();
  resultadoMedia.textContent = (Number(nota1.value) + parseFloat(nota2.value)) / 2;
  meuIf();
};

const meuIf = () => {
  if (parseFloat(resultadoMedia.textContent) >= 7) {
    situacaoFinal.textContent = 'Aprovado';
    situacaoFinal.classList.remove('vermelho');
    situacaoFinal.classList.add('verde');
  } else {
    situacaoFinal.textContent = 'Reprovado';
    situacaoFinal.classList.remove('verde');
    situacaoFinal.classList.add('vermelho');
  }
};

buttonOn.addEventListener('click', calcularMedia);

buttonOff.addEventListener('click', function () {
  resultadoMedia.textContent = 'Média';
  situacaoFinal.textContent = 'Situação Final';
  situacaoFinal.classList.remove('vermelho');
  situacaoFinal.classList.remove('verde');
});

bdark.addEventListener('click', function () {
  body.classList.add('dark');
  h1.classList.add('branco');
});

bligth.addEventListener('click', function () {
  body.classList.remove('dark');
  h1.classList.remove('branco');
});
