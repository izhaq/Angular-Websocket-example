import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserJoinComponent } from './new-user-join.component';

describe('NewUserJoinComponent', () => {
  let component: NewUserJoinComponent;
  let fixture: ComponentFixture<NewUserJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
