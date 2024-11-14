import { Component, inject } from '@angular/core';
import { Article } from '../../../models/article.model';
import { Observable } from 'rxjs';
import { ArticleComponent } from '../article/article.component';
import { Like } from '../../../models/like.models';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleComponent, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  articles$!: Observable<Article[]>;
  private apiService = inject(ApiService);
  likedArticle!: number;

  ngOnInit() {
    this.articles$ = this.apiService.getArticles();
  }

  handleReceiveLike(like: Like) {
    // this.likedArticle = like.articleId;
    // const likedArticleIndex: number = this.articles$.findIndex((article) => like.articleId === article.id);
    // // update number of likes
    // if (like.liked) this.articles$[likedArticleIndex].likes += 1;
    // else this.articles$[likedArticleIndex].likes -= 1;
    console.log("like reçu depuis l'enfant Article", like);
  }
}
