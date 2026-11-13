import { Component } from '@angular/core';
@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css'],
})
export class ContactButtonComponent {
  showForm = false;
  submitted = false;
  form = { name: '', email: '', message: '' };
  toggleForm() {
    this.showForm = !this.showForm;
    this.submitted = false;
  }
  submitForm() {
    this.submitted = true;
    this.form = { name: '', email: '', message: '' };
  }
}
