class Obj {
    constructor(x, y, w, h, a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_img(des) {
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)

    }
}
class Player extends Obj {
    vida = 100
    pts = 0
    fase = 1
    frame = 1
    tiroFrame = 1
    tempo = 1
    tiroTempo = 1
    atirando = false
    moverParaCursor(x) {
        this.x = x - -20
    }
    anim(nome) {
        if (this.tempo % 3 == 0) {
            this.frame += 1
        }
        if (this.frame > 12) {
            this.frame = 1
        }
        this.a = `./assets/idle/${nome}_${this.frame}.png`
    }
    tiro() {
        this.tiroTempo += 1
        if (this.tiroTempo % 2 === 0) {
            this.tiroFrame += 1
        }
        if (this.tiroFrame > 7) {
            this.tiroFrame = 1
            this.atirando = false
            this.a = `./assets/idle/idle_1.png`
            return
        }
        this.a = `./assets/tiro/tiro_${this.tiroFrame}.png`;
    }
}

class Zombie extends Obj {
    movendo = true
    danoInterval = null
    frame = 1
    tempo = 1
    attackFrame = 1
    attackTempo = 1
    mov_zombie(player) {
        if (player.pts >= 6500) {
            this.w += 20
            this.h += 20
        } else if (player.pts >= 6000) {
            this.w += 19
            this.h += 19
        } else if (player.pts >= 5500) {
            this.w += 18
            this.h += 18
        } else if (player.pts >= 5000) {
            this.w += 17
            this.h += 17
        } else if (player.pts >= 4500) {
            this.w += 16
            this.h += 16
        } else if (player.pts >= 4000) {
            this.w += 15
            this.h += 15
        } else if (player.pts >= 3500) {
            this.w += 14
            this.h += 14
        } else if (player.pts >= 3000) {
            this.w += 13
            this.h += 13
        } else if (player.pts >= 2500) {
            this.w += 12
            this.h += 12
        } else if (player.pts >= 2250) {
            this.w += 10
            this.h += 10
        } else if (player.pts >= 2000) {
            this.w += 9
            this.h += 9
        } else if (player.pts >= 1750) {
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

        if (this.w >= 500) {
            this.movendo = false
            this.w = 500
            this.h = 500
            if (!this.danoInterval) {
                this.danoInterval = setInterval(() => {
                    player.vida -= 5
                    if (player.vida <= 0) {
                        clearInterval(this.danoInterval)
                    }
                }, 1000)
            }
        }

    }
    andar(nome) {
        if (this.tempo % 5 == 0) {
            this.frame += 1
        }
        if (this.frame > 9) {
            this.frame = 1
        }
        this.a = `./assets/zumbi/${nome}_${this.frame}.png`
    }
    recomeca() {
        this.movendo = true
        this.w = 100
        this.h = 100
        this.x = Math.floor(Math.random() * (1200 - this.w))
        if (this.danoInterval) {
            clearInterval(this.danoInterval)
            this.danoInterval = null
        }
    }
    attack() {
        if (!this.movendo) {
            this.attackTempo += 1
            if (this.attackTempo % 8 === 0) {
                this.attackFrame += 1
            }
            if (this.attackFrame > 8) {
                this.attackFrame = 1
            }
            this.a = `./assets/attack/attack_${this.attackFrame}.png`
        }
    }
}

class Text {
    des_text(text, x, y, cor, font) {
        tela.fillStyle = cor
        tela.lineWidth = '5'
        tela.font = font
        tela.fillText(text, x, y)
    }
}