import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalTagsComponent } from './critical-tags.component';

describe('CriticalTagsComponent', () => {
  let component: CriticalTagsComponent;
  let fixture: ComponentFixture<CriticalTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
