import { Component } from '@angular/core';
import { ChildModel } from 'src/app/Models/childModel';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public child1!: ChildModel;
  public child2!: ChildModel;

  constructor() {
    this.child1 =
    {
      id: 1,
      age: 10,
      gender: "M",
      name: "Pepito",
      schoolName: "Rosario Tijeras School"
    };

    this.child2 = {
      id: 2,
      age: 3,
      gender: "F",
      name: "Carmenza",
    };
  }

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'SpiderMan';
  }

  changeAge(): void {
    this.age = 28;
  }

  resetForm(): void {
    this.age = 45;
    this.name = 'ironman'
  }
}

