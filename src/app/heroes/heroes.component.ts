import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Wind Ranger'
  };
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}