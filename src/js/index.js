const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll(`.imagem`);

// passo 02 - pegar o click de cada botao

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 03 - desmarca o botao selecionado anterior
        desativaBotaoSelecionadoAnt();
        // passo 04 - marcar o botao clicando como se estivesse selecionado
        selecionaBotaoCarrossel(botao);
        // passo 05 - esconder a imagem ativa de fundo anterior
        escondeImagemAtivaFundo();
        // passo 06 - fazer aparecer a img de fundo corresp. ao botao clicado
        apareceImgfundoCorrepBotao(indice);


    })
})

function apareceImgfundoCorrepBotao(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionaBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function escondeImagemAtivaFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionadoAnt() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
