import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../model/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  apibaseurl: string = "http://localhost:3000/status";

  constructor(private http: HttpClient) { }

  getstatus():Observable<Status[]>{
    return this.http.get<Status[]>(this.apibaseurl)
  }


}
