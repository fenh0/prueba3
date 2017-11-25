import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioJuegos } from '../../servicios/servicio.juegos';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    juego = [];
    jueg = [];

    constructor(public navCtrl: NavController, public NavParams: NavParams,
    public servicioJuegos: ServicioJuegos){
      this.juego = this.servicioJuegos.getJuegos();
      this.jueg = this.servicioJuegos.getJuegos();
    }


    public goToPageDetalle(id){
      this.navCtrl.push('DetallePage',{id:id})
    }
  }

