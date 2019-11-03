import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  configUrl = 'http://localhost:8080/course/course';
  addUrl = 'http://localhost:8080/course/search';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }
 

  getConfig() {
    return this.http.get(this.configUrl);
  }

  postConfig (aps_score) {
    return this.http.post<any>(this.addUrl, aps_score, this.httpOptions)
  }
}
