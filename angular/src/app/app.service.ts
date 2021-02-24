import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  requestURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.requestURL}/showProducts`);
  }
}

