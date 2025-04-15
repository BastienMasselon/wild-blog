import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Article } from '../../../models/article.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  private readonly apiService = inject(ApiService);
  private articleSubscription! : Subscription;

  articleId!: number;
  article! : Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.articleSubscription = this.apiService.getArticleById(this.articleId).subscribe({
      next: data => this.article = data,
      error : error => console.log("Erreur", error)
    });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  handleClickLike() {
    this.article.isLiked = !this.article.isLiked;
  }

  togglePublication() {
    this.article.isPublished = !this.article.isPublished;
  }

}
