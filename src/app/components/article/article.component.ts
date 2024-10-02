import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input({ required: true}) article!: Article;
  
  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
