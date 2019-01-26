import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTagsComponent } from './normal-tags.component';

describe('NormalTagsComponent', () => {
  let component: NormalTagsComponent;
  let fixture: ComponentFixture<NormalTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
