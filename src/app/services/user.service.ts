// src/app/services/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // hace que sea singleton, disponible en toda la app
})
export class UserService {
  private userData: { name?: string; email?: string } = {};

  setUser(user: any) {
    this.userData = user;
  }

  getUser() {
    return this.userData;
  }

  clearUser() {
    this.userData = {};
  }
}
