class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_img(des){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)

    }
}
class Player extends Obj{
    vida = 100
    pts = 0
    altura_dano = 500
    fase = 1
    moverParaCursor(x){
        this.x = x - 70 // Centraliza a arma no cursor
    }
}

class Zombie extends Obj{
    movendo = true
    danoInterval = null
    mov_zombie(player){
        if(player.pts >= 2500){
            this.w += 12
            this.h += 12
        } else if(player.pts >= 2250){
            this.w += 10
            this.h += 10
        } else if(player.pts >= 2000){
            this.w += 9
            this.h += 9
        } else if(player.pts >= 1750){
            this.w += 8
            this.h += 8
        } else if (player.pts >= 1500) {
            this.w += 7
            this.h += 7
        } else if (player.pts >= 1250) {
            this.w += 6
            this.h += 6
        } else if (player.pts >= 1000) {
            this.w += 5
            this.h += 5
        } else if (player.pts >= 750) {
            this.w += 4
            this.h += 4
        } else if (player.pts >= 500) {
            this.w += 3
            this.h += 3
        } else if (player.pts >= 250) {
            this.w += 2
            this.h += 2
        } else {
            this.w += 1
            this.h += 1
        }

        if(this.w >= 500){
            this.movendo = false
            this.w = 500
            this.h = 500
            
            if (!this.danoInterval) {
                this.danoInterval = setInterval(() => {
                    player.vida -= 5
                    if (player.vida <= 0) {
                        clearInterval(this.danoInterval) // Para o intervalo se a vida do jogador chegar a 0
                    }
                }, 1000)
            }
        }

    }
    recomeca(){
        this.movendo = true
        this.w = 100
        this.h = 100
        this.x = Math.floor(Math.random() * (1200 - this.w))
        if (this.danoInterval) {
            clearInterval(this.danoInterval)
            this.danoInterval = null
        }
    }
}

class Text{
    des_text(text,x,y,cor,font){
        tela.fillStyle = cor
        tela.lineWidth = '5'
        tela.font = font
        tela.fillText(text,x,y)
    }
}