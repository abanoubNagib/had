import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAbanoubComponent } from './angular-abanoub.component';

describe('AngularAbanoubComponent', () => {
  let component: AngularAbanoubComponent;
  let fixture: ComponentFixture<AngularAbanoubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAbanoubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAbanoubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
