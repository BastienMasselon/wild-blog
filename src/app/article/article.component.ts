import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  title: string = 'Ce titre est fabuleux';
  content: string = 'Il y a des choses qui ne se font pas, telles que de boire du Dom Pérignon 55 à une température au-dessus de trois degrés et écouter les Beatles sans boules Quiès.'
}
