const lista = document.querySelectorAll('.lista');

function linkAtivo() {
    lista.forEach((item) => item.classList.remove('ativa'));
    this.classList.add('ativa');
};

lista.forEach((item) => item.addEventListener('click', linkAtivo));