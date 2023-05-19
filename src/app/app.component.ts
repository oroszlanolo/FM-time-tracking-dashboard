import { Component, OnInit } from '@angular/core';
import { TrackingService } from './tracking.service';
import { TrackCategory } from 'src/track';
import { ReportRange } from 'src/track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  categories: TrackCategory[] = [];
  range = ReportRange.weekly;
  ReportRange = ReportRange;
  constructor(private trackingService: TrackingService) {}

  get periodString() : string {
    switch(this.range) {
      case ReportRange.daily:
        return 'day';
        case ReportRange.weekly:
        return 'week';
        case ReportRange.monthly:
        return 'month';
    }
  }

  ngOnInit(): void {
      this.trackingService.getTracking().subscribe(t => this.categories = t);
  }
}
