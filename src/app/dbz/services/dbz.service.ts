import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

    characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
      },{
        id: uuid(),
        name: 'Goku',
        power: 9999
      }
    ];

    onNewCharacter(character: Character): void {
      const newCharacter: Character = { id: uuid(), ...character }; // Spread Operator  // { id: uuid(), name: character.name, power: character.power }
      this.characters.push(newCharacter);

    }

    /* onDeleteCharacter(index: number): void {
      console.log('Main Page Component');
      console.log(index);

      this.characters.splice(index, 1);
    } */

    deleteCharacterById(id: string): void {
      this.characters = this.characters.filter(character => character.id !== id);
    }

}
