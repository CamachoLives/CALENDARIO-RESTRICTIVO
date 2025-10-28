// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root', // hace que sea singleton, disponible en toda la app
})
export class UserService {
  private apiUrl = 'http://localhost:7000/api/users';
  private userData: { id?: number } = {};
  constructor(private http: HttpClient) {}

  getInformation(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/${this.userData.id}`, { headers });
  }

  setUser(id: any, tokenExpirySeconds: number) {
    const expiration = new Date().getTime() + tokenExpirySeconds * 1000; // milisegundos
    const data = { ...id, expiration };
    sessionStorage.setItem('userData', JSON.stringify(data));
    this.userData = id;
  }
  //
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
