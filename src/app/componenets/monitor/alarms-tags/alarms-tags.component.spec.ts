import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsTagsComponent } from './alarms-tags.component';

describe('AlarmsTagsComponent', () => {
  let component: AlarmsTagsComponent;
  let fixture: ComponentFixture<AlarmsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
