import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private readonly service: DbzService){  }

  get characters(): Character[]{
    return [...this.service.characters];
  }

  onDeleteCharacter(id: string) :void{
    this.service.deleteCharacterById(id)
  }

  onCreateCharacter(character:Character):void {
    this.service.addNewCharacter(character);
  }

}


