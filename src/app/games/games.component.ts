import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Usuario logueado {{ username }}</h3>
   <ul>
    @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
    }
   </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';

  @Output() addFavoriteEvent=new EventEmitter<string>();
  
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id:1,
      name:"Gran turismo"
    },
    {
      id:2,
      name:"uncharted"
    },
    {
      id:3,
      name:"GTA"
    }
  ]
}
