import { Component } from '@angular/core';
@Component({
  selector: 'app-retreats',
  templateUrl: './retreats.component.html',
  styleUrls: ['./retreats.component.css'],
})
export class RetreatsComponent {
  programs = [
    { id: 1, img: 'yoga' },
    { id: 2, img: 'nature' },
    { id: 3, img: 'tea' },
  ];
}
