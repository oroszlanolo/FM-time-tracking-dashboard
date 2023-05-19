import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackCategory } from 'src/track';
import { HttpClient } from '@angular/common/http';
import { data } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  getTracking() : Observable<TrackCategory[]> {
    // const url = '/assets/data.json';
    // return this.http.get<TrackCategory[]>(url);
    return of(data);
  }
}
