import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityTagsComponent } from './utility-tags.component';

describe('UtilityTagsComponent', () => {
  let component: UtilityTagsComponent;
  let fixture: ComponentFixture<UtilityTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
