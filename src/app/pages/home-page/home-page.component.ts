import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { articles } from '../../../data/articles';
import { Article } from '../../../models/article.model';
import { ArticleComponent } from '../../components/article/article.component';
import { Like } from '../../../models/like.models';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ArticleComponent ,FormsModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  articles: Article[] = articles;
  likedArticle!: number;

  handleReceiveLike(like: Like) {
    this.likedArticle = like.articleId;
    const likedArticleIndex: number = this.articles.findIndex((article) => like.articleId === article.id);
    // update number of likes
    if (like.liked) this.articles[likedArticleIndex].likes += 1;
    else this.articles[likedArticleIndex].likes -= 1;
    console.log("like reçu depuis l'enfant Article", like);
  }
}
