import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
  <p class="contador">{{counter}}</p>
  <div class="botones">
    <input type="button" value="+1" (click)="sumar()" class="boton-sumar">
    <input type="button" value="reset" (click)="reset()" class="boton-reset">
    <input type="button" value="-1" (click)="restar()" class="boton-restar">
  </div>
</div>
  `,
  styles: `
  .contador {
    font-size: 18px;
    color: #666; /* Color de texto un poco más claro */
  }
  
  .botones {
    margin-top: 20px;
  }
  
  .boton-sumar,
  .boton-reset,
  .boton-restar {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff; /* Color de fondo azul */
    color: #fff; /* Color de texto blanco */
    border: none;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 5px;
  }
  
  .boton-sumar:hover,
  .boton-reset:hover,
  .boton-restar:hover {
    background-color: #0056b3; /* Color de fondo azul más oscuro al pasar el mouse */
  }
  `
})
export class CounterComponent {
  private _counter: number = 0;

  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }
  sumar():void {
    this.counter++;
  }
  restar():void {
    this.counter--;
  }
  reset():void {
    this.counter = 0;
  }
}
