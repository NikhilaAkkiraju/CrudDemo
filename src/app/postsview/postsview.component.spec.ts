import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsviewComponent } from './postsview.component';

describe('PostsviewComponent', () => {
  let component: PostsviewComponent;
  let fixture: ComponentFixture<PostsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
