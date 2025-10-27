import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})


export class UsuariosComponent {

data = [
    { nombres: 'Cristian', apellidos: 'Camacho', empresa: 'MiEmpresa', rol: 'Ingeniero', grupo: 'Desarrollo', cedula: '123456789', telefono: '3001234567', correo: 'correo@empresa.com', cargo: 'Senior', edad: 30, activo: 'Activo' },
    { nombres: 'Ana', apellidos: 'Gómez', empresa: 'TechCorp', rol: 'Analista', grupo: 'QA', cedula: '987654321', telefono: '3109876543', correo: 'ana@techcorp.com', cargo: 'Junior', edad: 25, activo: 'Activo' },
    // Agrega más registros
  ];

  searchTerm = '';
  filteredData = [...this.data];
  paginatedData: any[] = [];
  rowsPerPage = 5;
  currentPage = 1;
  totalPagesArray: number[] = [];

  constructor() {
    this.actualizarPaginacion();
  }

  filtrarDatos() {
    const term = this.searchTerm.toLowerCase();
    this.filteredData = this.data.filter(item =>
      Object.values(item).some(val => String(val).toLowerCase().includes(term))
    );
    this.currentPage = 1;
    this.actualizarPaginacion();
  }

  actualizarPaginacion() {
    const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
    this.totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    this.paginatedData = this.filteredData.slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage);
  }

  cambiarPagina(page: number) {
    this.currentPage = page;
    this.actualizarPaginacion();
  }

  editar(item: any) {
    alert(`Editar: ${item.nombres} ${item.apellidos}`);
    // Aquí puedes abrir un modal o navegar a un formulario
  }

  eliminar(item: any) {
    if (confirm(`¿Eliminar a ${item.nombres} ${item.apellidos}?`)) {
      this.data = this.data.filter(d => d !== item);
      this.filtrarDatos();
    }
  }

}
