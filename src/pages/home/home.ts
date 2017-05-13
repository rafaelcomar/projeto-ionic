import { Component } from '@angular/core';
import { NavController , AlertController} from 'ionic-angular';
import { NativeStorage } from "@ionic-native/native-storage"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  descricaoTarefa: string;
  tarefas : string[] = [];

  constructor( public navCtrl : NavController, private alertCtrl : AlertController, private storage : NativeStorage)
    {

    }
    salvarTarefa(){
      let alert = this.alertCtrl.create({
        title: 'Confirmar',
        message: this.descricaoTarefa,
        buttons:[
          {
            text: 'Cancelar',
            role: 'cancel',
            handler:() => {

            }
          },
          {
            text: 'Salvar',
            handler: () => {
              this.tarefas.push(this.descricaoTarefa);
              let  storage: NativeStorage = new NativeStorage();
              storage.setItem("todos" , this.tarefas);
            }
          }
        ]
      })
      alert.present();
    }
    

}
 

