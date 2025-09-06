// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // hace que sea singleton, disponible en toda la app
})
export class UserService {
  private apiUrl = 'http://localhost:7000/users/email';
  private userData: { email?: string } = {};
  constructor(private http: HttpClient) {}

  getInformation(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?email=${encodeURIComponent(email)}`);
  }

  setUser(user: any) {
    this.userData = user;
  }

  getUser() {
    console.log('object --> ', this.userData);
    return this.userData;
  }

  clearUser() {
    this.userData = {};
  }
}
