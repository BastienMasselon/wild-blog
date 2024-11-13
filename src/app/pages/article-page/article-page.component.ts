import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Article } from '../../../models/article.model';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  http = inject(HttpClient);
  
  articleId!: number;
  article! : Article;

  getArticleById(id: number) {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe({
      next: data => this.article = data,
      error : error => console.log("Erreur", error)
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.getArticleById(this.articleId);
  }

  handleClickLike() {
    this.article.isLiked = !this.article.isLiked;
  }

  togglePublication() {
    this.article.isPublished = !this.article.isPublished;
  }
}
