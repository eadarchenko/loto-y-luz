import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images1 = ['assets/img/yoga.webp', 'assets/img/tea.webp'];
  images2 = ['assets/img/nature.webp', 'assets/img/spa.webp'];
  currentIndex1 = 0;
  currentIndex2 = 0;
  moveCarousel(step: number, id: string) {
    if (id === 'carousel1') {
      this.currentIndex1 =
        (this.currentIndex1 + step + this.images1.length) % this.images1.length;
    } else {
      this.currentIndex2 =
        (this.currentIndex2 + step + this.images2.length) % this.images2.length;
    }
  }
}
