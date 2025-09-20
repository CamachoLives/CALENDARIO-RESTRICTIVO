import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

export interface UserProfile {
  id: number;
  user_id: number;
  biografia: string;
  area: string;
  telefono: string;
  ubicacion: string;
  sitio_web: string;
  imagen_url: string;
  redes_sociales: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  created_at: string;
  updated_at: string;
  nombre: string;
  email: string;
}

export interface CreateProfileRequest {
  userId: string;
  biografia?: string;
  area: string;
  telefono?: string;
  ubicacion?: string;
  sitio_web?: string;
  redes_sociales?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface UpdateProfileRequest {
  biografia?: string;
  area?: string;
  telefono?: string;
  ubicacion?: string;
  sitio_web?: string;
  redes_sociales?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface ProfileResponse {
  success: boolean;
  message: string;
  data: UserProfile;
}

export interface ProfilesListResponse {
  success: boolean;
  message: string;
  data: {
    profiles: UserProfile[];
    pagination: {
      page: number;
      limit: number;
      total: number;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:7000/api/profile';

  constructor(private http: HttpClient) {}

  createProfile(
    profileData: CreateProfileRequest
  ): Observable<ProfileResponse> {
    return this.http
      .post<ProfileResponse>(`${this.apiUrl}`, profileData)
      .pipe(catchError(this.handleError));
  }

  getMyProfile(): Observable<ProfileResponse> {
    return this.http
      .get<ProfileResponse>(`${this.apiUrl}/me`)
      .pipe(catchError(this.handleError));
  }

  getProfile(userId: string): Observable<ProfileResponse> {
    return this.http
      .get<ProfileResponse>(`${this.apiUrl}/${userId}`)
      .pipe(catchError(this.handleError));
  }

  updateProfile(
    profileData: UpdateProfileRequest
  ): Observable<ProfileResponse> {
    return this.http
      .put<ProfileResponse>(`${this.apiUrl}/me`, profileData)
      .pipe(catchError(this.handleError));
  }

  updateProfileImage(imageUrl: string): Observable<ProfileResponse> {
    return this.http
      .put<ProfileResponse>(`${this.apiUrl}/me/image`, { imageUrl })
      .pipe(catchError(this.handleError));
  }

  deleteProfile(): Observable<ProfileResponse> {
    return this.http
      .delete<ProfileResponse>(`${this.apiUrl}/me`)
      .pipe(catchError(this.handleError));
  }

  getAllProfiles(options?: {
    page?: number;
    limit?: number;
    area?: string;
  }): Observable<ProfilesListResponse> {
    const params = new URLSearchParams();
    if (options?.page) params.append('page', options.page.toString());
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.area) params.append('area', options.area);

    const queryString = params.toString();
    const url = queryString
      ? `${this.apiUrl}/all?${queryString}`
      : `${this.apiUrl}/all`;

    return this.http
      .get<ProfilesListResponse>(url)
      .pipe(catchError(this.handleError));
  }

  searchProfiles(options: {
    q?: string;
    area?: string;
    page?: number;
    limit?: number;
  }): Observable<ProfilesListResponse> {
    const params = new URLSearchParams();
    if (options.q) params.append('q', options.q);
    if (options.area) params.append('area', options.area);
    if (options.page) params.append('page', options.page.toString());
    if (options.limit) params.append('limit', options.limit.toString());

    return this.http
      .get<ProfilesListResponse>(`${this.apiUrl}/search?${params.toString()}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error ${error.status}: ${error.statusText}`;
      }
    }

    console.error('ProfileService Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}

