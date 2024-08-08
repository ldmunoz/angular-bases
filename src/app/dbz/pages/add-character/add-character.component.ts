import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewEvenEmiter : EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    let {name, power} = this.character;
    if(name !='' && power != 0)
      this.onNewEvenEmiter.emit({name , power})

    this.character = {name : '' , power : 0}
  }
}
