import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TVideo } from './types';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://test.kommunetv.no/api/streams?id=1&streamType=1';

  getVideo(): Observable<TVideo> {
    return this.http.get(this.apiUrl, { responseType: 'text' })
      .pipe(map(text => JSON.parse(text)))
  }
}