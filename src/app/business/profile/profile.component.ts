import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ProfileService,
  UserProfile,
  UpdateProfileRequest,
} from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export default class ProfileComponent implements OnInit {
  profile: UserProfile | null = null;
  isEditing = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Form data
  formData: UpdateProfileRequest = {
    biografia: '',
    area: '',
    telefono: '',
    ubicacion: '',
    sitio_web: '',
    redes_sociales: {
      linkedin: '',
      twitter: '',
      github: '',
    },
  };

  // Available areas
  areas = [
    'Desarrollo de Software',
    'Diseño UX/UI',
    'Marketing Digital',
    'Ventas',
    'Recursos Humanos',
    'Finanzas',
    'Operaciones',
    'Soporte Técnico',
    'Gestión de Proyectos',
    'Investigación y Desarrollo',
    'Otro',
  ];

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading = true;
    this.errorMessage = '';

    this.profileService.getMyProfile().subscribe({
      next: (response) => {
        this.profile = response.data;
        this.populateForm();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }

  populateForm() {
    if (this.profile) {
      this.formData = {
        biografia: this.profile.biografia || '',
        area: this.profile.area || '',
        telefono: this.profile.telefono || '',
        ubicacion: this.profile.ubicacion || '',
        sitio_web: this.profile.sitio_web || '',
        redes_sociales: {
          linkedin: this.profile.redes_sociales?.linkedin || '',
          twitter: this.profile.redes_sociales?.twitter || '',
          github: this.profile.redes_sociales?.github || '',
        },
      };
    }
  }

  startEditing() {
    this.isEditing = true;
    this.populateForm();
  }

  cancelEditing() {
    this.isEditing = false;
    this.populateForm();
    this.errorMessage = '';
    this.successMessage = '';
  }

  saveProfile() {
    if (!this.isFormValid()) {
      this.errorMessage = 'Por favor completa todos los campos requeridos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.profileService.updateProfile(this.formData).subscribe({
      next: (response) => {
        this.profile = response.data;
        this.isEditing = false;
        this.isLoading = false;
        this.successMessage = 'Perfil actualizado exitosamente';
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }

  updateProfileImage() {
    const imageUrl = prompt('Ingresa la URL de tu imagen de perfil:');
    if (imageUrl && imageUrl.trim()) {
      this.isLoading = true;
      this.profileService.updateProfileImage(imageUrl.trim()).subscribe({
        next: (response) => {
          this.profile = response.data;
          this.isLoading = false;
          this.successMessage = 'Imagen de perfil actualizada exitosamente';
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        },
      });
    }
  }

  isFormValid(): boolean {
    return !!(this.formData.area && this.formData.area.trim());
  }

  getProfileImage(): string {
    return (
      this.profile?.imagen_url ||
      'https://via.placeholder.com/150x150?text=Sin+Imagen'
    );
  }

  hasSocialMedia(): boolean {
    if (!this.profile?.redes_sociales) return false;
    const socials = this.profile.redes_sociales;
    return !!(socials.linkedin || socials.twitter || socials.github);
  }

  getSocialMediaLinks() {
    if (!this.profile?.redes_sociales) return [];

    const links = [];
    if (this.profile.redes_sociales.linkedin) {
      links.push({
        name: 'LinkedIn',
        url: this.profile.redes_sociales.linkedin,
        icon: 'fab fa-linkedin',
      });
    }
    if (this.profile.redes_sociales.twitter) {
      links.push({
        name: 'Twitter',
        url: this.profile.redes_sociales.twitter,
        icon: 'fab fa-twitter',
      });
    }
    if (this.profile.redes_sociales.github) {
      links.push({
        name: 'GitHub',
        url: this.profile.redes_sociales.github,
        icon: 'fab fa-github',
      });
    }

    return links;
  }
}
