import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackCategory } from 'src/track';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  getTracking() : Observable<TrackCategory[]> {
    const url = '/assets/data.json';
    return this.http.get<TrackCategory[]>(url);
  }
}
