import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsHistoryComponent } from './alarms-history.component';

describe('AlarmsHystoryComponent', () => {
  let component: AlarmsHistoryComponent;
  let fixture: ComponentFixture<AlarmsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
