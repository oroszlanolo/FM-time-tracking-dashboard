import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() title: string = '';
  @Input() time: number = 0;
  @Input() prevTime: number = 0;
  @Input() img: string = '';
  @Input() period: string = '';
}
