import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsultaComponent } from './user-consulta.component';

describe('UserConsultaComponent', () => {
  let component: UserConsultaComponent;
  let fixture: ComponentFixture<UserConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
