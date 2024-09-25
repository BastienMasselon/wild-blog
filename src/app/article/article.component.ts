import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  title: string,
  author: string,
  content: string,
  image: string,
  isPublished: boolean,
  comment?: string,
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  article: Article = {
    title: 'Ce titre est fabuleux',
    author:'Paul Eholé',
    content: 'Il y a des choses qui ne se font pas, telles que de boire du Dom Pérignon 55 à une température au-dessus de trois degrés et écouter les Beatles sans boules Quiès.',
    image: 'https://lh6.googleusercontent.com/proxy/cMNDH4zczPPe1sZD-scxKWIwYO6iMlKEWuDPt1JhqzKgD4rrU9zrrWYo1_KU4wzxzi3rHgQ7BRjMS3u2zwu_s2ixmNSK8QpeFmKXtCwd5cZIDyuidI4yE1ocOgNv0KOYN9lCr21aa2tXwRULdBKFDVeBIoSB4bhG5np8UmU',
    isPublished: true,
    comment: '',
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
