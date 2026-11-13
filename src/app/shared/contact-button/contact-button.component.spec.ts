import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ContactButtonComponent } from './contact-button.component';
describe('ContactButtonComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), FormsModule],
      declarations: [ContactButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }),
  );
  it('creates the component', () => {
    const fixture = TestBed.createComponent(ContactButtonComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
  it('completes demo locally and clears form state', () => {
    const c = TestBed.createComponent(ContactButtonComponent).componentInstance;
    c.form = { name: 'Demo', email: 'demo@example.invalid', message: 'Test' };
    c.submitForm();
    expect(c.submitted).toBeTrue();
    expect(c.form.name).toBe('');
  });
});
