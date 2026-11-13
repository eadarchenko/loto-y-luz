import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './faq.component';
describe('FaqComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), FormsModule],
      declarations: [FaqComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }),
  );
  it('creates the component', () => {
    const fixture = TestBed.createComponent(FaqComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
