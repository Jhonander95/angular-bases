import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 9
  }]

  onDeleteCharacter(id: string): void {
    console.log(id);
    this.onDelete.emit(id);
  }

}
