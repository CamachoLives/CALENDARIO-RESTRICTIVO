import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../../services/country.service';


@Component({
  selector: 'app-user-edicion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edicion.component.html',
  styleUrl: './user-edicion.component.css'
})

export class UserEdicionComponent {


  imagePreview: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    this.imagePreview = null;
  }
  

}
