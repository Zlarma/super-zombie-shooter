let tela = document.getElementById('tela').getContext('2d')

let zom1 = new Zombie(0, 400, 100, 100, "./assets/zumbi/zumbi_1.png")
let zom2 = new Zombie(800, 400, 100, 100, "./assets/zumbi/zumbi_1.png")
let zom3 = new Zombie(300, 400, 100, 100, "./assets/zumbi/zumbi_1.png")

let player = new Player(800, 500, 500, 300, "./assets/idle_1.png")

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()

let gameOver = false

document.addEventListener("mousemove", (event) => {
    let rect = tela.canvas.getBoundingClientRect()
    let mouseX = event.clientX - rect.left
    if (mouseX > 1400) {
        player.moverParaCursor(1400)
    } else if (mouseX < 10) {
        player.moverParaCursor(10)
    } else {
        player.moverParaCursor(mouseX)
    }
})

document.addEventListener("click", (event) => {
    if (gameOver) return

    let rect = tela.canvas.getBoundingClientRect()
    let mouseX = event.clientX - rect.left
    let mouseY = event.clientY - rect.top
    if (mouseX >= zom1.x && mouseX <= zom1.x + zom1.w && mouseY >= zom1.y && mouseY <= zom1.y + zom1.h) {
        player.tiro()
        player.atirando = true
        zom1.recomeca()
        player.pts += 10
    } else if (mouseX >= zom2.x && mouseX <= zom2.x + zom2.w && mouseY >= zom2.y && mouseY <= zom2.y + zom2.h) {
        player.tiro()
        player.atirando = true
        zom2.recomeca()
        player.pts += 10
    } else if (mouseX >= zom3.x && mouseX <= zom3.x + zom3.w && mouseY >= zom3.y && mouseY <= zom3.y + zom3.h) {
        player.tiro()
        player.atirando = true
        zom3.recomeca()
        player.pts += 10
    } else {
        player.vida -= 2
    }
})

let restartButton = document.getElementById('restartButton')
let verRankingBtn = document.getElementById('verRankingBtn')

restartButton.addEventListener('click', () => {

    player.vida = 100
    player.pts = 0
    zom1.recomeca()
    zom2.recomeca()
    zom3.recomeca()
    gameOver = false
    restartButton.style.display = "none"
    verRankingBtn.style.display = "none"
    main()
})

let exibeGameOver = () => {
    tela.fillStyle = "rgba(0, 0, 0, 0.8)"
    tela.fillRect(0, 0, 1500, 800)

    tela.fillStyle = "white"
    tela.font = "48px Arial"

    let gameOverText = "Game Over"
    let gameOverWidth = tela.measureText(gameOverText).width
    tela.fillText(gameOverText, (1500 - gameOverWidth) / 2, 300)

    tela.font = "36px Arial"
    let pontosText = `Pontos: ${player.pts}`
    let pontosWidth = tela.measureText(pontosText).width
    tela.fillText(pontosText, (1500 - pontosWidth) / 2, 400)

    setTimeout(() => {
        if (confirm("Deseja salvar sua pontuação no ranking?")) {
            const nome = prompt("Digite seu nome:")
            if (nome) {
                const rankingAntigo = JSON.parse(localStorage.getItem('ranking')) || []
                salvarRanking(nome, player.pts)
                const novoRanking = JSON.parse(localStorage.getItem('ranking'))

                const entrouNoRanking = novoRanking.some(item => item.nome === nome && item.pontuação === player.pts)

                if (entrouNoRanking) {
                    alert("Parabéns! Você entrou no Top 10 🏆")
                } else {
                    alert("Sua pontuação foi registrada, mas não entrou no Top 10.")
                }

                exibirRanking()
            }
        }
    }, 100)

    restartButton.style.display = "block"
    verRankingBtn.style.display = "block"
}

let desenha = () => {
    tela.fillStyle = "white"
    tela.font = "24px Arial"
    tela.fillText(`Vida: ${player.vida}`, 20, 30)
    tela.fillText(`Pontos: ${player.pts}`, 20, 60)

    zom1.des_img(tela)
    zom2.des_img(tela)
    zom3.des_img(tela)
    player.des_img(tela)
}

let atualiza = () => {
    if (zom1.movendo) {
        zom1.tempo += 1
        zom1.andar('zumbi')
    }
    if (zom2.movendo) {
        zom2.tempo += 1
        zom2.andar('zumbi')
    }
    if (zom3.movendo) {
        zom3.tempo += 1
        zom3.andar('zumbi')
    }
    zom1.mov_zombie(player)
    zom2.mov_zombie(player)
    zom3.mov_zombie(player)
    if (player.atirando) {
        player.tiro("tiro")
    } else {
        player.anim("idle")
        player.tempo += 1
    }
}

let main = () => {
    tela.clearRect(0, 0, 1500, 800)

    if (player.vida <= 0) {
        gameOver = true
        exibeGameOver()
        return
    }

    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()