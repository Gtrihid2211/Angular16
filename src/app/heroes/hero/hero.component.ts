import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = 'ironman';
  edad: number = 45;
  get nombreEnMayusculas(): string {
    return this.name.toUpperCase();
  }
  get dimeDescripcion():string{
    return `${this.name} - ${this.edad}`;
  }

  cambiarNombre():string{
    return this.name = 'Spiderman';
  }

  cambiarEdad():number{
    return this.edad = 30;
  }

  reset():void{
    this.name = 'ironman';
    this.edad = 45;
  }
}
