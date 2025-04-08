import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8080/articles';

  private readonly http = inject(HttpClient);

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticleById(id: number) : Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
