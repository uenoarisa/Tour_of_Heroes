import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent,FormsModule,CommonModule,HeroDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
