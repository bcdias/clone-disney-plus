document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('[data-aba-botao]');
    const questions = document.querySelectorAll('[data-faq-question]');

    botoes.forEach(botao => {
        botao.addEventListener('click', (botao) => {
            const abaAlvo = botao.target.dataset.abaBotao;
            const aba = document.querySelector(`[data-aba-id="${abaAlvo}"]`)
            escondeTodosAsAbas();
            aba.classList.add('shows__lista--is-active');

            removeBotaoAtivo();
            botao.target.classList.add('shows__abas__botao--is-active');
        })
    })


    questions.forEach(question => {
        question.addEventListener('click', openAndCloseQuestion)
    })
})

function openAndCloseQuestion(element) {
    const openAndCloseClass  = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode

    parentElement.classList.toggle(openAndCloseClass)
}

function removeBotaoAtivo () {
    const botoes = document.querySelectorAll('[data-aba-botao]');

    botoes.forEach(botao => {
        botao.classList.remove('shows__abas__botao--is-active')
    })
}

function escondeTodosAsAbas () {
    const abasContainer = document.querySelectorAll('[data-aba-id]');

    abasContainer.forEach(aba => {
        aba.classList.remove('shows__lista--is-active')
    })
}