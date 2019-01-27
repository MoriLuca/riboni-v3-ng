import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliComponent } from './tagli.component';

describe('TagliComponent', () => {
  let component: TagliComponent;
  let fixture: ComponentFixture<TagliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
