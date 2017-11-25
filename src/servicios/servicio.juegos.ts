import {Injectable} from '@angular/core';

@Injectable()

export class ServicioJuegos{
    juego = [
        {id:1 , nombre:"Clash Royale", empresa:"SUPERCELL", img:"https://i0.wp.com/www.bramejland.com/wp-content/uploads/2016/09/ClashRoyale-logo.png?resize=512%2C445", descripcion:"¡Atrévete a pisar la arena! De los creadores de Clash of Clans, llega Clash Royale, un juego multijugador en tiempo real protagonizado por tus personajes favoritos de Clash, además de por nobles y muchos otros elementos. Consigue y mejora una gran variedad de cartas de las tropas, hechizos y defensas de Clash of Clans y de los personajes nobles, entre los que se encuentran el príncipe, el caballero y el bebé dragón. Destruye las torres enemigas del rey y las princesas para vencer a tu rival y ganar trofeos, coronas y gloria en la arena. Forma un clan para compartir cartas y levanta tu propia comunidad de batalla."},
        {id:2 , nombre:"Clash of Clans", empresa:"SUPERCELL", img:"https://1.bp.blogspot.com/-o50eNWKhWfY/WeDHejoIT3I/AAAAAAAABbY/IEnvvNkP0g4TGAc2pxZnuZkkN_Uz2-bpgCLcBGAs/s1600/imagen-clash-of-clans-0big.jpg", descripcion:"Construye tu aldea, crea un clan y compite en las épicas guerras de clanes junto a millones de jugadores. Te esperan bárbaros con bigotes impecables, magos con ardientes bolas de fuego y otras increíbles tropas."},
        {id:3 , nombre:"Super Mario Run", empresa:"NINTENDO", img:"http://technology.inquirer.net/files/2017/09/Screen-Shot-2017-09-05-at-6.11.10-PM.jpg", descripcion:"Un nuevo juego de Mario al que puedes jugar con una mano. Mario avanza sin parar por cada nivel. Toca la pantalla para que realice maniobras espectaculares, salte de pared en pared, reúna monedas y alcance la meta. ¡Ahora Super Mario Run se ha actualizado a lo grande!"}
    ];

    public getJuegos(){
        return this.juego;
    }

    public getJuego(id){
        return this.juego.filter(function(e,i){
            return e.id == id
        })[0] || {id:null , nombre:null, empresa:null, img:null, descripcion:null};
    }

}