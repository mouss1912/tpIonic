import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trailer } from './trailer.models';

@Injectable({
  providedIn: 'root',
})
export class TrailerService {

  constructor(private http: HttpClient) { }

  getInfos(): Observable<Trailer[]>{
    return this.http.get<Trailer[]>(`${environment.base_Url}/trailers`);
  }

}