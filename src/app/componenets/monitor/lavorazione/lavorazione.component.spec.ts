import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavorazioneComponent } from './lavorazione.component';

describe('LavorazioneComponent', () => {
  let component: LavorazioneComponent;
  let fixture: ComponentFixture<LavorazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavorazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavorazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
