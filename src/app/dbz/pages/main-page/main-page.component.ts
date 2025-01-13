import { Character } from './../../interfaces/character';
import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

constructor(private dbzService: DbzService) { }

  get characters(): Character []{
    return [...this.dbzService.characters];
  }

  addNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

  onDeleteCharacter(id: string): void { // id: string
    this.dbzService.deleteCharacterById(id);
  }

}
