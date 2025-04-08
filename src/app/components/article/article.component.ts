import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../../models/article.model';
import { Like } from '../../../models/like.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input({ required: true}) article!: Article;

  @Output() likePost: EventEmitter<Like> = new EventEmitter<Like>();

  ngOnInit() {
    console.log(this.article);
  }

  isArticleLiked : boolean = false;

  handleClickLike(): void {
    this.isArticleLiked = !this.isArticleLiked;
    this.likePost.emit({
      articleId: this.article.id,
      liked: this.isArticleLiked
    });
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
