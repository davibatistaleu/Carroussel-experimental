const tamanhoDeUmaImagemApenas = document.querySelector(".carroussel-display").clientWidth;
const quantidadeDeImagens = document.querySelectorAll(".carroussel-display").length - 1;
const btn = document.querySelector("#bounce")

const debounce = (callback, time) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, time);
  };
}

const debounceCarrousselButtons = debounce((tarefa) => {
  Carroussel[tarefa]();
}, 350);

function controleDoCarroussel(tarefa) {
  debounceCarrousselButtons(tarefa)
}

const Carroussel = {
  imagemAtual: 0,
  coordenadaDaImagemNoScroll: 0,
  proximaImagem() {
    if (this.imagemAtual < quantidadeDeImagens && this.imagemAtual >= 0) {
      this.imagemAtual++;
      this.moverCarroussel();
      return;
    }
    this.imagemAtual = 0;
    this.moverCarroussel();
  },
  imagemAnterior() {
    if (this.imagemAtual < quantidadeDeImagens && this.imagemAtual > 0) {
      this.imagemAtual--;
      this.moverCarroussel();
      return;
    }
    this.imagemAtual = quantidadeDeImagens;
    this.moverCarroussel();
  },
  moverCarroussel() {
    this.coordenadaDaImagemNoScroll =
      tamanhoDeUmaImagemApenas * this.imagemAtual;
    console.log(this.imagemAtual);
    carroussel.scrollTo({
      top: 0,
      left: this.coordenadaDaImagemNoScroll,
      behavior: "smooth",
    });
  },
};

