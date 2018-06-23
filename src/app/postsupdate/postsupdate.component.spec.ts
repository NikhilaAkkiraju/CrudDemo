import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsupdateComponent } from './postsupdate.component';

describe('PostsupdateComponent', () => {
  let component: PostsupdateComponent;
  let fixture: ComponentFixture<PostsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
