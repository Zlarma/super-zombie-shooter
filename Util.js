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
    colid(objeto){
        return this.altura_dano == objeto.y
    }
    moverParaCursor(x){
        this.x = x - 70; // Centraliza a arma no cursor
    }
}

class Zombie extends Obj{
    movendo = true
    mov_zombie(velocidade){
        if (this.movendo == true){
            if(velocidade == 1){
                this.w += 1
                this.h += 1
            } else if(velocidade == 2){
                this.w += 2
                this.h += 2
            } else if(velocidade == 3){
                this.w += 3
                this.h += 3
            } else if(velocidade == 4){
                this.w += 4
                this.h += 4
            }
        }
        if(this.w >= 600){
            this.movendo = false
            this.w = 600
            this.h = 600
        }

    }
    recomeca(){
        this.movendo = true
        this.w = 100
        this.h = 100
        this.x = Math.floor(Math.random() * (1400 - this.w))
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