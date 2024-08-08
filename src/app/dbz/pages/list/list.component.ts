import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];
  @Output()
  public idCharacterDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCaracter({id}: Character):void {
    this.idCharacterDelete.emit(id)
  }
}
