import { Component } from '@angular/core';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public herosNames: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  constructor() {
  }

  removeLastHero(): void {
    this.deletedHero = this.herosNames.pop();
  }
}
