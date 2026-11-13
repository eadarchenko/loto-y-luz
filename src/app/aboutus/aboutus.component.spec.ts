import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus.component';
describe('AboutusComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), FormsModule],
      declarations: [AboutusComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }),
  );
  it('creates the component', () => {
    const fixture = TestBed.createComponent(AboutusComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
