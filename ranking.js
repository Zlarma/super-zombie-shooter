let salvarRanking = (nome, pontuação) => {
    const rankingAtual = JSON.parse(localStorage.getItem('ranking')) || []

    rankingAtual.push({ nome, pontuação: Number(pontuação) })

    rankingAtual.sort((a, b) => b.pontuação - a.pontuação)

    const top10 = rankingAtual.slice(0, 10)

    localStorage.setItem('ranking', JSON.stringify(top10))
}


let exibirRanking = () => {
    const lista = document.getElementById('listaRanking')
    lista.innerHTML = ''

    const ranking = JSON.parse(localStorage.getItem('ranking')) || []

    const top10 = ranking.slice(0, 10)

    top10.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent = `${index + 1}º - ${item.nome}: ${item.pontuação} pts`
        lista.appendChild(li)
    })
}


document.getElementById('verRankingBtn').addEventListener('click', () => {
    document.getElementById('modalRanking').style.display = 'block'
    exibirRanking()
})

document.querySelector('.fechar').addEventListener('click', () => {
    document.getElementById('modalRanking').style.display = 'none'
})

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalRanking')
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})