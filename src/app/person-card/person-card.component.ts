import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReportRange } from 'src/track';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  @Input() name?: string;
  @Input() avatar?: string;
  @Input() range!: ReportRange;
  @Output() rangeChange = new EventEmitter<ReportRange>();
  ReportRange = ReportRange;

  selectRange(newRange : ReportRange) {
    this.range = newRange;
    this.rangeChange.emit(this.range);
  }
}
