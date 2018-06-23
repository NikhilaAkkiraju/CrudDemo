import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostscreateComponent } from './postscreate.component';

describe('PostscreateComponent', () => {
  let component: PostscreateComponent;
  let fixture: ComponentFixture<PostscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
