import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsGroupsComponent } from './tags-groups.component';

describe('TagsGroupsComponent', () => {
  let component: TagsGroupsComponent;
  let fixture: ComponentFixture<TagsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
