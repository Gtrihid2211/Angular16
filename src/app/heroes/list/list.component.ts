import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames:string[] = ['Antonio Recio','Amador Rivas', 
  'Koke Calatrava', 'Maite Figueroa']
  public heroeBorrado:string = '';
  borrarHeroe():void {
    if(this.heroNames.length > 0) {
      this.heroeBorrado = String(this.heroNames.pop());
    }else{
      this.heroeBorrado = 'No hay más héroes que borrar';
    }
  }

}
