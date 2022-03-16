import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  @Input()
  tituloCard: string = "Título 1"

  @Input()
  conteudo: string = "Loren ipsun lkjsdaslkdjasldja"

  @Input()
  bgcolor: string = "green"


  @Output()
  eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>() //do angular/core

  emitirEventoPersonalizado(): void {
    this.eventoPersonalizado.emit({x: 'Propriedade 1', y: '666', z: true, w:[1,2,3]})
  }

}
