import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilterationComponent } from './user-filteration.component';

describe('UserFilterationComponent', () => {
  let component: UserFilterationComponent;
  let fixture: ComponentFixture<UserFilterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFilterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
