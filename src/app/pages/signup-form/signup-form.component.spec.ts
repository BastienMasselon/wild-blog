import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalse();
  })

  it('should be valid when correct email, username, password and password confirm are entered', () => {
    component.signUpForm.controls['username'].setValue('testUsername');
    component.signUpForm.controls['email'].setValue('test@example.com');
    component.signUpForm.controls['passwords'].setValue({password: "Test01@example", confirmPassword: "Test01@example"});

    expect(component.signUpForm.valid).toBeTrue();
  })

  it('should not be valid when passwords do not match', () => {
    component.signUpForm.controls['username'].setValue('testUsername');
    component.signUpForm.controls['email'].setValue('test@example.com');
    component.signUpForm.controls['passwords'].setValue({password: "Test01@example", confirmPassword: "Test01@notamatch"});

    expect(component.signUpForm.valid).toBeFalse();
  })
});
