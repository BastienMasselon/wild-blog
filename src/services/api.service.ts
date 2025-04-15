import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiURL;

  private readonly http = inject(HttpClient);

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/articles`);
  }

  getArticleById(id: number) : Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/articles/${id}`);
  }
}
