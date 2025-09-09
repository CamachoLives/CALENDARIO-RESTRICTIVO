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

  getInformation(): Observable<any> {
    return this.http.get(`${this.apiUrl}?email=${this.userData.email}`);
  }

  setUser(user: any, tokenExpirySeconds: number) {
    const expiration = new Date().getTime() + tokenExpirySeconds * 1000; // milisegundos
    const data = { ...user, expiration };
    sessionStorage.setItem('userData', JSON.stringify(data));
    this.userData = user;
  }

  getUser() {
    console.log('object --> ', this.userData);
    return this.userData;
  }

  clearUser() {
    this.userData = {};
  }

  loadUser() {
    const stored = sessionStorage.getItem('userData');
    if (!stored) return null;

    const data = JSON.parse(stored);
    if (new Date().getTime() > data.expiration) {
      sessionStorage.removeItem('userData');
      return null;
    }

    this.userData = data;
    return data;
  }
}
