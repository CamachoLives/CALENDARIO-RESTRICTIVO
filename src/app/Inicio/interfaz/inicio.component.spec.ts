import { ComponentFixture, TestBed } from '@angular/core/testing';
import { inicioComponent } from './inicio.component';

describe('inicioComponent', () => {
  let component: inicioComponent;
  let fixture: ComponentFixture<inicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [inicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(inicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
