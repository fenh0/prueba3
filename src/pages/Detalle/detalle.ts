import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioJuegos } from '../../servicios/servicio.juegos';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
    
    id=null;
    juego = {id:null , nombre:null, empresa:null, img:null, descripcion:null}
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioJuegos: ServicioJuegos) {
  
this.id  = this.navParams.get('id');
this.juego = this.servicioJuegos.getJuego(this.id);



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }
}