import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { articleForTests } from '../data/articleTest';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiURL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch single article from API', () => {
    service.getArticleById(1).subscribe( data => {
      expect(data).toEqual(jasmine.objectContaining(
        {
          id: 1,
          title: 'test article'
        }))
    });

    const req = httpMock.expectOne(`${apiUrl}/articles/1`);
    expect(req.request.method).toBe('GET');
    req.flush(articleForTests);
  })
});
