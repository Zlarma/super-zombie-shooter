let tela = document.getElementById('tela').getContext('2d')

let zom1 = new Zombie(0, 400, 100, 100, "./assets/zombie1.png")
let zom2 = new Zombie(800, 400, 100, 100, "./assets/zombie1.png")
let zom3 = new Zombie(300, 400, 100, 100, "./assets/zombie1.png")

let player = new Player(800, 500, 500, 300, "./assets/arma.png")

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()

console.log(zom1)

document.addEventListener("mousemove", (event) => {
    let rect = tela.canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    if(mouseX > 1070){
        player.moverParaCursor(1070);
    } else if(mouseX < 70){
        player.moverParaCursor(70);
    } else {
        player.moverParaCursor(mouseX);
    }
});
document.addEventListener("click", (event) => {
    let rect = tela.canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    if(mouseX >= zom1.x && mouseX <= zom1.x + zom1.w && mouseY >= zom1.y && mouseY <= zom1.y + zom1.h){
        zom1.recomeca()
        player.pts += 10
    } else if(mouseX >= zom2.x && mouseX <= zom2.x + zom2.w && mouseY >= zom2.y && mouseY <= zom2.y + zom2.h){
        zom2.recomeca()
        player.pts += 10
    } else if(mouseX >= zom3.x && mouseX <= zom3.x + zom3.w && mouseY >= zom3.y && mouseY <= zom3.y + zom3.h){
        zom3.recomeca()
        player.pts += 10
    }
    
})

let desenha = () => {

    tela.fillStyle = "white";
    tela.font = "24px Arial";
    tela.fillText(`Vida: ${player.vida}`, 20, 30);
    tela.fillText(`Pontos: ${player.pts}`, 20, 60);

    zom1.des_img(tela)
    zom2.des_img(tela)
    zom3.des_img(tela)
    player.des_img(tela)
}

let velocidade = 1

let atualiza = () => {
    if(player.pts >= 200){
        velocidade = 2
    } else if(player.pts >= 500){
        velocidade = 3
    } else if(player.pts >= 750){
        velocidade = 4
    }
    zom1.mov_zombie(velocidade)
    zom2.mov_zombie(velocidade)
    zom3.mov_zombie(velocidade)
}

let main = () => {
    tela.clearRect(0, 0, 1500, 800)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}
main()