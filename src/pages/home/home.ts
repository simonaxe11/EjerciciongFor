import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titulo: string;
  jugadores: string[];
  constructor(public navCtrl: NavController) {
    
    this.titulo="Jugadores favoritos";
    this.jugadores=["Antoine Griezmann","Thomas Lemar","Saúl Ñiguez","Jan Oblak"]
  }

}
