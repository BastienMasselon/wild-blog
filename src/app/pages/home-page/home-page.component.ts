import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { articles } from '../../../data/articles';
import { Article } from '../../../models/article.model';
import { ArticleComponent } from '../../components/article/article.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ArticleComponent ,FormsModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articles: Article[] = articles;
}
