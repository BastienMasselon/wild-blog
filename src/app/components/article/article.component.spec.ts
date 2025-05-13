import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { provideRouter } from '@angular/router';
import { articleForTests } from '../../../data/articleTest';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input article object', () => {
    component.article = articleForTests;

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.post__category p').textContent).toContain('catégorie de test');
  })

  it('should emit an event when like button is clicked', () => {
    component.article = articleForTests;
    spyOn(component.likePost, 'emit');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button.post__like-btn');

    button.click();
    expect(component.likePost.emit).toHaveBeenCalledWith({
      articleId: 1,
      liked: true
    })
  })
});
