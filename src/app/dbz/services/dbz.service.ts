import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id: number): void {
  //   console.log(id);
  //   this.characters.splice(id, 1);
  // }

  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
